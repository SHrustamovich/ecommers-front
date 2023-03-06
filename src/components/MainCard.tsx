import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Aylana, Cash, FullStar, Star } from "../assets/icons/icons";
import useLanguage from "../hooks/useLanguage";
import { IPropsArr } from "../pages/types";
import { productList } from "../utilts/data";

export const MainCard: FC<IPropsArr> = ({ data }) => {
    const translate = useLanguage();

    let length = 4;
    const handlyMore = () => {
        length = 8;
    };
    return (
        <>
            <div className='main-cards container'>
                {data?.slice(0, length).map((item) => (
                    <NavLink to={`/product/${item.slug}`} key={item.id}>
                        <div className='main-card' key={item.id}>
                            <span className='main-card_hot'>HOT</span>
                            <div className='main-card_img'>
                                <img src={item.images[0]} alt='/' />
                            </div>
                            <div className='main-card_title'>
                                {item.name_uz}
                            </div>
                            <div className='main-card_star'>
                                <FullStar />
                                <FullStar />
                                <FullStar />
                                <Star />
                            </div>
                            <div className='main-card_cash'>
                                <Cash /> <span>{translate("cash")}</span>
                            </div>
                            <div className='main-card_month'>
                                <span>
                                    {Math.floor(Number(item.price) / 12)}
                                </span>
                                <p>{translate("month")}</p>
                            </div>
                            <div className='main-card_price'>
                                <p>
                                    {item.price} {translate("sum")}
                                </p>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
            <div className='main-card_btn'>
                <button onClick={handlyMore}>
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
