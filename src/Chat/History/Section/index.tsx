
// ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ
// ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ
// ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ // ВАРИАНТ С ДЕБАУНСОМ
 
'use client'
import { useRouter } from 'next/navigation';
import { ReactNode, memo, useCallback, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useClickAway } from 'react-use';
import { SearchIcon } from './icon_components/SearchIcon';

type FormValues = {
  searchValue: string;
};

export const Section = memo(function Section(props: {
  className?: string;
  id: string;
  searchParams: string | string[] | undefined;
  children: ReactNode;
  userId: string;
}) {
  const router = useRouter();
  const ref = useRef(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { register, handleSubmit, reset, setValue } = useForm<FormValues>({
    defaultValues: {
      searchValue: props.searchParams ? String(props.searchParams) : '',
    },
    mode: 'onChange',
  });

  useClickAway(ref, useCallback(() => reset(), [reset]));

  const debouncedSearch = useCallback(
    (searchValue: string) => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(() => {
        if (searchValue) {
          router.push(`/chat/${props.id}?history_search=${searchValue}&userId=${props.userId}`);
        } else {
          router.push(`/chat/${props.id}?userId=${props.userId}`);
        }
      }, 100); // Adjust debounce delay as needed
    },
    [props.id, props.userId, router]
  );

  const handleChange = useCallback(
    (event: any) => {
      const searchValue = event.target.value;
      setValue('searchValue', searchValue);
      debouncedSearch(searchValue);
    },
    [debouncedSearch, setValue]
  );

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    (data) => {
      debouncedSearch(data.searchValue);
    },
    [debouncedSearch]
  );

  return (
    <>
      <div
        className="flex items-center justify-between
        md:my-2.5 md:h-[16px] md:w-[178px] 
        md:sm:h-[3px] md:sm:w-full md:sm:px-[0px] md:sm:pl-[3px]
        lg:h-[36px] lg:w-[188px] 
        xl:mb-[0px] xl:h-[30px] xl:w-[240px] "
      >
        <span
          className="md:ms:h-[3px] font-TTNormsMedium text-heading-text-lite
          dark:text-heading-text-dark md:h-[17px] md:text-[16px]
          md:leading-[19px] md:sm:text-[20px] md:sm:leading-[18px]
          lg:text-[18px]  lg:leading-[28px] 
          xl:text-[20px] xl:leading-[30px]"
        >
          История
        </span>
      </div>
      <form
        ref={ref}
        onSubmit={handleSubmit(onSubmit)}
        className="relative 
        md:mb-3 md:mt-0  md:w-[193px]
        md:sm:mb-4 md:sm:mt-2 md:sm:w-[252px]
        lg:mb-3 lg:mt-1.5 lg:w-[185px]
        xl:mb-5 xl:mt-2 xl:w-[232px]"
      >
        <input
          {...register('searchValue')}
          className="h-11 w-full rounded-[16px] border-none bg-[#DAE3E9] pl-10 pr-2.5 text-[#667085] outline-none ring-0
          dark:bg-[#21242C] dark:text-[#85888E] 
          md:h-9 md:rounded-[12px]
          md:text-[12px] md:leading-[18px] md:sm:h-11 md:sm:rounded-[16px] 
          lg:text-[12px] lg:leading-[18px]
          xl:py-3 xl:font-TTNormsRegular xl:text-[14px] xl:leading-[20px]"
          placeholder="Поиск по историям"
          onChange={handleChange}
        />
        <span className="absolute left-[14px] top-[25%]">
          <SearchIcon />
        </span>
      </form>
      {props.children}
    </>
  );
});
