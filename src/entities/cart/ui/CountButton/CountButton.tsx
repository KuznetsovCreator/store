import {Avatar, Badge} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {useAppSelector} from "../../../../shared/store";
import {selectCart} from "../../model/selectors.ts";


export const CountButton = () => {
  const cart = useAppSelector(selectCart)
  const totalQuantityItems = cart.reduce((total, current) => total + current.quantity, 0);

  return (
    <Badge count={totalQuantityItems > 0 ? totalQuantityItems : undefined}>
      <Avatar className='avatar' shape='square' size='large' icon={<ShoppingCartOutlined/>}/>
    </Badge>
  );
};