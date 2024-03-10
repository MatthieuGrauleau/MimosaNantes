// Menu.js

import "./menu.scss";
import menu from "../../assets/img/menu.jpg";

function Menu() {
  return (
    <menu id="carte" className="menu">
        <h2>EN CE MOMENT</h2>
        <div className="menu-item">
            <div className="menu-item-gauche">
                <img src={menu} alt="" />
            </div>
            <div className="menu-item-droite">
                <img src={menu} alt="" />
            </div>
        </div>
    </menu>
  );
}

export default Menu;
