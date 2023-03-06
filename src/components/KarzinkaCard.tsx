import { FC } from "react";
import { ErrorIcon } from "../assets/icons/icons";
import { useCardContext } from "../context/KarzinkaContext";
import useLanguage from "../hooks/useLanguage";
import { shortTitle } from "../utilts/helpers";

export const KarzinkaCard: FC = () => {
    const translate = useLanguage();

    const { cardData, incrateQuantity, decrateQuantity, removeItem } =
        useCardContext();

    let all = 0;
    cardData.map((item) => {
        all += item.quantity * Number(item.price);
    });
    console.log(all);

    const handlyRemove = (id: number) => {
        decrateQuantity(id);
    };

    const handlyAdd = (id: number) => {
        incrateQuantity(id);
    };

    const removeItemBtn = (id: number) => {
        removeItem(id);
    };

    return (
        <div className='karzinka-main'>
            <div className='karzinka-cards'>
                <div className='karzinka-page__total'>
                    {translate("kprod")} - {cardData.length}
                </div>
                {cardData.map((item) => (
                    <div className='karzinka-card' key={item.id}>
                        <button
                            className='karzinka-card__btn'
                            onClick={() => removeItemBtn(item.id)}
                        >
                            x
                        </button>
                        <div className='karzinka-card__img'>
                            <img
                                src={item.image}
                                alt={shortTitle(item.name_uz)}
                            />
                        </div>
                        <div className='karzinka-card__info'>
                            <p className='karzinka-card__name'>
                                {shortTitle(item.name_uz)}
                            </p>
                            <div className='karzinka-card__counter'>
                                <button onClick={() => handlyRemove(item.id)}>
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handlyAdd(item.id)}>
                                    +
                                </button>
                            </div>
                            <div className='karzinka-card__price'>
                                <div>
                                    <p>{translate("price")}:</p>
                                    <span>
                                        {Number(item.price) * item.quantity}
                                    </span>
                                </div>
                                <div>
                                    <p>{translate("dprice")}:</p>
                                    <span>100000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='orderCard'>
                <div className='orderCard__title'>
                    <p>{translate("total")}:</p>
                    <span>{all}</span>
                </div>
                <div className='orderCard__info'>
                    <div>
                        <p>{translate("kupon")}:</p>
                        <span>123</span>
                    </div>
                    <div>
                        <p>{translate("dprice")}:</p>
                        <span>{cardData.length * 1000}</span>
                    </div>
                    <div>
                        <p>{translate("pprice")}:</p>
                        <span>{65490}</span>
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
