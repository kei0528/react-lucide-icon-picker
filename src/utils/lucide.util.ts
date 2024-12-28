import * as lucide from 'lucide'

export function getAllIconSvgElements() {
  const iconData: Record<string, SVGElement> = Object.keys(lucide).reduce(
    (acc, key) => {
      const _key = key as keyof typeof lucide
      const value = lucide[_key]
      if (Array.isArray(value) && value.length === 3) {
        acc[_key] = lucide.createElement(
          value as Parameters<typeof lucide.createElement>[0],
        )
      }
      return acc
    },
    {} as Record<string, SVGElement>,
  )

  return iconData
}
