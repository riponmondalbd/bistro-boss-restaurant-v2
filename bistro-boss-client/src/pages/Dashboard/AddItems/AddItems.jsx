import React from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "content-Type": "multipart/form-data" },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is add to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <title>Bistro Boss | Add Items</title>
      <SectionTitle heading={"add an item"} subheading={"What's New?"} />
      <div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* recipe name  */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Name*</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
            />
          </fieldset>
          <div className="flex gap-4">
            {/* category */}
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Category*</legend>
              <select
                {...register("category", { required: true })}
                defaultValue="Select a Category"
                className="select w-full"
              >
                <option disabled={true}>Select a Category</option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"dessert"}>Dessert</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </fieldset>

            {/* price */}
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Price*</legend>
              <input
                type="number"
                className="input w-full"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </fieldset>
          </div>
          {/* recipe details */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Details*</legend>
            <textarea
              className="textarea h-24 w-full"
              placeholder="Recipe Details"
              {...register("recipe", { required: true })}
            ></textarea>
          </fieldset>
          {/* recipe image */}
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-ghost w-full"
          />

          <button className="btn">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
