import {ICartItem} from "../../model/types.ts";
import React, {FC} from "react";
import Styles from './Item.module.css'

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface ICartItemProps extends ICartItem {
  readonly slot: React.ReactNode
}

export const Item: FC<ICartItemProps> = ({name, price, image, slot}) => {
  const pathToImage = `${BASE_URL}/${image}`;

  return (
    <article className={Styles['item']}>
      <div className={Styles['item__body']}>
        <div className={Styles['item__image']}>
          <img src={pathToImage} alt={`Превью товара ${name}`} loading="lazy"/>
        </div>
        <div className={Styles['item__content']}>
          <h2>{name}</h2>
          <span>{Number(price)} &#x20bd;</span>
        </div>
      </div>
      <div className={Styles['item__slot']}>
        {slot}
      </div>
    </article>
  );
};