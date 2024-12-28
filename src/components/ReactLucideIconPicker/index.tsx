import IconList from './IconList'
import ReactLucideIconPickerProvider from './Provider'
import s from './ReactLucideIconPicker.module.css'
import Search from './Search'

const ReactLucideIconPicker = ({
  onChange,
  className,
  id,
}: {
  onChange?: (icon: { key: string; icon: SVGElement }) => void
  className?: string
  id?: string
}) => {
  return (
    <div className={[s.root, className].join(' ')} id={id}>
      <ReactLucideIconPickerProvider>
        <Search className={s.search} />
        <IconList onChange={(icon) => onChange?.(icon)} className={s.list} />
      </ReactLucideIconPickerProvider>
    </div>
  )
}

ReactLucideIconPicker.Provider = ReactLucideIconPickerProvider
ReactLucideIconPicker.Search = Search
ReactLucideIconPicker.IconList = IconList

export default ReactLucideIconPicker
