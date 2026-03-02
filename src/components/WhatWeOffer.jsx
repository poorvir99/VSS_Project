import React from 'react'

import ServiceCard from './ServiceCard';
// import { ARCHITECTURE, LANDSCAPE_DESIGN, SCULPTURE, TEMPLE } from "/services_icons"
const IMAGES = [
    "/services_icons/sculpture_color.png",
    "/services_icons/temple_colored.png",
    "/services_icons/landscape_colored.png",
    "/services_icons/architect_color.png",
    
  ];
  

const WhatWeOffer =  () => {
    const services = [
      { icon: IMAGES[0] , title: 'Sculptures & Artifacts', description:"We craft intricate stone, metal, and bronze sculptures, preserving cultural heritage and enhancing spiritual and artistic spaces." },
      { icon: IMAGES[1] , title: 'Temple Architects & Contractors',description:"From planning to construction, we specialize in building authentic temples with precision, traditional carvings, and Vastu-aligned designs." },
      { icon: IMAGES[2] , title: 'Landscape Design',description:"We create visually stunning and serene outdoor spaces, integrating natural elements with artistic sculptures and traditional aesthetics." },
      { icon: IMAGES[3] , title: 'Architecture',description:"Our architectural designs blend heritage and modernity, ensuring functionality, durability, and timeless beauty in every structure. " },
      
    ];
  
    return (
      <div className="pt-10 pb-10 mb-[50px]">
        <h3 className="text-[#C08457] text-center text-4xl font-serif py-[20px] ">Our Services</h3>
         {/* Grid Layout for 2x2 (2 columns per row) */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 max-w-5xl mx-auto ">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    );
  };


export default WhatWeOffer