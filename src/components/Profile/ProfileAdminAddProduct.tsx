import React from "react";
import {
  ProfileAddButton,
  ProfileAddForm,
  ProfileAddInput,
  ProfileAddWrapper,
} from "./ProfileStyle";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoodsType } from "../../types/goodsType";
import { createProduct } from "../../features/goods/goods-slice";
import { useAppDispatch } from "../../redux-hooks";
import { useNavigate } from "react-router-dom";

function ProfileAdminAddProduct() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GoodsType>();
  const onSubmit: SubmitHandler<GoodsType> = (data) => {
    dispatch(createProduct(data))
      .unwrap()
      .then(() => {
        navigate("/goods");
      });
  };
  return (
    <ProfileAddWrapper>
      <ProfileAddForm onSubmit={handleSubmit(onSubmit)}>
        <ProfileAddInput
          autoComplete="none"
          placeholder="Ссылка на картинку"
          {...register("imageUrl", {
            required: { value: false, message: "Вы забыли указать почту" },
            minLength: { value: 2, message: "Слишком короткая почта" },
            maxLength: { value: 1240, message: "Слишком длинная почта" },
          })}
          type="text"
        />
        {errors.imageUrl && <p>{errors.imageUrl.message}</p>}
        <ProfileAddInput
          autoComplete="none"
          placeholder="Заголовок"
          {...register("title", {
            required: { value: false, message: "Вы забыли указать пароль" },
            minLength: { value: 2, message: "Слишком короткая почта" },
            maxLength: { value: 40, message: "Слишком длинная почта" },
          })}
          type="text"
        />
        {errors.title && <p>{errors.title.message}</p>}
        <ProfileAddInput
          autoComplete="none"
          placeholder="Укажите категорию"
          {...register("categories", {
            required: { value: false, message: "Вы забыли указать пароль" },
            minLength: { value: 2, message: "Слишком короткая почта" },
            maxLength: { value: 40, message: "Слишком длинная почта" },
          })}
          type="text"
        />
        {errors.categories && <p>{errors.categories.message}</p>}
        <ProfileAddInput
          autoComplete="none"
          placeholder="Количество"
          {...register("quantity", {
            required: { value: false, message: "Вы забыли указать пароль" },
            minLength: { value: 2, message: "Слишком короткая почта" },
            maxLength: { value: 40, message: "Слишком длинная почта" },
          })}
          type="text"
        />
        {errors.quantity && <p>{errors.quantity.message}</p>}
        <ProfileAddInput
          autoComplete="none"
          placeholder="Цена"
          {...register("price", {
            required: { value: false, message: "Вы забыли указать пароль" },
            minLength: { value: 2, message: "Слишком короткая почта" },
            maxLength: { value: 40, message: "Слишком длинная почта" },
          })}
          type="text"
        />
        {errors.price && <p>{errors.price.message}</p>}
        <ProfileAddButton>добавить товар</ProfileAddButton>
      </ProfileAddForm>
    </ProfileAddWrapper>
  );
}

export default ProfileAdminAddProduct;
