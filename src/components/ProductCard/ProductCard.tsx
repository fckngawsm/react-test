import React, { useState } from "react";
import {
  ButtonAdmin,
  ButtonBuy,
  ButtonsWrapper,
  CardCategories,
  CardImage,
  CardInformation,
  CardPrice,
  CardTitile,
  WrapperCard,
} from "./ProductCardStyle";
import { GoodsType } from "../../types/goodsType";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { deleteProductById } from "../../features/goods/goods-slice";
import { currentUserInfo } from "../../features/users/users-selectors";

interface ProductCardProps extends GoodsType {
  popupOpen: boolean;
  handleOpenPopup: (data: GoodsType) => void;
  handleClosePopup: () => void;
  handleAddItemToCart: (id: number) => void;
}

function ProductCard({
  handleOpenPopup,
  handleAddItemToCart,
  categories,
  imageUrl,
  price,
  title,
  quantity,
  id,
}: ProductCardProps) {
  const dispatch = useAppDispatch();
  const data = { id, categories, imageUrl, price, title, quantity };
  const user = useAppSelector(currentUserInfo);
  function handleDeleteById(id: number) {
    dispatch(deleteProductById(id));
  }
  return (
    <>
      <WrapperCard>
        {user?.isAdmin && (
          <ButtonsWrapper>
            <ButtonAdmin onClick={() => handleDeleteById(id)}>
              удалить
            </ButtonAdmin>
            <ButtonAdmin onClick={() => handleOpenPopup(data)}>
              изменить
            </ButtonAdmin>
          </ButtonsWrapper>
        )}

        <CardImage src={imageUrl} alt="book" />
        <CardInformation>
          <CardCategories>{categories}</CardCategories>
          <CardTitile>{title}</CardTitile>
          <CardPrice>{price} руб.</CardPrice>
          <ButtonBuy onClick={() => handleAddItemToCart(id)}>Купить</ButtonBuy>
        </CardInformation>
      </WrapperCard>
    </>
  );
}

export default ProductCard;
