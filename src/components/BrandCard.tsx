import { FC } from "react";
import useLanguage from "../hooks/useLanguage";
import { brandList } from "../utilts/data";
import { shortTitle } from "../utilts/helpers";
import { Aylana } from "../assets/icons/icons";
import { NavLink } from "react-router-dom";
import { IPropsArr } from "../pages/types";

export const BrandCard: FC<IPropsArr> = ({data}) => {
    const translate = useLanguage();
    return (
        <>
            <div className='brand-cards container'>
                {brandList?.map((item) => (
                    <NavLink to={item.name}>
                        <div className='brand-card' key={item.id}>
                        <div className='brand-card_img'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <p className='brand-card_text'>
                            {shortTitle(item.name)}
                        </p>
                    </div>
                    </NavLink>
                ))}
            </div>
            <div className='main-card_btn'>
                <button>
                    <span>
                        <Aylana />
                        <Aylana />
                        <Aylana />
                    </span>
                    <p>{translate("show")}</p>
                </button>
            </div>
        </>
    );
};
