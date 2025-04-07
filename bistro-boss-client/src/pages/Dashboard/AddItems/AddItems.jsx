import React from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                <option value={"desert"}>Desert</option>
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
