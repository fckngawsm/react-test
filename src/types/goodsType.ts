enum categoriesEnum {
  books = "книги",
  homeGoods = "товары для дома",
  carItems = "запчасти для машины",
  other = "другое",
}

export type GoodsType = {
  id: number;
  title: string;
  imageUrl: string;
  quantity: number;
  categories: categoriesEnum;
  price: 32000;
};
