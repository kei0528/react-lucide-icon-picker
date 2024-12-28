import { useState } from 'react'
import { ReactLucideIconPicker } from 'react-lucide-icon-picker'
import 'react-lucide-icon-picker/style.css'

function App() {
  const [icon, setIcon] = useState<{ key: string; icon: SVGElement } | null>(null)

  return (
    <div className='container mx-auto px-5 py-10 min-h-svh flex flex-col'>
      <header className='font-bold text-lg bg-slate-200/30 backdrop-blur-md px-5 py-4 flex items-center justify-between shadow-lg shadow-primary/10 rounded-xl gap-2'>
        <div className='flex items-center gap-2.5'>
          <img src='/logo.png' alt='Logo' className='w-8 h-8 md:w-10 md:h-10' />
          <h1 className='text-primary text-lg md:text-xl'>React Lucide Icon Picker</h1>
        </div>

        <a
          className='hover:duration-200 rounded-full p-2 hover:bg-slate-200/80'
          href='https://github.com/kei0528/react-lucide-icon-picker'
          target='_blank'
          aria-label='Link to GitHub repository'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='28'
            height='28'
            className='fill-slate-600'
            viewBox='0 0 16 16'
            stroke='none'
          >
            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
          </svg>
        </a>
      </header>

      <main className='mt-12'>
        <h2 className='text-2xl font-bold mb-5'>About</h2>
        <p>
          It is a simple and easy-to-use library that allows you to select icons from
          Lucide icons.
        </p>

        <h2 className='text-2xl mt-12 md:mt-20 font-bold mb-5'>Demo</h2>
        <div className='grid gap-5 md:grid-cols-2 '>
          <div className='h-96 overflow-scroll border border-slate-200 shadow-sm rounded-xl p-5'>
            <ReactLucideIconPicker
              onChange={(icon) => {
                setIcon(icon)
              }}
            />
          </div>
          {icon && (
            <div className='flex flex-col gap-2 bg-slate-200/30 p-5 rounded-xl h-fit'>
              <span>
                <b>key:</b> {icon.key}
              </span>
              <span>
                <b>icon:</b> {icon.icon.outerHTML}
              </span>
            </div>
          )}
        </div>

        <h2 className='text-2xl font-bold mt-12 md:mt-20 mb-5'>Doc</h2>
        <a
          href='https://github.com/kei0528/react-lucide-icon-picker'
          target='_blank'
          className='flex items-center gap-1 underline'
        >
          <span>Github</span>
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0)'>
              <path
                d='M11 3.99994H4V17.9999C4 19.1045 4.89543 19.9999 6 19.9999H18C19.1046 19.9999 20 19.1045 20 17.9999V12.9999'
                stroke='#292929'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M9 14.9999L20 3.99994'
                stroke='#292929'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M15 3.99994H20V8.99994'
                stroke='#292929'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='24' height='24' fill='black' />
              </clipPath>
            </defs>
          </svg>
        </a>
      </main>

      <footer className='text-sm text-slate-500 mt-auto py-10 flex justify-center flex-col items-center'>
        <a
          className='underline text-xs mb-2'
          href='https://github.com/kei0528/react-lucide-icon-picker'
          target='_blank'
        >
          Github
        </a>
        <small>React Lucide Icon Picker &copy; 2024</small>
      </footer>
    </div>
  )
}

export default App
