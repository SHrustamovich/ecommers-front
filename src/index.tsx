import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./context/languageContext";
import { App } from "./App";
import "./assets/style/main.scss";
import KarzinkaContext from "./context/KarzinkaContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <LanguageProvider>
            <KarzinkaContext>
                <App />
            </KarzinkaContext>
        </LanguageProvider>
    </BrowserRouter>
);
