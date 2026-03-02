import React from 'react'
import Header from '../Header'
import ProjectDetails from './ProjectDetails'
import Footer from '../Footer'
import ProjectGallery from './ProjectGallery'

const ProjectPage = () => {
  return (
    <div>
       <Header/>
       <hr className="border-gray-500  border-t-[0.9px] w-4/4 mx-auto opacity-30" /> 
       
        
        {/* <ProjectDetails/> */}
        <ProjectGallery/>
      
<Footer/>
    </div>

    
  )
}

export default ProjectPage