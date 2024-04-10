import React, {FC} from "react";
import Styles from './Card.module.css';
import {IProduct} from "../../model/types.ts";

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface IProductCardProps extends IProduct {
  readonly slot: React.ReactNode;
}

export const Card: FC<IProductCardProps> = ({name, price, image, slot}) => {
  const pathToImage = `${BASE_URL}/${image}`;

  return (
    <article className={Styles['card']}>
      <div className={Styles['card__header']}>
        <img src={pathToImage} alt={`Превью товара ${name}`} loading='lazy'/>
      </div>
      <div className={Styles['card__body']}>
        <h3>{name}</h3>
        <span>{Number(price)} &#x20bd;</span>
      </div>
      <div className={Styles['card__footer']}>
        {slot}
      </div>
    </article>
  )
}