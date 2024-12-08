import classNames from "classnames"
import { Cn } from "../../types/global"

interface Props {
  direction?: 'horizontal' | 'vertical'
}

export default function Divider({direction = 'horizontal', className}:Cn<Props>) {
if(direction === 'horizontal') {
  return(
    <hr className={classNames("border-t-1 w-full border-gray-100", className)}/>
  )
  
}

return(
  <hr className={classNames("border-l-1 h-full border-gray-100", className)}/>
)
}