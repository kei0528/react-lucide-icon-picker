import * as lucide from 'lucide'
import { createContext, useState } from 'react'

import { getAllIconSvgElements } from '@/utils/lucide.util'

export const ReactLucideIconPickerContext = createContext<{
  icons: Record<string | keyof typeof lucide, SVGElement>
  setIcons: (icons: Record<keyof typeof lucide, SVGElement>) => void
  iconSelected: null | keyof typeof lucide
  setIconSelected: (key: keyof typeof lucide) => void
}>({
  icons: {},
  setIcons: () => {},
  iconSelected: null,
  setIconSelected: () => {},
})

const ReactLucideIconPickerProvider = ({ children }: { children: React.ReactNode }) => {
  const [icons, setIcons] = useState<Record<keyof typeof lucide, SVGElement>>(
    getAllIconSvgElements(),
  )
  const [iconSelected, setIconSelected] = useState<null | keyof typeof lucide>(null)

  return (
    <ReactLucideIconPickerContext.Provider
      value={{
        icons,
        setIcons: (icons) => setIcons(icons),
        iconSelected,
        setIconSelected: (key) => setIconSelected(key),
      }}
    >
      {children}
    </ReactLucideIconPickerContext.Provider>
  )
}

export default ReactLucideIconPickerProvider
