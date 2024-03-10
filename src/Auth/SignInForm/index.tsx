"use client";

import EmailInput from "../components/EmailInput";
import SignButton from "../components/SignButton";
import { signIn } from "next-auth/react";
import { Fragment, memo, useState } from "react";

export const SignInForm = memo(function SignInForm() {
  const [authFields, setAuthFields] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const AuthFunction = function AuthFunction() {
    setIsLoading(true);
    signIn("email", {
      email: authFields.email,
      redirect: true,
      callbackUrl: "/",
    });
  };
  const handleEmailInputChange = (value: string) => {
    setAuthFields({ ...authFields, email: value });
  };
  // const handlePasswordInputChange = (value: string) => {
  //   setAuthFields({...authFields, password: value})
  //   console.log(authFields)
  // }
  return (
    <Fragment>
      <div className="mb-5 flex h-[29px] w-full items-center justify-start xl:px-1.5">
        <span className="mr-2 w-[78px] border-b border-b-[#D0D5DD]"></span>
        <span className="whitespace-nowrap font-TTNormsRegular text-[16px] leading-[19px] text-[#667085]">
          или через электропочту:
        </span>
        <span className="ml-2 w-[78px] border-b border-b-[#D0D5DD]"></span>
      </div>
      <EmailInput
        icon="email"
        label="Ваш email"
        type="text"
        onEmailInputChange={handleEmailInputChange}
      />
      {/*<PasswordInput*/}
      {/*  icon="password"*/}
      {/*  label="Введите пароль"*/}
      {/*  method={'sign-in'}*/}
      {/*  type="password"*/}
      {/*  onPasswordInputChange={handlePasswordInputChange}*/}
      {/*/>*/}
      <SignButton
        title="Войти"
        onClick={() => AuthFunction()}
        isDisabled={isLoading}
      />
    </Fragment>
  );
});
