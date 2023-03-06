import { FC } from "react";
import { useLocation } from "react-router-dom";
import { ClentSlider } from "../components/ClentSlider";
import { PerProduct } from "../components/PerProduct";
import { PersanalCard } from "../components/PersanalCard";
import { SimilarCard } from "../components/SimilarCard";
import { useLoad } from "../hooks/request";
import { productI } from "./types";

export const PersanalPage: FC = () => {
    const location = useLocation()
    type LocationType = typeof location.pathname;
    const productGet = useLoad<productI>({ url: location.pathname })
    const { loading, response } = productGet 
    return (
        <div className="personal-page container">
            <PerProduct data = {response?.product} />
            <div className="persanal-page__main">
                <div className="persanal-page__slider">
                    <PersanalCard data={response?.product} />
                    <ClentSlider data={response?.recommendedProducts} />
                    <SimilarCard data ={response?.recommendedProducts} />
                </div>
            </div>
        </div>
    )
}