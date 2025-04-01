import React from "react";
import menuImg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <title>Bistro Boss | Menu</title>
      <Cover img={menuImg} title={"Our Menu"} />
      {/* main cover */}
      <SectionTitle subheading={"Don't miss"} heading={"Today's Offer"} />
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* desert menu items */}
      <MenuCategory items={dessert} title={"Desserts"} coverImg={desertImg} />
      {/* pizza menu items */}
      <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzaImg} />
      {/* salad menu items */}
      <MenuCategory items={salad} title={"Salads"} coverImg={saladImg} />
      {/* soup menu items */}
      <MenuCategory items={soup} title={"Soups"} coverImg={soupImg} />
    </div>
  );
};

export default Menu;
