import { FC, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { TopBottom } from "../../assets/icons/icons";
import { categoryListI } from "../types";

interface MenuItemProps {
    menuData: categoryListI;
    closeDriver: () => void;
}

export const MenuItem: FC<MenuItemProps> = ({ menuData, closeDriver }) => {
    const option = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleChange = () => {
        if (option.current !== null) {
            if (open) {
                setOpen(false);
                option.current.style.maxHeight = "0px";
            } else {
                setOpen(true);
                option.current.style.maxHeight =
                    option.current.scrollHeight + "px";
            }
        }
    };

    const menuClick = () => {
        closeDriver()
    }
    return (
        <div className='menu'>
            <div className='menu__header'>
                <button onClick={handleChange}>
                    <span>{menuData.name_uz}</span>
                    <div className='menu__icon'>
                        <TopBottom />
                    </div>
                </button>
            </div>
            <div ref={option} className={`menu__options ${open ? "open" : ""}`}>
                {menuData.children.map((el) => (
                    <NavLink onClick={menuClick} to={`/category/${el.slug}`}>
                        <div className='menu__item'>{el.name_uz}</div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};
