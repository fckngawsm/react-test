import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  AuthForm,
  AuthInput,
  AuthTitle,
  AuthButton,
  AuthText,
  AuthSpan,
  AuthMessageError,
} from "./AuthStyles";
import { useAppDispatch } from "../../redux-hooks";
import { UserType } from "../../types/userType";
import { registerUser } from "../../features/users/users-slice";

function Register() {
  const dispatch = useAppDispatch();
  const navgiate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();
  const onSubmit: SubmitHandler<UserType> = (data) => {
    console.log(data);
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        navgiate("/");
      });
  };
  return (
    <>
      <AuthTitle>Регистрация</AuthTitle>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          autoComplete="none"
          placeholder="Имя"
          {...register("name", {
            required: { value: true, message: "Вы забыли указать почту" },
            minLength: { value: 2, message: "Слишком короткая почта" },
            maxLength: { value: 40, message: "Слишком длинная почта" },
          })}
          type="text"
        />
        {errors.name && (
          <AuthMessageError>{errors.name.message}</AuthMessageError>
        )}
        <AuthInput
          autoComplete="none"
          placeholder="Фамилия"
          {...register("lastname", {
            required: { value: true, message: "Вы забыли указать почту" },
            minLength: { value: 2, message: "Слишком короткая почта" },
            maxLength: { value: 40, message: "Слишком длинная почта" },
          })}
          type="text"
        />
        {errors.lastname && (
          <AuthMessageError>{errors.lastname.message}</AuthMessageError>
        )}
        <AuthInput
          autoComplete="none"
          placeholder="Почта"
          {...register("email", {
            required: { value: true, message: "Вы забыли указать почту" },
            minLength: { value: 2, message: "Слишком короткая почта" },
            maxLength: { value: 40, message: "Слишком длинная почта" },
          })}
          type="email"
        />
        {errors.email && (
          <AuthMessageError>{errors.email.message}</AuthMessageError>
        )}
        <AuthInput
          autoComplete="none"
          placeholder="Пароль"
          {...register("password", {
            required: { value: true, message: "Вы забыли указать пароль" },
            minLength: { value: 2, message: "Слишком короткая почта" },
            maxLength: { value: 40, message: "Слишком длинная почта" },
          })}
          type="password"
        />
        {errors.password && (
          <AuthMessageError>{errors.password.message}</AuthMessageError>
        )}
        <AuthButton>Войти</AuthButton>
        <AuthText>
          У вас есть аккаунт?
          <AuthSpan to="/sign-up">Войти</AuthSpan>
        </AuthText>
      </AuthForm>
    </>
  );
}

export default Register;
