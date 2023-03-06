import { FC } from "react";
import { KarzinkaCard } from "../components/KarzinkaCard";
import useLanguage from "../hooks/useLanguage";

export const KarzinkaPage: FC = () => {
    const translate = useLanguage();
    return (
        <div className='karzinka-page container'>
            <p className='path'>{translate("home")}/karzinka</p>
            <KarzinkaCard />
        </div>
    );
};
