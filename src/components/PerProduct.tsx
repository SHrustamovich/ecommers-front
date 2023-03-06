import { FC } from "react";
import { useLocation } from "react-router-dom";
import { FullStar, Star } from "../assets/icons/icons";
import { shortTitle } from "../utilts/helpers";
import { cardI } from "./Card/types";

interface IProps {
    data: cardI | undefined;
}

export const PerProduct: FC<IProps> = ({ data }) => {
    const location = useLocation()
    return (
        <div className='perProduct'>
            <p className='perProduct'>Главная{shortTitle(location.pathname)}</p>
            <div className='perProduct__main'>
                <h1 className='perProduct__text'>{data?.name_uz}</h1>
                <div className='perProduct__star'>
                    <FullStar />
                    <FullStar />
                    <FullStar />
                    <Star />
                </div>
            </div>
        </div>
    );
};
