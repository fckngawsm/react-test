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

function GoodsCard() {
  return (
    <WrapperCard>
      <CardImage
        src={"https://ir.ozone.ru/s3/multimedia-d/wc700/6531789565.jpg"}
        alt="book"
      />
      <CardInfromation>
        <CardCategories>Книги</CardCategories>
        <CardTitle>Мышь 21321 213 21321321321321</CardTitle>
        <CardPurchase>
          <CardPrice>20$</CardPrice>
          <CardCart src={cart} alt="cart" />
        </CardPurchase>
      </CardInfromation>
    </WrapperCard>
  );
}

export default GoodsCard;
