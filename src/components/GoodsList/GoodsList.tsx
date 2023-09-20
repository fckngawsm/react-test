import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { SubmitHandler } from "react-hook-form";
import { GoodsListWrapper } from "./GoodsListStyles";
import ProductCard from "../ProductCard/ProductCard";
import {
  loadingAllGoods,
  updateProductById,
} from "../../features/goods/goods-slice";
import { addItemTocart } from "../../features/cart/cart-slice";
import { goodsListSelectors } from "../../features/goods/goods-selectors";
import { GoodsType } from "../../types/goodsType";
import Popup from "../Popup/Popup";

function GoodsList() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [id, setId] = useState<null | number>(null);
  const dispatch = useAppDispatch();
  const list = useAppSelector(goodsListSelectors);

  useEffect(() => {
    if (list.length === 0) dispatch(loadingAllGoods());
  }, [dispatch]);

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

  function handleAddItemToCart(id: number) {
    console.log(id);
    dispatch(addItemTocart(id));
  }

  return (
    <>
      <GoodsListWrapper>
        {list.map((item) => (
          <ProductCard
            handleOpenPopup={handleOpenPopup}
            handleClosePopup={handleClosePopup}
            handleAddItemToCart={handleAddItemToCart}
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
