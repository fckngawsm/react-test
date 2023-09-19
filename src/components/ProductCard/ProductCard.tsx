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
import { useAppDispatch } from "../../redux-hooks";
import { deleteProductById } from "../../features/goods/goods-slice";

interface ProductCardProps extends GoodsType {
  popupOpen: boolean;
  handleOpenPopup: (data: GoodsType) => void;
  handleClosePopup: () => void;
}

function ProductCard({
  handleOpenPopup,
  handleClosePopup,
  popupOpen,
  categories,
  imageUrl,
  price,
  title,
  quantity,
  id,
}: ProductCardProps) {
  const dispatch = useAppDispatch();
  function handleDeleteById(id: number) {
    dispatch(deleteProductById(id));
  }
  const data = { id, categories, imageUrl, price, title, quantity };
  return (
    <>
      <WrapperCard>
        <ButtonsWrapper>
          <ButtonAdmin onClick={() => handleDeleteById(id)}>
            удалить
          </ButtonAdmin>
          <ButtonAdmin onClick={() => handleOpenPopup(data)}>
            изменить
          </ButtonAdmin>
        </ButtonsWrapper>

        <CardImage src={imageUrl} alt="book" />
        <CardInformation>
          <CardCategories>{categories}</CardCategories>
          <CardTitile>{title}</CardTitile>
          <CardPrice>{price} руб.</CardPrice>
          <ButtonBuy>Купить</ButtonBuy>
        </CardInformation>
      </WrapperCard>
    </>
  );
}

export default ProductCard;
