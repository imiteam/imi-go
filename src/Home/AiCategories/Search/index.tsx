"use client";
import { useRouter } from "next/navigation";
import { ReactNode, memo, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useClickAway, useDebounce } from "react-use";
import { SearchIcon } from "./icon_components/SearchIcon";

type FormValues = {
  inputValue: string;
};

export const Search = memo(function Search(props: {
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();

  const [showPortal, setShowPortal] = useState(false);

  const { register, handleSubmit, setFocus, watch } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    router.push(`/?search=${data.inputValue}`);
  };

  const searchQuery = watch("inputValue");
  // TODO: Debounce должен происходить на другое событие.
  const debouncedValue = useDebounce(() => watch("inputValue"), 100);
  const ref = useRef<HTMLDivElement>(null);

  // TODO: Разобраться с блокированием бади скролла.
  // useLockBodyScroll(showPortal, 'root')

  // useEffect(() => {
  //   if (!debouncedValue) {
  //     router.push(`/`)
  //   } else {
  //     router.push(`/?search=${debouncedValue}`)
  //   }
  // }, [debouncedValue])

  // Assign a ref to the card
  const cardRef = useRef(null);

  useEffect(() => {
    if (showPortal) {
      setFocus("inputValue");
    }
  }, [setFocus, showPortal]);

  const handleClickOutside = () => {
    setShowPortal(false);
    router.push(`/`);
  };

  useClickAway(cardRef, handleClickOutside);

  const togglePortal = () => {
    setShowPortal(!showPortal);
  };

  const getPosition = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset,
        width: rect.width,
      };
    }
    return { top: 0, left: 0, width: 0 };
  };
  return (
    <div className="order-2 md:grow lg:w-auto">
      <div
        className="relative md:w-full lg:w-[212px] xl:h-[44px] xl:w-[306px]"
        ref={ref}
      >
        <input
          type="text"
          onClick={togglePortal}
          className="h-[44px] w-full cursor-not-allowed rounded-[16px] bg-search-template-input-bg-lite px-[14px] py-[12px] font-InterRegular 
                  focus:border-none placeholder:truncate dark:bg-search-template-input-bg-dark dark:text-[#85888E] md:text-[12px] lg:text-[14px] xl:text-[16px]"
          placeholder="Найти шаблон"
          disabled
        />
        {showPortal &&
          ReactDOM.createPortal(
            <div className="bg-[rgba(0, 0, 0, 0.5)] fixed left-0 top-0 h-screen w-screen">
              <div className="relative size-full">
                <div
                  ref={cardRef}
                  className="input-modal-card overflow-hidden bg-bg-home-white"
                  style={{
                    position: "absolute",
                    top: getPosition().top,
                    left: getPosition().left,
                    width: getPosition().width,
                    height: "506px",
                    borderRadius: "16px",
                  }}
                >
                  <form
                    className="bg-bg-lite"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="input-modal-search flex min-w-max items-center justify-between gap-1 bg-bg-lite px-3 py-2">
                      <div className="input-modal-search-icon-sample block size-5 bg-black"></div>
                      <input
                        {...register("inputValue")}
                        className="input-modal-search-input h-5 w-full border-0 bg-bg-home-white text-black outline-none ring-0"
                      />
                      <div className="input-modal-search-icon-sample bg-red-500 block size-5"></div>
                    </div>
                    <div className="divider h-[1px] bg-items-border-lite"></div>
                  </form>
                  {props.children}
                </div>
              </div>
            </div>,
            document.body,
          )}
        <SearchIcon callBack={() => {}} />
      </div>
    </div>
  );
});
