import { memo } from 'react'
import { ThemeField } from './ThemeField'
import { KeyWordsField } from './KeyWordsField'
import { LengthField } from './LengthField'
import { SelectsField } from './SelectsField'
import { Footer } from './footer'

export const GenerateStep = memo(function TemplateGenerate(props: {
    title?: string | null | undefined
}) {
    return (
        <div className='flex w-full grow flex-col justify-between'>
            <div className="flex w-full flex-col justify-start px-[24px] py-[32px]">
                <ThemeField title={props.title!} />
                <KeyWordsField />
                <LengthField />
                <SelectsField />
            </div>
            <Footer/>
        </div> 
    )
}
)
