import { Button } from "common/UIkit/button";
import { memo } from "react";


export const CancelButton = memo(function CancelButton({title, callBack}: {title: string; callBack: () => void}) {
  return (
    <Button
      size="profileButton"
      variant="profileCancelButton"
      className="cursor-not-allowed"
      onClick={() => callBack() }
    >
      {title}
    </Button>
  )
}
)