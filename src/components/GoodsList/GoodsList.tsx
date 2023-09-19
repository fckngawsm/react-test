import React, { useEffect, useState } from "react";
import { ButtonNewItem, GoodsListWrapper } from "./GoodsListStyles";
import ProductCard from "../ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { goodsListSelectors } from "../../features/goods/goods-selectors";
import {
  loadingAllGoods,
  updateProductById,
} from "../../features/goods/goods-slice";
import { GoodsType } from "../../types/goodsType";
import Popup from "../Popup/Popup";
import { SubmitHandler } from "react-hook-form";

function GoodsList() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [id, setId] = useState<null | number>(null);
  function handleOpenPopup(data: GoodsType) {
    setPopupOpen(true);
    setId(data.id);
  }
  function handleClosePopup() {
    setPopupOpen(false);
  }
  const onSubmit: SubmitHandler<GoodsType> = (data) => {
    dispatch(updateProductById(data))
      .unwrap()
      .then(() => {
        handleClosePopup();
      });
  };
  const dispatch = useAppDispatch();
  const list = useAppSelector(goodsListSelectors);
  useEffect(() => {
    if (list.length === 0) dispatch(loadingAllGoods());
  }, [dispatch]);
  return (
    <>
      <ButtonNewItem>Добавить новый товар</ButtonNewItem>
      <GoodsListWrapper>
        {list.map((item) => (
          <ProductCard
            handleOpenPopup={handleOpenPopup}
            handleClosePopup={handleClosePopup}
            popupOpen={popupOpen}
            key={item.id}
            {...item}
          />
        ))}
      </GoodsListWrapper>
      <Popup
        id={id!}
        onSubmit={onSubmit}
        isOpen={popupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
}

export default GoodsList;
