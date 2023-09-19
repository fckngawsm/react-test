import React, { useEffect } from "react";
import { GoodsListWrapper } from "./GoodsListStyles";
import ProductCard, {} from "../ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { goodsListSelectors } from "../../features/goods/goods-selectors";
import {
  deleteProductById,
  loadingAllGoods,
} from "../../features/goods/goods-slice";

interface GoodsListProps {
  popupOpen: boolean;
  handleOpenPopup: () => void;
  handleClosePopup: () => void;
}

function GoodsList({
  handleOpenPopup,
  popupOpen,
  handleClosePopup,
}: GoodsListProps) {
  const dispatch = useAppDispatch();
  const list = useAppSelector(goodsListSelectors);
  useEffect(() => {
    if (list.length === 0) dispatch(loadingAllGoods());
  }, [dispatch]);
  return (
    <>
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
    </>
  );
}

export default GoodsList;
