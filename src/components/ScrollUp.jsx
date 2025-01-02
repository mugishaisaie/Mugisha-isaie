import React from 'react'

function ScrollUp({children}) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <button onClick={scrollToTop} className='mr-10 text-center text-emerald-500 text-2xl p-2 my-0 mx-0 '>
                {children}
              </button>
  )
}

export default ScrollUp