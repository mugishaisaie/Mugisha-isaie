import React from 'react'

function ScrollDown({children}) {
    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      };
    
      return (
        <div>
          
          <button onClick={scrollToBottom} className='mr-10 text-center text-emerald-500 text-2xl p-2'>
            {children}
          </button>
          </div>
      );
}

export default ScrollDown
