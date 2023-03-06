import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Cash, FullStar, Star } from '../assets/icons/icons'
import useLanguage from '../hooks/useLanguage'
import { productList } from '../utilts/data'
import { cardI } from './Card/types'

interface IProps {
    data: cardI[] | undefined;
}

export const SimilarCard: FC<IProps> = ({data}) => {
    const translate = useLanguage()
    return (
        <div className="similar">
            <div className="similar__title">
                {translate('similar')}
            </div>
            <div className="similar__card">
                {
                  data?.length ?  data.map(item => (
                        <NavLink to={`/product/${item.slug}`} key={item.id}>
                        <div className='main-card' key={item.id}>
                       <span className='main-card_hot'>HOT</span>
                       <div className='main-card_img'>
                           <img src={item.images[0]} alt='/' />
                       </div>
                       <div className='main-card_title'>{item.name_uz}</div>
                       <div className='main-card_star'>
                           <FullStar />
                           <FullStar />
                           <FullStar />
                           <Star />
                       </div>
                       <div className='main-card_cash'>
                           <Cash /> <span>{translate("cash")}</span>
                       </div>
                       <div className='main-card_month'>
                           <span>{Math.floor(Number(item.price) / 12)}</span>
                           <p>{translate("month")}</p>
                       </div>
                       <div className='main-card_price'>
                           <p>
                               {item.price} {translate("sum")}
                           </p>
                       </div>
                   </div>
                  </NavLink>
                    )) : null
                }
            </div>
        </div>
    )
}