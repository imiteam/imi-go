import {ChangeEvent, memo, useState} from 'react'
import { HidePassword } from './icon_components/HidePassword';

export const PasswordInput = memo(function PasswordInput({password, title, marginR}: {password: string; title: string; marginR: string}) {
  const [showPass, setShowPass] = useState<boolean>(false)
  const [pass, setPass] = useState<string>(password)
  const changeShowNewPass = () => {
    setShowPass(!showPass)
  }
  const handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value)
  }
  return (
    <div
      className={`flex h-full flex-col justify-between sm:w-1/2 md:mb-[12px] 
                        md:h-1/2 lg:mr-[12px]
                        lg:w-1/2 xl:m-0
                        xl:w-[261px] sm:mr-[${marginR}px] sm:vsm:w-full
                        md:sm:h-[67px]`}
    >
      <span
        className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                        dark:text-template-item-text-dark 
                        md:text-[14px]"
      >
        {title}
      </span>
      <div
        className="relative flex h-[90px] w-full flex-col justify-end 
                            "
      >
        <input
          placeholder={pass}
          value={pass}
          onChange={(e) => handleChangePass(e)}
          type={showPass ? 'text' : 'password'}
          className="focus:shadow-tempGenerateInput h-[44px] w-full rounded-[12px] bg-bg-lite px-[14px] py-[12px] 
                            font-InterRegular text-[16px] leading-[19px] text-[#101828] outline-none focus:border-[2px]
                            focus:border-template-item-text-active-lite placeholder:font-TTNormsRegular dark:bg-bg-dark 
                            dark:text-[#F5F5F6]
                            md:text-[14px]
                            "
        />
        <HidePassword icon={showPass ? 'showPass' : 'hidePass'} callBack={changeShowNewPass} />
      </div>
    </div>
  )
})
