import * as lucide from 'lucide'
import { useState } from 'react'

import s from './Search.module.css'
import useIcons from './useIcons'

import { getAllIconSvgElements } from '@/utils/lucide.util'

const Search = ({ className }: { className?: string }) => {
  const [hasFocus, setHasFocus] = useState(false)
  const { setIcons } = useIcons()

  return (
    <div className={[s.search, className].join(' ')}>
      <svg
        className={s.icon}
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        viewBox='0 0 24 24'
        fill='none'
        stroke='#79858F'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='11' cy='11' r='8'></circle>
        <path d='m21 21-4.3-4.3'></path>
      </svg>
      <label className={[s.label, hasFocus ? s.hasValue : ''].join(' ')}>
        Search for icon
      </label>
      <input
        className={s.input}
        type='text'
        onFocus={() => setHasFocus(true)}
        onBlur={(e) => e.target.value.length === 0 && setHasFocus(false)}
        onChange={(e) => {
          const value = e.target.value

          const allIcons = getAllIconSvgElements()
          const filteredIcons = Object.keys(allIcons).reduce(
            (acc, icon) => {
              const iconToUppercase = icon.toUpperCase()
              if (iconToUppercase.includes(value.toUpperCase().replace(/ /g, ''))) {
                acc[icon as keyof typeof lucide] = allIcons[icon as keyof typeof lucide]
              }
              return acc
            },
            {} as Record<keyof typeof lucide, SVGElement>,
          )
          setIcons(filteredIcons)
        }}
      />
    </div>
  )
}

export default Search
