import {useAppDispatch, useAppSelector} from "../../../shared/store";
import {CartItem, clearCart, ICartItem, selectCart} from "../../../entities/cart";
import {ManageItemInCart} from "../../../features/cartActions/manageItemInCart";
import {Button} from "antd";
import Styles from './Cart.module.css'

export const Cart = () => {
  const cart = useAppSelector<ICartItem[]>(selectCart)
  const dispatch = useAppDispatch()
  const renderProducts = () => {
    return cart?.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        image={item.image}
        quantity={item.quantity}
        slot={<ManageItemInCart item={item}/>}
      />
    ))
  }

  const handleClearCartClick = () => {
    dispatch(clearCart())
  }

  const totalPrice = cart.reduce((sum: number, current: ICartItem) => {
    return +(sum + current.price * current.quantity).toFixed(2)
  }, 0)

  return (
    <section className={Styles['section']}>
      <div className={`container ${Styles['header']}`}>
        <h1>Корзина</h1>
        <Button danger disabled={cart.length === 0} onClick={() => handleClearCartClick()}>
          Очистить
        </Button>
      </div>
      <div className={`container ${Styles['cart']}`}>
        {cart.length > 0 ? (renderProducts()) : <p>Вы еще не добавили ни одного товара</p>}
      </div>
      {totalPrice > 0 &&
        <div className={`container ${Styles['cart-total']}`}>
          <h3>
            Всего: <span>{Number(totalPrice)} &#x20bd;</span>
          </h3>
        </div>
      }
    </section>
  );
};