import React from 'react'

const ServiceCard =({ icon, title,description }) => (
    <div className="flex flex-col items-center mx-5 p-6 rounded-lg text-[#F2F2F2] bg-[#B0B0B0]/10 shadow-md">
      <img src={icon} alt={`${title} icon`} className="w-20 mb-2 " />
      <p className="pt-2 text-center font-serif text-xl text-[#C08457]">{title}</p>
      <p className="pt-3 text-center text-[#F2F2F2]">{description}</p>
    </div>
  );


export default ServiceCard