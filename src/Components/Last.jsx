import React from 'react'

function Last() {
  return (
    <nav className='w-full bg-zinc-950 p-6'>
        <ul className='ml-112 flex flex-wrap gap-6 items-center  tracking-tight'>
            {["Services", "Our Work", "About us", "Insights", "Contact"].map((item, index) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`text-lg capitalize font-semibold text-white hover:text-amber-600 transition-colors
                    ${index === 0 ? "text-amber-600" : "text-white"}`
                  }
                >
                  {item}
                </a>
              </li>
            ))}
        </ul> 
    </nav>
  )
}

export default Last