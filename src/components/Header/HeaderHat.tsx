import { FC } from "react";
import { Link } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";
import { SelectLang } from "./Select";

export const HeaderHat: FC = () => {
   
    const translate = useLanguage()
    return (
        <div className='header-hat'>
            <div className='header-hat_geo container'>
                <button className='header-hat_btn'>0%{translate('payment')}</button>
                <p className='header-hat_text'>{translate('city')}</p>
                <Link
                    to='https://goo.gl/maps/8DaakJ3wMKPViog86'
                >
                   <span className="header-hat_text">Ургенч</span>
                </Link>
            </div>
            <div className='header-hat_language container'>
                <Link
                    to='https://t.me/eccommerse_bot'
                >
                   <span className="header-hat_text"> {translate('question')}</span>
                </Link>
                <button className='header-hat_btn'>{translate('headerCall')}</button>
                 <SelectLang/>
            </div>
        </div>
    );
};
