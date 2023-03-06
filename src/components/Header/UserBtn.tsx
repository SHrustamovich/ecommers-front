import { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { UserIcon } from "../../assets/icons/icons";

export const UserBtn: FC = () => {
    const translate = useLanguage();
    return (
        <button className='header-user_btn'>
            <UserIcon />
            <span className='header-user_text'>{translate("signUp")}</span>
        </button>
    );
};
