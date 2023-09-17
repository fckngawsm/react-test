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
import {
  deleteProductById,
  updateProductById,
} from "../../features/goods/goods-slice";
import Popup from "../Popup/Popup";
import { SubmitHandler } from "react-hook-form";

interface GoodsCardProps extends GoodsType {
  popupOpen: boolean;
  handleOpenPopup: () => void;
  handleClosePopup: () => void;
}

function GoodsCard({
  handleOpenPopup,
  handleClosePopup,
  popupOpen,
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
  const onSubmit: SubmitHandler<GoodsType> = ({
    id,
    categories,
    imageUrl,
    price,
    title,
    quantity,
  }) => {
    dispatch(
      updateProductById({ id, categories, imageUrl, price, title, quantity })
    )
      .unwrap()
      .then(() => {
        handleClosePopup();
      });
  };
  return (
    <>
      <WrapperCard>
        <CardImage src={imageUrl} alt="book" />
        <button onClick={() => handleDeleteById(id)}>удалить</button>
        <button onClick={handleOpenPopup}>изменить</button>
        <CardInfromation>
          <CardCategories>{categories}</CardCategories>
          <CardTitle>{title}</CardTitle>
          <CardPurchase>
            <CardPrice>{price} руб.</CardPrice>
            <CardCart src={cart} alt="cart" />
          </CardPurchase>
        </CardInfromation>
      </WrapperCard>
      <Popup
        onSubmit={onSubmit}
        isOpen={popupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
}

export default GoodsCard;
