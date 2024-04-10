import {addItemToCart, ICartItem} from "../../../../entities/cart";
import {useAppDispatch} from "../../../../shared/store";
import {Button} from "antd";
import {FC} from "react";

interface IAddItemToCart {
  product: ICartItem
}

export const AddProductToCart: FC<IAddItemToCart> = ({product}) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(addItemToCart(product));
  }

  return (
    <Button type="primary" onClick={handleClick} block>
      В корзину
    </Button>
  );
};

