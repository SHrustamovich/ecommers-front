import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dislike, FullStar, LikeFinger, Star } from "../assets/icons/icons";
import useLanguage from "../hooks/useLanguage";
import { clentData } from "../utilts/data";
import { shortTitle } from "../utilts/helpers";
import { cardI } from "./Card/types";

interface IProps {
    data: cardI[] | undefined;
}

export const ClentSlider: FC<IProps> = ({data}) => {
    const translate = useLanguage();

    const LikeBtn = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const DislikeBtn = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <div className='clent'>
            <div className='clent__title'>
                <p>
                    {translate("product")} {translate("E")}
                </p>
                <span>
                    {data?.length} {translate("E")}
                </span>
            </div>
            <div className='clent__slider'>
                <NavLink to='/'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={28}
                        modules={[Pagination]}
                        className='mySwiperClent'
                    >
                        {
                            data?.length ? (data.map((item) => (
                                <SwiperSlide className='clent__slider__item' key={item.id}>
                                    <div className='clent__header'>
                                        <div className='clent__avatar'>
                                            <img
                                                src={item.images[0]}
                                                // alt={item.name_uz}
                                            />
                                        </div>
                                        <p>Shohruh</p>
                                        <span>{item.updated_at}</span>
                                    </div>
                                    <span className='clent__star'>
                                        <FullStar />
                                        <FullStar />
                                        <FullStar />
                                        <FullStar />
                                        <Star />
                                    </span>
                                    <div className='clent__images'>
                                        {item.images.map((el) => (
                                            <div className='clent__image' key={el}>
                                                <img src={el} alt='/' />
                                            </div>
                                        ))}
                                    </div>
                                    <p className='clent__text'>{shortTitle(item.description_uz)}</p>
                                    <div className='clent-btn'>
                                        <button onClick={LikeBtn}>
                                            <LikeFinger />
                                        </button>
                                        <button onClick={DislikeBtn} >
                                            <Dislike />
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))) : null
                            }
                    </Swiper>
                </NavLink>
            </div>
        </div>
    );
};
