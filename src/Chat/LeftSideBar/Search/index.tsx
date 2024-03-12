'use client'
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { memo, useCallback, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useClickAway } from 'react-use';
import { SearchIcon } from './icons_component/SearchIcon';

type FormValues = {
  searchValue: string;
};

export const Search = memo(function Search(props: {
  className?: string;
  id: string;
  searchParams: { [key: string]: string | string[] | undefined };
  userId: string;
}) {
  const router = useRouter();
  const ref = useRef(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      searchValue: props.searchParams.role_search ? String(props.searchParams.role_search) : '',
    },
    mode: 'onChange',
  });

  useClickAway(ref, useCallback(() => reset(), [reset]));

  const debouncedSearch = useCallback(
    (searchData : any) => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(() => {
        router.push(`/chat/${props.id}?role_search=${searchData.searchValue}&userId=${props.userId}`);
      }, 100); // Adjust debounce delay as needed
    },
    [props.id, props.userId, router]
  );

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    (searchData) => {
      debouncedSearch(searchData);
    },
    [debouncedSearch]
  );

  const handleChange = useCallback(
    (event : any) => {
      const searchValue = event.target.value;
      debouncedSearch({ searchValue });
    },
    [debouncedSearch]
  );

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        'relative md:mt-[13px] md:w-full md:sm:w-[252px] lg:w-full xl:w-[252px]',
        props.className
      )}
    >
      <input
        className="h-11 w-full rounded-[16px] border-none bg-[#DAE3E9] pl-10 pr-2.5 text-[#667085] outline-none ring-0
        dark:bg-[#21242C] dark:text-[#85888E]  
        md:h-9 md:rounded-[12px]
        md:text-[12px] md:leading-[18px] md:sm:h-11 md:sm:rounded-[16px]
        lg:text-[12px] lg:leading-[18px]  
        xl:py-3 xl:font-TTNormsRegular xl:text-[14px] xl:leading-[20px]"
        placeholder="Найти ассистента"
        {...register('searchValue')}
        onChange={handleChange}
      />
      <span className="absolute left-[14px] top-[25%]">
        <SearchIcon/>
      </span>
    </form>
  );
});
