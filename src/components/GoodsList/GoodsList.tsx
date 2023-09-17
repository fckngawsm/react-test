import React, { useEffect } from "react";
import { GoodsListWrapper } from "./GoodsListStyles";
import GoodsCard from "../GoodsCard/GoodsCard";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { goodsListSelectors } from "../../features/goods/goods-selectors";
import {
  deleteProductById,
  loadingAllGoods,
} from "../../features/goods/goods-slice";

function GoodsList() {
  const dispatch = useAppDispatch();
  const list = useAppSelector(goodsListSelectors);
  useEffect(() => {
    if (list.length === 0) dispatch(loadingAllGoods());
  }, [dispatch]);
  return (
    <GoodsListWrapper>
      {list.map((item) => (
        <GoodsCard key={item.id} {...item} />
      ))}
    </GoodsListWrapper>
  );
}

export default GoodsList;
