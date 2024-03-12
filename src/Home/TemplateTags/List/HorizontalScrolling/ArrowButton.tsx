"use client"

import { Button } from "common/UIkit/button"
import { memo } from "react"
import { ArrowIcon } from "./ArrowIcon"

export const ArrowButton = memo(function ArrowButton(props: {
    buttonName: string
}) {
    switch(props.buttonName){
        case 'arrow-r-20':
        return (
            <Button
            variant={'defaultTempArrowRight'}
            size="default"
            className="md:hidden"
            >
            <ArrowIcon icon={props.buttonName}/>
            </Button>
        )
        case 'arrow-l-20':
        return (
            <Button
            variant={'defaultTempArrowLeft'}
            size="default"
            className="md:hidden"
            >
            <ArrowIcon icon={props.buttonName}/>
            </Button>
        )
    }
})