import React from "react";
import cart from "../../images/cart.svg";
import {
  CardCategories,
  CardCart,
  CardImage,
  CardInfromation,
  CardTitle,
  CardPrice,
  CardPurchase,
  WrapperCard,
} from "./GoodsCardStyle";
import { GoodsType } from "../../types/goodsType";
import { useAppDispatch } from "../../redux-hooks";
import { deleteProductById } from "../../features/goods/goods-slice";

interface GoodsCardProps extends GoodsType {}

function GoodsCard({
  categories,
  imageUrl,
  price,
  quantity,
  title,
  id,
}: GoodsCardProps) {
  const dispatch = useAppDispatch();
  function handleDeleteById(id: number) {
    dispatch(deleteProductById(id));
  }
  return (
    <WrapperCard>
      <CardImage src={imageUrl} alt="book" />
      <button onClick={() => handleDeleteById(id)}>удалить</button>
      <CardInfromation>
        <CardCategories>{categories}</CardCategories>
        <CardTitle>{title}</CardTitle>
        <CardPurchase>
          <CardPrice>{price} руб.</CardPrice>
          <CardCart src={cart} alt="cart" />
        </CardPurchase>
      </CardInfromation>
    </WrapperCard>
  );
}

export default GoodsCard;
