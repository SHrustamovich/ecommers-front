import { FC } from "react";
import { BannerList } from "../utilts/data";

export const Banner: FC = () => {
    return (
        <div className='banner container'>
            {BannerList.map((item) => (
                <div className='banner-img' key={item.id}>
                    <img src={item.image} alt='/' />
                </div>
            ))}
        </div>
    );
};
