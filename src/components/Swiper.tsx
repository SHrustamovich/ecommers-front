import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IProps, IPropsArr } from "../pages/types";
import { shortTitle, shortTitletwo } from "../utilts/helpers";

export const MainSwiper: FC<IPropsArr> = ({ data }) => {
    return (
        <div className='swiper-main container'>
            <Swiper
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className='mySwiper'
            >
                {data?.slice(0, 4).map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='swiper-body'>
                            <div className='swiper-body_name'>
                                <p className='swiper-body_title'>
                                    {shortTitletwo(item.name_uz)}
                                </p>
                                <p className='swiper-body_text'>
                                    {shortTitle(item.description_uz)}
                                </p>
                                <NavLink to={`/product/${item.slug}`}>
                                    <button className='swiper-body_btn'>
                                        Подробнее
                                    </button>
                                </NavLink>
                            </div>
                            <div className='swiper-body_info'>
                                <span className='swiper-body_data'>
                                    с рассрочкой 0%
                                </span>
                                <span className='swiper-body_data'>0-0-12</span>
                            </div>
                            <div className='swiper-body_img'>
                                <img src={item.images[0]} alt='/' />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
