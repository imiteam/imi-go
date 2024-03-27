'use client'
import {useMutation} from '@apollo/client'
import question from '../../../../public/assets/questionMark.png'
import Image from 'next/image'
import { FavoriteTempIcon } from './icon_components/FavoriteTempIcon'
import { CloseTempIcon } from './icon_components/CloseTempIcon'
import { ReloadTempIcon } from './icon_components/ReloadTempIcon'
import { useTemplateStore } from 'Templates/lib/useTemplateStore'
import { NavButton } from './buttons/NavButton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'common/UIkit/tooltip'
import { GetTemplateByIdQuery } from 'generated'

// const TOGGLE_FAVORITE = gql`
//   mutation UpdateFavoriteTemplate($is_favorite: Boolean, $id: Int!) {
//     update_templates(where: {id: {_eq: $id}}, _set: {is_favorite: $is_favorite}) {
//       returning {
//         is_favorite
//       }
//     }
//   }
// `

export default function TemplateHeading({template}: {template: GetTemplateByIdQuery['templates']}) {
    const activeSubPage = useTemplateStore((state) => state.activeSubPage)
    const setIsActiveSubPage = useTemplateStore((state) => state.setIsActiveSubPage)
    const goBack = () => {
        window.history.back()
    }
    //   const [toggleFavorite] = useMutation(TOGGLE_FAVORITE)
    //   const handleFavoriteClick = (is_favorite: boolean, id: number) => {
    //     toggleFavorite({variables: {is_favorite, id}})
    //   }
    return (
        <div className="flex h-[100px] w-full flex-col border-b-[2px] border-b-bg-lite px-[24px] pt-[20px] dark:border-b-bg-dark">
        <div className="flex size-full flex-col justify-between">
            <div className="flex h-[32px] w-[452px] items-center justify-between">
            <div className="flex items-center pt-[1px]">
                <Image
                src={`https://imi-front.imgix.net/uploads/${template[0]!.icon}.svg`}
                alt="icon"
                width={24}
                height={24}
                className="mr-[16px]"
                />
                <span className="mr-[8px] font-InterBold text-[18px] leading-[28px] text-heading-text-lite dark:text-heading-text-dark">
                {template[0]!.title}
                </span>
                <div className="mr-[10px] w-[16px]">
                <TooltipProvider>
                    <Tooltip>
                    <TooltipTrigger asChild>
                        <span className="block w-[20px]">
                        <Image src={question} alt="question" width={16} height={16} />
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Подсказка</p>
                    </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                </div>
            </div>
            <div className="flex items-center">
                <button
                className="mr-[20px]"
                //   onClick={() => handleFavoriteClick(!template[0]!.is_favorite!, template[0]!.id)}
                >
                {/* <Icon icon="favoriteTemp" isActive={template[0]!.is_favorite!} callBack={()=>updateFavoriteTmplate(!template[0]!.is_favorite!,template[0]!.id)}/> */}
                <FavoriteTempIcon />
                </button>
                <button className="mr-[20px] pt-[2px]">
                <ReloadTempIcon />
                </button>
                <button className="pt-[2px]">
                <CloseTempIcon callBack={goBack} />
                </button>
            </div>
            </div>
            <div className="flex h-[32px] w-[172px] items-start justify-between">
            <NavButton
                title="Генерация"
                activeBtn={activeSubPage}
                callBack={setIsActiveSubPage}
                btnID="generation"
            />
            <NavButton
                title="Результаты"
                activeBtn={activeSubPage}
                callBack={setIsActiveSubPage}
                btnID="results"
            />
            </div>
        </div>
        </div>
    )
}