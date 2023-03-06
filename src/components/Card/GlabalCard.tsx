import { Spin } from "antd";
import { FC, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Aylana, Cash, FullStar, Star } from "../../assets/icons/icons";
import { LanguageContext } from "../../context/languageContext";
import { useLoad } from "../../hooks/request";
import useLanguage from "../../hooks/useLanguage";
import { productArr } from "../../pages/types";
import { productList } from "../../utilts/data";
import { shortTitletwo } from "../../utilts/helpers";
import { productListUrl } from "../../utilts/urls";
import { allProductI, cardI } from "./types";

interface dataI {
    data: cardI[] | undefined;
    loading: boolean;
}

export const GlabalCard: FC<dataI> = ({ data, loading }) => {
    const translate = useLanguage();

    const { language } = useContext(LanguageContext);

    return (
        <>
            {loading ? (
                <Spin />
            ) : (
                <div className='glabal-cards container'>
                    {data?.map((item) => (
                        <NavLink to={`/product/${item.slug}`}>
                            <div className='glabal-card' key={item.id}>
                                <div className='glabal-card__img'>
                                    <img src={item.images[0]} alt='/' />
                                </div>
                                <div className='glabal-card__title'>
                                    {shortTitletwo(item.name_uz)}
                                </div>
                                <div className='glabal-card__star'>
                                    <FullStar />
                                    <FullStar />
                                    <FullStar />
                                    <Star />
                                </div>
                                <div className='glabal-card__cash'>
                                    <Cash /> <span>{translate("cash")}</span>
                                </div>
                                <div className='glabal-card__month'>
                                    <span>
                                        {Math.floor(Number(item.price) / 12)}
                                    </span>
                                    <p>{translate("month")}</p>
                                </div>
                                <div className='glabal-card__price'>
                                    <p>
                                        {item.price} {translate("sum")}
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            )}
        </>
    );
};
