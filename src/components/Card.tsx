import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IPropsArr } from "../pages/types";
import { productList } from "../utilts/data";
import { shortTitle, shortTitletwo } from "../utilts/helpers";
import { allProductI } from "./Card/types";

export const Card: FC<IPropsArr> = ({ data }) => {
    return (
        <div className='cards container'>
            {data?.slice(0, 6).map((item) => (
                <NavLink to={`/product/${item.slug}`} key={item.id}>
                    <div className='card' key={item.id}>
                        <div className='card-bg'></div>
                        <div className='card-body' key={item.id}>
                            <div className='card-info'>
                                <p className='card-info_name'>
                                    {shortTitletwo(item.name_uz)}
                                </p>
                                <div className='card-info_text'>для дома</div>
                            </div>
                            <div className='card-img'>
                                <img src={item.images[0]} alt={item.name_uz} />
                            </div>
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};
