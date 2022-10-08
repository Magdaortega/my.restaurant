import { useContext } from "react";
import { MenusContext } from "../context/MenusContext";

import MenuCard from "../../Menu Cards/MenuCard/menuCards.component";
import"./nuestroMenu.styles.css"

const NuestroMenu = () => {
    const { menus} =useContext(MenusContext);

    return (
        <div className="products-container">
            (menus.map(menu) => (
                MenuCard key ={menus.id} menu={menu} />
            ))
        </div>
    )
}

export default NuestroMenu