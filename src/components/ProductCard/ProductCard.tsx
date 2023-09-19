import React, { useState } from "react";
import cart from "../../images/cart.svg";
import {
  ButtonAdmin,
  ButtonBuy,
  ButtonsWrapper,
  CardCategories,
  CardDetailsInformation,
  CardImage,
  CardInformation,
  CardPrice,
  CardTitile,
  WrapperCard,
} from "./ProductCardStyle";
import { GoodsType } from "../../types/goodsType";
import { useAppDispatch } from "../../redux-hooks";
import {
  deleteProductById,
  updateProductById,
} from "../../features/goods/goods-slice";
import Popup from "../Popup/Popup";
import { SubmitHandler } from "react-hook-form";

interface ProductCardProps extends GoodsType {
  popupOpen: boolean;
  handleOpenPopup: () => void;
  handleClosePopup: () => void;
}

function ProductCard({
  handleOpenPopup,
  handleClosePopup,
  popupOpen,
  categories,
  imageUrl,
  price,
  quantity,
  title,
  id,
}: ProductCardProps) {
  const dispatch = useAppDispatch();
  function handleDeleteById(id: number) {
    dispatch(deleteProductById(id));
  }
  // function handleUpdateProduct(data){
  //   dispatch(updateProductById(id,data))
  // }
  const onSubmit: SubmitHandler<GoodsType> = (data) => {
    dispatch(updateProductById({ id, data }))
      .unwrap()
      .then(() => {
        handleClosePopup();
      });
  };
  return (
    <>
      <WrapperCard>
        <ButtonsWrapper>
          <ButtonAdmin onClick={() => handleDeleteById(id)}>
            удалить
          </ButtonAdmin>
          <ButtonAdmin onClick={handleOpenPopup}>изменить</ButtonAdmin>
        </ButtonsWrapper>

        <CardImage src={imageUrl} alt="book" />
        {/* <CardInfromation>
          <CardCategories>{categories}</CardCategories>
          <CardTitle>{title}</CardTitle>
          <CardPurchase>
            <CardPrice>{price} руб.</CardPrice>
            <CardCart src={cart} alt="cart" />
          </CardPurchase>
        </CardInfromation> */}
        <CardInformation>
          <CardCategories>{categories}</CardCategories>
          <CardTitile>{title}</CardTitile>
          <CardPrice>{price} руб.</CardPrice>
          <ButtonBuy>Купить</ButtonBuy>
        </CardInformation>
      </WrapperCard>
      <Popup
        onSubmit={onSubmit}
        isOpen={popupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
}

export default ProductCard;
