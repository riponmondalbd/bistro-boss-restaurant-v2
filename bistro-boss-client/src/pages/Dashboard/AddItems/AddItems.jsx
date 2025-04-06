import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <title>Bistro Boss | Add Items</title>
      <SectionTitle heading={"add an item"} subheading={"What's New?"} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} type="text" />
          <select
            {...register("category")}
            defaultValue="Select a Category"
            className="select"
          >
            <option disabled={true}>Select a Category</option>
            <option value={"salad"}>Salad</option>
            <option value={"pizza"}>Pizza</option>
            <option value={"soup"}>Soup</option>
            <option value={"desert"}>Desert</option>
            <option value={"drinks"}>Drinks</option>
          </select>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
