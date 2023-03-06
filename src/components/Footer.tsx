import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { MediaPlay } from "../assets/image/Media";
import useLanguage from "../hooks/useLanguage";
import { MediaApp } from "../assets/image/MediaApp";
import { useLoad } from "../hooks/request";
import { categoryList } from "../utilts/urls";
import { allCategoryI } from "./types";
import { shortTitle, shortTitletwo } from "../utilts/helpers";

export const Footer: FC = () => {
    const categoryGet = useLoad<allCategoryI>({ url: categoryList })
    const { loading, response } = categoryGet
    const translate = useLanguage();
    return (
        <div className='footer-main'>
        <div className="footer">
        <div className='footer-link'>
                <p>{translate("menu")}</p>
                {response?.categories.map((item) => (
                    <NavLink to={`/category/${item.slug}`} key={item.id}>
                        <span className='footer-link_text'>{shortTitletwo(item.name_uz)}</span>
                    </NavLink>
                ))}
            </div>
            <div className='footer-link'>
                <p>{translate("menu")}</p>
                {response?.categories.slice(0, 2).map((item) => (
                    <NavLink to={`/category/${item.slug}`} key={item.id}>
                        <span className='footer-link_text'>{shortTitletwo(item.name_uz)}</span>
                    </NavLink>
                ))}
            </div>
            <div className='footer-link'>
                <p>{translate("menu")}</p>
                {response?.categories.map((item) => (
                    <NavLink to={`/category/${item.slug}`} key={item.id}>
                        <span className='footer-link_text'>{shortTitletwo(item.name_uz)}</span>
                    </NavLink>
                ))}
            </div>
            <div className='footer-link'>
                <p>{translate("menu")}</p>
                {response?.categories.slice(0, 3).map((item) => (
                    <NavLink to={`/category/${item.slug}`} key={item.id}>
                        <span className='footer-link_text'>{shortTitletwo(item.name_uz)}</span>
                    </NavLink>
                ))}
            </div>
            <div className='footer-link_media'>
                <p>{translate("aviable")}</p>
                <Link to='/'>
                    <div className='footer-link_media_img'>
                        <MediaPlay />
                    </div>
                </Link>
                <Link to='/'>
                    <div className='footer-link_media_img'>
                        <MediaApp />
                    </div>
                </Link>
            </div>
        </div>
        <p className="footer-bottom">{translate('bottom')}</p>
            </div>
    );
};
