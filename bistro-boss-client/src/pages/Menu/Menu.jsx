import React from "react";
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import Cover from "../Shared/Cover/Cover";

const Menu = () => {
  return (
    <div>
      <title>Bistro Boss | Menu</title>
      <Cover img={menuImg} title={"Our Menu"} />
      <PopularMenu />
      <Cover img={menuImg} title={"Our Menu"} />
      <PopularMenu />
      <Cover img={menuImg} title={"Our Menu"} />
      <PopularMenu />
      <Cover img={menuImg} title={"Our Menu"} />
      <PopularMenu />
    </div>
  );
};

export default Menu;
