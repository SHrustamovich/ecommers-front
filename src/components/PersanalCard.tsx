import { FC, useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { brandList, productList, sizeData } from "../utilts/data";
import useLanguage from "../hooks/useLanguage";
import { Delivery, Return, Sett } from "../assets/icons/icons";
import { cardI } from "./Card/types";
// import { useCardContext } from "../context/KarzinkaContext";
// import  { CardContext } from "../context/KarzinkaContext";

interface IProps {
    data: cardI | undefined;
}

export const PersanalCard: FC<IProps> = ({ data }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const translate = useLanguage();

    // const { cardData, setCardData } = useContext(CardContext);

    // console.log(cardData)
   
    // const {
    //     getItemQuentity,
    //     increaseCardQuentity,
    //     decreaseCardQuentity,
    //     removeFromCard,
    // } = useCardContext();

    const handlyBtn = () => {

        // if (data) {
        //     increaseCardQuentity(data.id);
        // }    
}

    return (
        <>
            <div className='persanal-card' key={1}>
                <div className='persanal__slider'>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        direction='vertical'
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='mySwiperOne'
                    >
                        {data?.images.map((item) => (
                            <SwiperSlide className='mySwiper__item' key={item}>
                                <img className='mySwiper__img' src={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='mySwiperTwo'
                    >
                        {data?.images.map((item) => (
                            <SwiperSlide
                                className='mySwiperTwo__item'
                                key={item}
                            >
                                <img className='mySwiper__img' src={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='persanal__info'>
                    <div className='persanal__color'>
                        <span>{translate("color")}:</span>
                        {data?.images.map((item) => (
                            <div className='persanal__image' key={1}>
                                <img src={item} alt='/' />
                            </div>
                        ))}
                    </div>
                    <div className='persanal__tur'>
                        {translate("comp")}:<span>Легкая сетка, тонкая</span>
                    </div>
                    <div className='persanal__size'>
                        {translate("size")}:
                        <select name='select' id=''>
                            {sizeData.map((item) => (
                                <option value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='persanal__del'>
                        <Delivery />
                        <p>{translate("deliver")}</p>
                    </div>
                    <div className='persanal__del'>
                        <Sett />
                        <p>{translate("set")}</p>
                    </div>
                    <div className='persanal__del'>
                        <Return />
                        <p>{translate("return")}</p>
                    </div>
                    <p className='persanal__brand'>{translate("brand")}</p>
                    <div className='persanal__brand__img'>
                        <img src={data?.brand.image} alt='' />
                    </div>
                    <p className='persanal__price'>
                        {data?.price} {translate("sum")}
                    </p>
                    <div className='persanal__btn'>
                        <button
                            onClick={handlyBtn}
                        >
                            {translate("karzinka")}
                        </button>
                    </div>
                </div>
                <div className='persanal__plan plan'>
                    <p className='plan__title'>0% {translate("payment")}</p>
                    <span className='plan__price'>
                        {Number(data?.price) / 4} UZS x4
                    </span>
                    <p className='plan__text'>
                        Быстро доставим любой Ваш заказ по всему Узбекистану!
                        Срок доставки от 1 до 2х рабочих дней! Стоимость
                        доставки: 30 000 сум!
                    </p>
                </div>
            </div>
            <div className='description'>
                <div className='character'>
                    <h4>{translate("product")}</h4>
                    <div className='character__text'>
                        <h5>{translate("character")}</h5>
                        <p>
                            {translate("brand")}________{data?.brand.name_uz}
                        </p>
                        <p>
                            {translate("sport")}________{data?.category.name_uz}
                        </p>
                    </div>
                    <div className='character__text'>
                        <h5>{translate("character")}</h5>
                        <p>
                            {translate("metal")}_____{data?.desc_short_uz}
                        </p>
                        <p>
                            {translate("metal")}_____{data?.desc_short_uz}
                        </p>
                    </div>
                    <button>{translate("allCharc")}</button>
                </div>
                <div className='description__text'>
                    <h4>{translate("desc")}</h4>
                    <p>
                        {data?.name_uz} — дебютная модель кроссовок в линейке
                        Yeezy, которая выходит в феврале 2015 года.
                        Изготовленные из натуральной замши, эти кроссовки
                        обладают высоким верхом со необычной шнуровкой и
                        липучкой, а также застежкой на молнии сбоку.
                    </p>
                </div>
            </div>
        </>
    );
};
