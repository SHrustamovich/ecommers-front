import { FC, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";
import useLanguage from "../hooks/useLanguage";
import { categoryBrandsI } from "../pages/types";

interface propsI {
    data: categoryBrandsI[] | undefined;
    count:number |undefined
}

export const CategoryTopSide: FC<propsI> = ({ data,count }) => {
    const { language } = useContext(LanguageContext);
    const translate = useLanguage();
    const location = useLocation();
    return (
        <div className='category-top container'>
            <div className='path'>
                <p>
                    {translate("home")}
                    {location.pathname}
                </p>
            </div>
            <div className='category-top__name'>
                <p>{location.pathname.split('/')[2]}</p> <span>{count} товаров</span>
            </div>
            <div className='category-top__brand'>
                {data?.map((item) => (
                    <span>
                        {language === "uz" ? item.name_uz : item.name_ru}
                    </span>
                ))}
            </div>
        </div>
    );
};
