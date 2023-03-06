import { FC } from "react";
import { ErrorIcon } from "../assets/icons/icons";
import { CardContext } from "../context/KarzinkaContext";
// import { useCardContext } from "../context/KarzinkaContext";
import useLanguage from "../hooks/useLanguage";
import { productList } from "../utilts/data";

export const KarzinkaCard: FC = () => {
    const translate = useLanguage();

    const { cardData, setCardData } = CardContext()

//     const {
//         cardData
//     } = useCardContext();
// console.log(cardData)
    const quantity = 0;
    return (
        <div className='karzinka-main'>
            <div className='karzinka-cards'>
                {productList.slice(0, 2).map((item) => (
                    <div className='karzinka-card'>
                        <button className='karzinka-card__btn'>x</button>
                        <div className='karzinka-card__img'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className='karzinka-card__info'>
                            <p className='karzinka-card__name'>{item.name}</p>
                            <div className='karzinka-card__counter'>
                                <button>-</button>
                                <span>{quantity}</span>
                                <button>+</button>
                            </div>
                            <div className='karzinka-card__price'>
                                <div>
                                    <p>{translate("price")}:</p>
                                    <span>{item.price}</span>
                                </div>
                                <div>
                                    <p>{translate("dprice")}:</p>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='orderCard'>
                <div className='orderCard__title'>
                    <p>{translate("total")}:</p>
                    <span>123</span>
                </div>
                <div className='orderCard__info'>
                    <div>
                        <p>{translate("kupon")}:</p>
                        <span>123</span>
                    </div>
                    <div>
                        <p>{translate("dprice")}:</p>
                        <span>123</span>
                    </div>
                    <div>
                        <p>{translate("pprice")}:</p>
                        <span>123</span>
                    </div>
                    <div>
                        <p>{translate("del")}:</p>
                        <span>Kurer</span>
                    </div>
                </div>
                <div className='orderCard__error'>
                    <ErrorIcon />
                    <p>{translate("reg")}</p>
                </div>
                <div className='orderCard__btn'>
                    <button>{translate("of")}</button>
                </div>
                <p className='orderCard__text'>{translate("shart")}</p>
            </div>
        </div>
    );
};
