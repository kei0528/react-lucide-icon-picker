/**
 * Converts a PascalCase string into a more readable format by adding spaces before each uppercase letter and capitalizing the first letter of the resulting string.
 */
export function pascalCaseToReadable(str: string): string {
  return (
    str
      // Insert a space before all capital letters
      .replace(/([A-Z])/g, ' $1')
      // Capitalize the first letter of the resulting string
      .replace(/^./, (firstChar) => firstChar.toUpperCase())
  )
}
