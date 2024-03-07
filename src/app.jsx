import items from "./data";
import Category from "./Catagory";
import Menu from "./menu";
import { useState } from "react";

function AppJs() {
  const [menuItems, setItems] = useState(items);
  const [categorys, setcatagorys] = useState([]);
  const filterItems = (category) => {
    if (category === "all") {
      setItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Category filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default AppJs;
