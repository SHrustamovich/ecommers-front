import { FC } from "react";
import { SearchIcon } from "../../assets/icons/icons";
import useLanguage from "../../hooks/useLanguage";

export const Search: FC = () => {
    const translate = useLanguage();
    return (
        <div className='header-search'>
            <div className='header-search_input'>
                <input
                    type='text'
                    className='header-input'
                    placeholder={translate("search")}
                />
            </div>
            <button className='header-input_btn'>
                <SearchIcon />
            </button>
        </div>
    );
};
