import { useContext } from 'react'

import { ReactLucideIconPickerContext } from './Provider'

function useIcons() {
  const { icons, iconSelected, setIconSelected, setIcons } = useContext(
    ReactLucideIconPickerContext,
  )

  return { icons, iconSelected, setIconSelected, setIcons }
}

export default useIcons
