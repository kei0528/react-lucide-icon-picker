import * as lucide from 'lucide'

import s from './IconList.module.css'
import useIcons from './useIcons'

import { pascalCaseToReadable } from '@/utils/string.util'

const IconList = ({
  onChange,
  className,
}: {
  onChange?: ({ key, icon }: { key: keyof typeof lucide; icon: SVGElement }) => void
  className?: string
}) => {
  const { icons, iconSelected, setIconSelected } = useIcons()

  return (
    <ul className={[s.list, className].join(' ')}>
      {Object.keys(icons).map((iconKey) => (
        <li className={s.item} key={iconKey}>
          <button
            className={[s.button, iconSelected === iconKey ? s.selected : ''].join(' ')}
            onClick={() => {
              setIconSelected(iconKey as keyof typeof lucide)
              onChange?.({ key: iconKey as keyof typeof lucide, icon: icons[iconKey] })
            }}
          >
            <div
              className={[s.icon, iconSelected === iconKey ? s.selected : ''].join(' ')}
              role='img'
              ref={(ref) => {
                if (ref?.children.length === 0) ref?.appendChild(icons[iconKey])
              }}
            />
            <small className={s.label}>{pascalCaseToReadable(iconKey)}</small>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default IconList
