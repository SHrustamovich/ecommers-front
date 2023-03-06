import { FC, useContext, ChangeEvent } from "react";
import { LanguageContext } from "../../context/languageContext";
import { LangEnums } from "../../utilts/helpers";

export const SelectLang: FC = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const handlyChange = (event: ChangeEvent<HTMLSelectElement>) => {
        localStorage.setItem("language", event.target.value);
        setLanguage?.(event.target.value as LangEnums);
    };

    return (
        <select
            defaultValue={language as LangEnums}
            className='header-hat_select'
            onChange={handlyChange}
        >
            <option value='uz'>UZ</option>
            <option value='ru'>RU</option>
        </select>
    );
};
