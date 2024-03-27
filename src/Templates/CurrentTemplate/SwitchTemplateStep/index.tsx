"use client"

import { useTemplateStore } from "Templates/lib/useTemplateStore"
import { GetTemplateByIdQuery } from "generated"
import { memo } from "react"
import { GenerateStep } from "./GenerateStep"
import { ResultStep } from "./ResultStep"

export const SwitchTemplateStep = memo(function SwitchTemplateStep(props: {
    template: GetTemplateByIdQuery['templates']
    fakeAns: string[]
}){

    const activeSubPage = useTemplateStore((state) => state.activeSubPage)

    return (
            activeSubPage === 'generation' ? (
                <GenerateStep title={props.template[0]?.title!} />
            ) : (
                <ResultStep resultArray={props.fakeAns} />
            )
    )
})
