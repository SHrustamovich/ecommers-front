import { FC, useContext, useState, ReactElement, createContext } from "react";
// import { createContext } from "vm";
import { cardI } from "../components/Card/types";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface KarzinkaContextProps {
    children: ReactElement;
}

interface CardContextI {
    cardData: cardI[];
    setCardData: React.Dispatch<React.SetStateAction<cardI[]>>;
}
const initialValue = {
    cardData: [],
    setCardData: (): void => {
        throw new Error("setContext function must be overridden");
    },
};

export const CardContext = createContext<CardContextI>(initialValue);

const KarzinkaContext: FC<KarzinkaContextProps> = ({ children }) => {
    const initialArray = localStorage.getItem("data")
        ? JSON.parse(localStorage.getItem("data")!)
        : [];

    // const initialState: cardI[] = JSON.parse(localStorage.getItem("data")!)
    //     ? JSON.parse(localStorage.getItem("data")!)
    //     : [];

    const [cardData, setCardData] = useLocalStorage<cardI[]>("data", []);

    return (
        <div>
            <CardContext.Provider value={{ cardData, setCardData }}>
                {children}
            </CardContext.Provider>
        </div>
    );
};
export default KarzinkaContext;




// import { FC, useContext, useState, ReactNode, createContext } from "react";
// import { cardI } from "../components/Card/types";
// import { useLocalStorage } from "../hooks/useLocalStorage";

// interface KarzinkaContextProps {
//     children: ReactNode;
// }

// type CartItem = {
//     id: number;
//     quantity: number;
//     image: string;
//     name_uz: string;
//     name_ru: string;
//     price: string;
// };

// interface CardContextI {
//     getItemQuentity: (id: number) => number;
//     increaseCardQuentity: (id: number) => void;
//     decreaseCardQuentity: (id: number) => void;
//     removeFromCard: (id: number) => void;
//     cardData: CartItem[];
// }

// const CardContext = createContext({} as CardContextI);

// export function useCardContext() {
//     return useContext(CardContext);
// }

// const KarzinkaContext: FC<KarzinkaContextProps> = ({ children }) => {
//     const [cardData, setCardData] = useLocalStorage<CartItem[]>("data", []);

//     function getItemQuentity(id: number) {
//         return cardData.find((item) => item.id === id)?.quantity || 0;
//     }

//     function increaseCardQuentity(id: number) {
//         setCardData((currItems) => {
//             if (currItems.find((item) => item.id === id) == null) {
//                 return [...currItems, { id,image,name_uz,name_ru,price, quantity: 1 }];
//             } else {
//                 return currItems.map((item) => {
//                     if (item.id === id) {
//                         return { ...item, quantity: item.quantity + 1 };
//                     } else {
//                         return item;
//                     }
//                 });
//             }
//         });
//     }

//     function decreaseCardQuentity(id: number) {
//         setCardData((currItems) => {
//             if (currItems.find((item) => item.id === id)?.quantity == 1) {
//                 return currItems.filter((item) => item.id !== id);
//             } else {
//                 return currItems.map((item) => {
//                     if (item.id === id) {
//                         return { ...item, quantity: item.quantity - 1 };
//                     } else {
//                         return item;
//                     }
//                 });
//             }
//         });
//     }

//     function removeFromCard(id: number) {
//         setCardData((currItems) => {
//             return currItems.filter((item) => item.id !== id);
//         });
//     }

//     return (
//         <div>
//             <CardContext.Provider
//                 value={{
//                     getItemQuentity,
//                     increaseCardQuentity,
//                     decreaseCardQuentity,
//                     removeFromCard,
//                     cardData,
//                 }}
//             >
//                 {children}
//             </CardContext.Provider>
//         </div>
//     );
// };
// export default KarzinkaContext;
