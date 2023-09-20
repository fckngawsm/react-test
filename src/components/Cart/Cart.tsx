import React from "react";
import {
  CartImage,
  CartImageForButton,
  CartInfo,
  CartItem,
  CartItemAuthor,
  CartItemButton,
  CartItemDescription,
  CartItemDetails,
  CartItemPrice,
  CartItemTitle,
} from "./CartStyle";
import { ProductType } from "../../types/productType";
import { CartType } from "../../types/cartType";

interface CartProps extends Pick<CartType, "Product"> {}

function Cart({ Product }: CartProps) {
  return (
    <CartItem>
      <CartInfo>
        <CartImage src={Product.imageUrl} />
        <CartItemDescription>
          <CartItemTitle>{Product.title}</CartItemTitle>
          <CartItemAuthor>{Product.categories}</CartItemAuthor>
        </CartItemDescription>
      </CartInfo>
      <CartItemDetails>
        <CartItemPrice>{Product.price} руб.</CartItemPrice>
        <CartItemButton>
          <CartImageForButton src="https://www.svgrepo.com/show/21045/delete-button.svg" />
        </CartItemButton>
      </CartItemDetails>
    </CartItem>
  );
}

export default Cart;
