// BASE
import React from "react";

// REACT HOOK FORM
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// STYLES
import "./PageLoginStyles.css";
import { StyledButtonMain } from "../StyledComponents/Buttons";
import styled from "styled-components";
import {
  Header,
  StyledMainPage,
  StyledInput,
  StyledError,
} from "../StyledComponents/MainPage";

function PageLogin() {
  let navigate = useNavigate();
  const methods = useForm({
    mode: "onBlur",
  });

  const [warning, setWarning] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [isloading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.email !== "steve.jobs@example.com") {
      setWarning(true);
      setError(`Пользователя ${data.email} не существует`);
    } else if (data.password !== "password") {
      setWarning(true);
      setError("Неправильный пароль");
    } else {
      setIsLoading(true);
      setWarning(false);
      setTimeout(() => {
        localStorage.setItem("email", data.email);
        localStorage.setItem("password", data.password);
        navigate("/profile");
      }, 2000);
    }
  };

  return (
    <>
      <StyledMainPage>
        <Header>ONLY.</Header>
        <Main>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <div>
              {warning && error ? (
                <StyledError>
                  <figure className="figure">
                    <i className="figureIcon">!</i>
                  </figure>
                  {warning && error}
                </StyledError>
              ) : null}
              <p className="textLogin">Логин</p>

              <StyledInput
                $warn={!!methods.formState.errors?.email?.message}
                type="email"
                {...methods.register("email", {
                  required: "Обязательное поле",
                })}
                name="email"
              />

              <div style={{ height: 40, color: "#E26F6F" }}>
                {methods.formState.errors?.email && (
                  <p>
                    {(methods.formState.errors.email?.message as string) ||
                      "Ошибка"}
                  </p>
                )}
              </div>
              <p className="textLogin">Пароль</p>
              <StyledInput
                type="password"
                {...methods.register("password", {
                  required: {
                    value: true,
                    message: "",
                  },
                })}
                name="password"
              ></StyledInput>
              <div className="check">
                <StyledLabel
                // for="password"
                >
                  <input
                    type="checkbox"
                    id="password"
                    className="check__input"
                  />
                  <span className="fake" />
                  <p>Запомнить пароль</p>
                </StyledLabel>
              </div>

              <StyledButtonMain type="submit" $disable={isloading}>
                Войти
              </StyledButtonMain>
            </div>
          </Form>
        </Main>
      </StyledMainPage>
    </>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default PageLogin;
