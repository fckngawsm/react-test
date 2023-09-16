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

interface GoodsCardProps extends GoodsType {}

function GoodsCard({
  categories,
  imageUrl,
  price,
  quantity,
  title,
}: GoodsCardProps) {
  return (
    <WrapperCard>
      <CardImage
        src={imageUrl}
        alt="book"
      />
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
