import {FC} from "react";
import {useAppDispatch} from "../../../../shared/store";
import {Button} from "antd";
import {DeleteOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";
import Styles from './ManageItemInCart.module.css'
import {changeCountOfItemsInCart, deleteItemFromCart, ICartItem} from "../../../../entities/cart";

interface IManageItemInCart {
  item: ICartItem
}

export const ManageItemInCart: FC<IManageItemInCart> = ({item}) => {
  const dispatch = useAppDispatch()

  const handleDownClick = (id: string, quantity: number) => {
    dispatch(changeCountOfItemsInCart({id, quantity: quantity - 1}))
  }
  const handleAddClick = (id: string, quantity: number) => {
    dispatch(changeCountOfItemsInCart({id, quantity: quantity + 1}))
  }
  const handleDeleteClick = (id: string) => {
    dispatch(deleteItemFromCart({id}))
  }

  return (
    <div className={Styles['panel']}>
      <Button
        disabled={item.quantity <= 1}
        type="primary"
        icon={<MinusOutlined/>}
        onClick={() => handleDownClick(item.id, item.quantity)}
      />
      <span>{item.quantity}</span>
      <Button
        type="primary"
        icon={<PlusOutlined/>}
        onClick={() => handleAddClick(item.id, item.quantity)}
      />
      <Button
        danger
        type="primary"
        icon={<DeleteOutlined/>}
        onClick={() => handleDeleteClick(item.id)}
      />
    </div>
  )
}
