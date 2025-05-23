import React from "react";
import { Link } from "react-router";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8">
      {title ? <Cover img={coverImg} title={title} /> : ""}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {title ? (
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4">
            Order your Favourite Food
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default MenuCategory;
