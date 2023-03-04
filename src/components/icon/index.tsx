import chevronDown from 'icon/chevron-down.svg'
import Image from 'next/image'

type Props = {
  color?: string // default: black
  name: IconName
  className?: string
  size?: keyof typeof IconSize
}

type IconName = keyof typeof icons

export const icons = {
  'chevron-down': chevronDown,
 
}

const IconSize = {
  xxs:12,
  xs: 16,
  sm: 24, // default size
  md: 32,
  lg: 40,
}

const Icon = (props: Props) => {
  const { name, size = 'sm', className } = props
 
  return (
    <div>
            <Image
                src={icons[name]}
                className={`cursor-pointer ${className}`}
                alt={`Icon ${name}`}
                width={IconSize[size]}
                height={IconSize[size]}
                
            />
    </div>
  )
}

export type { IconName }

export default Icon
