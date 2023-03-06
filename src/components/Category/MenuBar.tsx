import { NavLink } from "react-router-dom";
import { Drawer, Menu } from "antd";
import { allCategoryI, MenuPropsI } from "../types";
import { categoryData } from "../../utilts/data";
import { useLoad } from "../../hooks/request";
import { categoryList } from "../../utilts/urls";
import { shortTitletwo } from "../../utilts/helpers";
import { MenuProps } from "rc-menu";
import { TopBottom } from "../../assets/icons/icons";
import { MenuItem } from "./MenuItem";

type MenuItem = Required<MenuProps>["items"][number];

const MenuBar: React.FC<MenuPropsI> = ({ open, onClose }) => {
    const CategoryRequest = useLoad<allCategoryI>({ url: categoryList });
    const { loading, response } = CategoryRequest;

    const closeDriver = () => {
        onClose();
    };

    const openMenu = () => {
        const items = document.querySelector(".menu__options");
        const icons = document.querySelector(".menu__icon");
        items?.classList.toggle("open");
        icons?.classList.toggle("all");
    };

    return (
        <Drawer placement='left' onClose={onClose} open={open}>
            {response?.categories.map((item) => (
                <MenuItem
                    menuData={item}
                    closeDriver={closeDriver}
                    key={item.id}
                />
            ))}

            {/* <div className='menu'>
                    <div className='menu__header'>
                        <button onClick={openMenu}>
                            <span>{item.name_uz}</span>
                            <div className='menu__icon'>
                                <TopBottom />
                            </div>
                        </button>
                    </div>
                    <div className='menu__options'>
                    {item.children.map((el) => (
                            <NavLink
                                onClick={closeDriver}
                                to={`/category/${el.slug}`}
                            >
                                <div className='menu__item'>{el.name_uz}</div>
                            </NavLink>
                    ))}
                    </div>
                </div> */}
            {/* {response?.categories.map((item) => (
                <NavLink
                    to={`/category/${item.slug}`}
                    key={item.id}
                    onClick={closeDriver}
                >
                    <div className='category-list_item'>{shortTitletwo(item.name_uz)}</div>
                </NavLink>
            ))} */}
        </Drawer>
    );
};

export default MenuBar;
