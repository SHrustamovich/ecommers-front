import { FC, useState } from "react";
import { Link } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";
import { Search } from "./Search";
import { UserBtn } from "./UserBtn";
import MenuBar from "../Category/MenuBar";
import {
    BurgerIcon,
    KarzinkaIcon,
    LikeIcon,
    Logo,
    MenuIcon,
    OrderIcon,
} from "../../assets/icons/icons";
import { useCardContext } from "../../context/KarzinkaContext";

export const Header: FC = () => {
    const translate = useLanguage();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const { cardData } = useCardContext();

    return (
        <div className='header'>
            <MenuBar open={open} onClose={onClose} />
            <div className='header-main'>
                <button className='header-burger' onClick={showDrawer}>
                    <BurgerIcon />
                </button>
                <Link to='/' className='header-logo'>
                    <Logo />
                </Link>
            </div>
            <button className='header-btn' onClick={showDrawer}>
                <MenuIcon />
                <span className='header-btn_text'>{translate("category")}</span>
            </button>
            <div className='header-home_search'>
                <Search />
            </div>
            <div className='header-allIcons'>
                <Link to='/order' className='header-allIcon'>
                    <OrderIcon />
                    <span className='header-allIcon_text'>
                        {translate("headerOrder")}
                    </span>
                </Link>
                <Link to='/product/a-32' className='header-allIcon'>
                    <LikeIcon />
                    <span className='header-allIcon_text'>
                        {translate("favarit")}
                    </span>
                </Link>
                <Link to='/karzinka' className='header-allIcon'>
                    <div className='karzin'>
                        <span>{cardData.length}</span>
                        <KarzinkaIcon />
                    </div>
                    <span className='header-allIcon_text'>
                        {translate("karzinka")}
                    </span>
                </Link>
            </div>
            <div className='header-user'>
                <UserBtn />
            </div>
        </div>
    );
};
