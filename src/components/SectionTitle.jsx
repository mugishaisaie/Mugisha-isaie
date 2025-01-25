import React from 'react'

const SectionTitle = ({ text }) => {
  return (
    <div className="flex items-center justify-center border-b border-gray-200 pb-5 h-64">
      <h2 className="text-3xl tracking-wider font-medium capitalize text-center">{text}</h2>
    </div>
  );
};
  


export default SectionTitle
