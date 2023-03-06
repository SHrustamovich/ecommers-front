import { FC, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";
import useLanguage from "../hooks/useLanguage";
import { categoryAttributes, categoryBrandsI } from "../pages/types";
import { brandList, colorData, sizeData } from "../utilts/data";
import { MultiRange } from "./MultiRange";

interface dataI {
    data: categoryBrandsI[] | undefined;
    catData: categoryAttributes[] | undefined;
}

export const FilterSide: FC<dataI> = ({ data, catData }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const translate = useLanguage();

    const { language } = useContext(LanguageContext);

    const handlyPrice = ({ min, max }: { min: number; max: number }) => {};

    const handlyRadio = (event: any) => {
        setSearchParams({ time: event.target.value });
    };

    return (
        <div className='sort__bar'>
            <div className='sort__date'>
                <p className='sort__text'>{translate("delever")}</p>
                <form className='sort__radio' onChange={handlyRadio}>
                    <div>
                        <input
                            type='radio'
                            name='radio'
                            value={translate("dont")}
                        />
                        <label>{translate("dont")}</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            name='radio'
                            value={translate("day")}
                        />
                        <label>{translate("day")}</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            name='radio'
                            value={translate("week")}
                        />
                        <label>{translate("week")}</label>
                    </div>
                </form>
                <button className='sort__full'>{translate("watch")}</button>
            </div>
            <div className='sort__brand'>
                <p className='sort__text'>{translate("brand")}</p>
                <div className='sort__check'>
                    {data?.map((item) => (
                        <div key={item.id}>
                            <input type='checkbox' value={item.id} />
                            <label htmlFor=''>
                                {language === "uz"
                                    ? item.name_uz
                                    : item.name_ru}
                            </label>
                        </div>
                    ))}
                </div>
                <button className='sort__full'>{translate("watch")}</button>
            </div>
            <div className='sort__size'>
                <p className='sort__text'>{translate("size")}</p>
                <div className='sort__check'>
                    {sizeData?.map((item) => (
                        <div key={item}>
                            <input type='checkbox' value={item} />
                            <label htmlFor=''>{item}</label>
                        </div>
                    ))}
                </div>
                <button className='sort__full'>{translate("watch")}</button>
            </div>
            <div className='sort__color'>
                <p className='sort__text'>{translate("color")}</p>
                <div className='sort__btn'>
                    {colorData.map((item) => (
                        <button
                            style={{
                                background: item.bg,
                                width: 26,
                                height: 26,
                                borderRadius: 50,
                            }}
                            key={item.id}
                        ></button>
                    ))}
                </div>
                <button className='sort__full'>{translate("watch")}</button>
            </div>
            <div className='sort__price'>
                <p className='sort__text'>{translate("price")}</p>
                <div className='sort__price__input'>
                    <MultiRange />
                </div>
            </div>
        </div>
    );
};
