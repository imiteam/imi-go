'use client'

import { useProfileStore } from 'Account/lib/useProfileStore'
import {Button} from '../../../../../common/UIkit/button'
import {memo, useState} from 'react'

export const MultiplyPlanButton = memo(function MultiplyPlanButton(props: {
  title: Array<{title: string; id: number}>
}) {
  const {selectedMultiplyPlanButtonId, setSelectedMultiplyPlanButtonId} = useProfileStore()
  // const [selectedMultiplyPlanButtonId, setSelectedMultiplyPlanButtonId] = useState<number>(1)
  const hadnleChangeSelectedMultyplayButtonId = () => {
    setSelectedMultiplyPlanButtonId(selectedMultiplyPlanButtonId === 1 ? 2 : 1)
  }
  // const selectedMultiplyPlanButtonId = 1
  return (
    <div
      className="flex h-[38px] w-auto max-w-[218px] items-center justify-between rounded-[16px] bg-[#DAE3E9] px-[3px] dark:bg-[#000000] 
                        md:mb-[15px]"
    >
      {props.title.map((p) => {
        return (
          <Button
            key={p.id}
            variant={p.id === selectedMultiplyPlanButtonId ? 'activeMultiplyPlanButton' : 'defaultMultiplyPlanButton'}
            size="multiplyPlanButton"
            onClick={() => hadnleChangeSelectedMultyplayButtonId()}
          >
            {p.title}
          </Button>
        )
      })}
    </div>
  )
})
