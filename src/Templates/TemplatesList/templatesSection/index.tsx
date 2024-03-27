"use client"
import { TemplateCategories } from "Home/TemplateCategories"
import { GetTemplateCategoriesQuery } from "generated"
import { useTheme } from "next-themes"
import { memo } from "react"
import { FavoriteTemplates } from "./buttons/FavoriteTemplates"
import { MyDocs } from "./buttons/MyDocs"


export const TemplatesSection = memo(function TemplatesSection(props: {
    templateCategories: GetTemplateCategoriesQuery
}){
    const {theme} = useTheme()
    return (
        <div
        className="flex w-[99%] flex-col overflow-y-auto pr-[13px]"
        id={theme === 'light' ? 'sideBarScrollContainerLight' : 'sideBarScrollContainerDark'}
        >
            <div className="mb-[8px] flex w-full justify-between">
                <FavoriteTemplates callBack={() => {}}/>
                <MyDocs callBack={() => {}} />
            </div>
            <TemplateCategories templateCategories={props.templateCategories.template_categories} ishomePage={false} />
        </div>
    )
})