import { FC } from "react";
import { Banner } from "../components/Banner";
import { BrandCard } from "../components/BrandCard";
import { Card } from "../components/Card";
import { allProductI } from "../components/Card/types";
import { MainCard } from "../components/MainCard";
import {MainSwiper} from "../components/Swiper";
import { allCategoryI } from "../components/types";
import { useLoad } from "../hooks/request";
import useLanguage from "../hooks/useLanguage";
import { productListUrl } from "../utilts/urls";
import { productI } from "./types";

export const Main: FC = () => {
    const translate = useLanguage();
    const productRequest = useLoad<allProductI>({ url: productListUrl })
    const { loading, response } = productRequest
    return (
        <div className='main'>
            <MainSwiper data={response?.products} />
            <Card data={response?.products}/>
            <span className='main-trend_text'>{translate("trend")}</span>
            <MainCard data={response?.products}/>
            <span className='main-trend_text'>{translate("aksiya")}</span>
            <MainCard data={response?.products}/>
            <span className='main-trend_text'>{translate("brand")}</span>
            <BrandCard data={response?.products}/>
            <span className='main-trend_text'>{translate("aksiya")}</span>
            <MainCard data={response?.products}/>
            <Banner/>
        </div>
    );
};
