import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import ScrollDown from './ScrollDown';
import ScrollUp from './ScrollUp';

const ScrollPage = () => {
 return   <div className='grid grid-cols-2 bg-green-200'>

    <ScrollDown >
          <FaArrowDown />
      </ScrollDown>
      <ScrollUp >
          <FaArrowUp />
      </ScrollUp>
    </div>
 
};

export default ScrollPage;
