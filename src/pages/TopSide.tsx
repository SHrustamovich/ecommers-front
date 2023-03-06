import { FC } from "react";
import { Header } from "../components/Header/Header";
import { HeaderHat } from "../components/Header/HeaderHat";
import { Search } from "../components/Header/Search";

export const TopSide: FC = () => {
    return (
        <>
            <HeaderHat />
            <Header />
            <div className='media-search'>
                <Search />
            </div>
        </>
    );
};
