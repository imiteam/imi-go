'use client'

import {OutputData} from '@editorjs/editorjs'
import { useTemplateStore } from 'Templates/lib/useTemplateStore'
import { GetRolesQuery, GetTemplateCategoriesQuery } from 'generated'
import {useTheme} from 'next-themes'
import dynamic from 'next/dynamic'
import {memo, useEffect, useRef, useState} from 'react'

const Editor = dynamic(() => import('./Editor'), {
    ssr: false,
    })

    const DEFAULT_INITIAL_DATA: OutputData = {
    time: new Date().getTime(),
    blocks: [
        {
        type: 'header',
        data: {
            text: 'This is my awesome editor!',
        },
        },
    ],
    }

    export const Note = memo(function Note({
    roles,
    templateCategories,
    }: {
    roles: GetRolesQuery['roles']
    templateCategories: GetTemplateCategoriesQuery
    }) {
    const setTemplates = useTemplateStore((state) => state.setTemplates)
    const setRoles = useTemplateStore((state) => state.setRoles)
    useEffect(() => {
        setTemplates(templateCategories)
        setRoles(roles)
    }, [roles, templateCategories, setRoles, setTemplates])
    const [data, setData] = useState<OutputData | null>(null)
    const noteRef = useRef<HTMLDivElement | null>(null)
    const {theme} = useTheme()
    const createBlock = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Space') {
        setData(DEFAULT_INITIAL_DATA)
        }
    }
    useEffect(() => {
        const currentNoteRef = noteRef.current
        if (currentNoteRef) {
        currentNoteRef.focus()
        }
        document.documentElement.style.setProperty('--ce-toolbar_btn_color', theme === 'light' ? '#EDF2F6' : '#17181C')
    }, [theme])

    useEffect(() => {
        /* bg кнопки block-tools */
        document.documentElement.style.setProperty('--ce-toolbar_btn_color', theme === 'light' ? '#EDF2F6' : '#17181C')
        /* stroke свойсвто элементов path для кнопки block-tools */
        document.documentElement.style.setProperty('--ce-toolbar_btn_svg_color', theme === 'light' ? '#667085' : '#94969C')
        /* bg всплывашки block-tools */
        document.documentElement.style.setProperty('--ce-toolbar_bg_color', theme === 'light' ? '#DAE3E9' : '#17181C')
        /* уже хз что это было */
        // document.documentElement.style.setProperty('--ce-toolbar_popover_item_text_color', theme === "light" ?  "#ffffff": "#000000");
        /* цвет активного элемента block-tools */
        document.documentElement.style.setProperty(
        '--ce-toolbar_active_item_bg_color',
        theme === 'light' ? '#DAE3E9' : '#17181C',
        )
        /* bg поля поиска block-tools */
        document.documentElement.style.setProperty(
        '--ce-toolbar_popover_search_bg_color',
        theme === 'light' ? ' #ffffff' : '#21242C',
        )
        /* цвет текста элементов block-tools */
        document.documentElement.style.setProperty(
        '--ce-toolbar_item_title_color',
        theme === 'light' ? '#101828' : '#F5F5F6',
        )
        /* цвет скролл бара block-tools */
        document.documentElement.style.setProperty(
        '--ce-toolbar_popover_scrollbar_color',
        theme === 'light' ? '#ffffff' : '#21242C',
        )
        /* цвет делителя inline tools */
        document.documentElement.style.setProperty(
        '--ce-toolbar-inline-tools-separator',
        theme === 'light' ? '#ffffff' : '#000000',
        )
        /* цвет делителя inline tools */
        document.documentElement.style.setProperty(
        '--ce-toolbar-inline-tools-plus',
        theme === 'light' ? '#000000' : '#ffffff',
        )
    }, [theme])

    return (
        <div
        ref={noteRef}
        tabIndex={1}
        onKeyDown={(e) => createBlock(e)}
        className="mb-[16px] flex size-full justify-center rounded-[20px] bg-[#fff] px-[24px] py-[32px] focus:outline-none dark:bg-[#21242C]"
        >
        {data ? (
            <div
            id="editor-wrapper"
            className={`relative font-TTNormsRegular text-[14px] text-[#101828] dark:text-[#F5F5F6] xl:w-[650px]`}
            >
            <Editor data={data!} onChange={setData} holder="editorjs-container" />
            </div>
        ) : (
            <div
            className="mt-[10px] flex h-[36px] w-[600px] items-center p-[8px] pl-[32px] font-TTNormsRegular text-[14px] leading-[20px] text-[#667085] 
                                dark:text-[#85888E]"
            >
            <span className="flex">
                Нажмите
                <span
                className="flex h-[23px] w-[68px] items-center justify-center rounded-[5px] bg-bg-lite dark:bg-bg-dark"
                style={{margin: '0 5px'}}
                >
                пробел
                </span>
                для обращения к AI или начните печатать здесь...
            </span>
            </div>
        )}
        </div>
    )
}
    )