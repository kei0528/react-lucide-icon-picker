import { createRoot } from 'react-dom/client'

import ReactLucideIconPicker from './component/ReactLucideIconPicker'

export { ReactLucideIconPicker }

const root = document.createElement('div')
document.body.appendChild(root)
createRoot(root).render(<ReactLucideIconPicker />)
