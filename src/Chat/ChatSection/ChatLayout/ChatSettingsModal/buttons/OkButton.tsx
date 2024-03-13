"use client"

import { memo } from "react"
import { OkIcon } from "../icon_components/OkIcon"
import { Button } from "common/UIkit/button"


export const OkButton = memo(function OkButton(){
    return (
            <Button size="profileButton" variant="profileOkButton" className="cursor-not-allowed">
                <OkIcon/>
                Сохранить
            </Button>
    )
})

