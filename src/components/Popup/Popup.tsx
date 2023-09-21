import React from "react";
import buttonClose from "../../images/close.svg";
import { useForm } from "react-hook-form";
import {
  Button,
  ButtonImage,
  PopupContainer,
  PopupWrapper,
} from "./PopupStyle";
import {
  AuthButton,
  AuthForm,
  AuthInput,
  AuthMessageError,
  AuthTitle,
} from "../../features/users/Auth/AuthStyles";
import { GoodsType } from "../../types/goodsType";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: GoodsType) => void;
  id: number;
}
function Popup({ isOpen, onClose, onSubmit, id }: PopupProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GoodsType>();

  return (
    <PopupWrapper isopen={isOpen ? true : false}>
      <PopupContainer>
        <Button onClick={onClose}>
          <ButtonImage src={buttonClose} />
        </Button>
        <AuthTitle>Внести изменения</AuthTitle>
        <AuthForm
          onSubmit={handleSubmit((data) =>
            onSubmit({
              id,
              categories: data.categories,
              imageUrl: data.imageUrl,
              price: data.price,
              quantity: data.quantity,
              title: data.title,
            })
          )}
        >
          <AuthInput
            autoComplete="none"
            placeholder="Ссылка на картинку"
            {...register("imageUrl", {
              required: { value: false, message: "Вы забыли указать почту" },
              minLength: { value: 2, message: "Слишком короткая почта" },
              maxLength: { value: 1240, message: "Слишком длинная почта" },
            })}
            type="text"
          />
          {errors.imageUrl && (
            <AuthMessageError>{errors.imageUrl.message}</AuthMessageError>
          )}
          <AuthInput
            autoComplete="none"
            placeholder="Заголовок"
            {...register("title", {
              required: { value: false, message: "Вы забыли указать пароль" },
              minLength: { value: 2, message: "Слишком короткая почта" },
              maxLength: { value: 40, message: "Слишком длинная почта" },
            })}
            type="text"
          />
          {errors.title && (
            <AuthMessageError>{errors.title.message}</AuthMessageError>
          )}
          <AuthInput
            autoComplete="none"
            placeholder="Укажите категорию"
            {...register("categories", {
              required: { value: false, message: "Вы забыли указать пароль" },
              minLength: { value: 2, message: "Слишком короткая почта" },
              maxLength: { value: 40, message: "Слишком длинная почта" },
            })}
            type="text"
          />
          {errors.categories && (
            <AuthMessageError>{errors.categories.message}</AuthMessageError>
          )}
          <AuthInput
            autoComplete="none"
            placeholder="Цена"
            {...register("price", {
              required: { value: false, message: "Вы забыли указать пароль" },
              minLength: { value: 2, message: "Слишком короткая почта" },
              maxLength: { value: 40, message: "Слишком длинная почта" },
            })}
            type="text"
          />
          {errors.price && (
            <AuthMessageError>{errors.price.message}</AuthMessageError>
          )}
          <AuthButton>Изменить</AuthButton>
        </AuthForm>
      </PopupContainer>
    </PopupWrapper>
  );
}

export default Popup;
