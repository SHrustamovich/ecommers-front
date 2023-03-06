import { Drawer } from "antd";
import { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { FilterIcon } from "../assets/icons/icons";
import { CategoryTopSide } from "../components/CategoryTopSide";
import { FilterSide } from "../components/FilterSide";
import { GlabalCard } from "../components/Card/GlabalCard";
import { useLoad } from "../hooks/request";
import useLanguage from "../hooks/useLanguage";
import { productArr } from "./types";

export const CategoryPages: FC = () => {
    const [open, setOpen] = useState(false);
    const translate = useLanguage();
    const location = useLocation();
    
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    type LocationType = typeof location.pathname;

    const productRequest = useLoad<productArr, LocationType>(
        { url: location.pathname },
        [location.pathname]
    );
    const { loading, response } = productRequest;
    let count = response?.products.length
    return (
        <div className='category-page'>
            <CategoryTopSide data={response?.categoryBrands} count={count} />
            <div className='category-page__sort container'>
                <div className='simple__filter'>
                    <button onClick={showDrawer}>
                        <FilterIcon />
                        <span>{translate("filter")}</span>
                    </button>
                    <Drawer
                        title='Basic Drawer'
                        placement='bottom'
                        onClose={onClose}
                        open={open}
                    >
                        <FilterSide data={response?.categoryBrands} catData = {response?.categoryAttributes} />
                    </Drawer>
                </div>
                <div className='simple__sort'>
                    <select name='' id=''>
                        <option value='arzon'>{translate("cheap")}</option>
                        <option value='qimmat'>{translate("expensive")}</option>
                    </select>
                </div>
            </div>
            <div className='category-page sort container'>
                <div className='sort__filter'>
                    <FilterSide data={response?.categoryBrands} catData = {response?.categoryAttributes}/>
                </div>
                
                <GlabalCard data = {response?.products} loading= {loading} />
            </div>
        </div>
    );
};
