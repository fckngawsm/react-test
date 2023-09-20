enum categoriesEnum {
  book = "книги",
  productHouse = "товары для дома",
  sparesCar = "запчасти для машины",
  other = "другое",
}

export type ProductType = {
  readonly id: number;
  imageUrl: string;
  title: string;
  quantity: number;
  categories: categoriesEnum;
  price: number;
};
