"use client";

import { memo } from "react";

export const VerifyRequest = memo(function VerifyRequest() {
  return (
    <div className="mb-5 flex h-[29px] w-full items-center justify-start text-center xl:px-1.5">
      Ссылка для авторизации была отправлена на вашу электронную почту.
    </div>
  );
});
