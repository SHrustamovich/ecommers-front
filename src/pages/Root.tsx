import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Arrow } from "../assets/icons/icons";
import { Footer } from "../components/Footer";
import { ProductItem } from "../components/ProductItem";
import { CategoryPages } from "./CategoryPage";
import { KarzinkaPage } from "./KarzinkaPage";
import { Main } from "./Main";
import { PersanalPage } from "./PersanalPage";
import { TopSide } from "./TopSide";

export const Root: FC = () => {
    window.onscroll = () => {
        scrollFunction();
    };

    const scroolTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollFunction = () => {
        var mybutton = document.getElementById("topBtn");
        if (
            document.body.scrollTop > 460 ||
            document.documentElement.scrollTop > 460
        ) {
            if (mybutton) {
                mybutton.style.display = "block";
            }
        } else {
            if (mybutton) {
                mybutton.style.display = "none";
            }
        }
    };
    return (
        <div className='root'>
            <button id="topBtn" className='scroolToTop__btn' onClick={scroolTop}>
                <Arrow />
            </button>
            <TopSide />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/category/:slug' element={<CategoryPages />} />
                <Route path="/product/:slug" element = {<PersanalPage/>}/>
                <Route path="/karzinka" element = {<KarzinkaPage/>}/>
            </Routes>
            <Footer />
        </div>
    );
};
