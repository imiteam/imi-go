'use client'

import {Button} from '../../../../../common/UIkit/button'
import {memo} from 'react'

export const MultiplyPlanButton = memo(function MultiplyPlanButton(props: {title: Array<{title: string; id: number}>}) {
  const selectedMultiplyPlanButtonId = 1
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
          >
            {p.title}
          </Button>
        )
      })}
    </div>
  )
})
