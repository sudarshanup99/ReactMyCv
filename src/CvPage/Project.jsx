import axios from 'axios';
import  { useEffect, useState } from 'react'

const Project = () => {
    const [useproject, setUserProject] = useState([]); 

    const handleData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/projects");
            setUserProject(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        handleData();
     
    }, []);
  return (
      <>
         <h1>Projects</h1>
 {useproject.map((item, projectIndex) => (
     <div key={projectIndex} className="flex flex-row">
         {console.log("dasda==>",item.keyFeatures)}
        <li className="list-none p-2">{item.projectName}</li>
        <ul className="list-none p-2">
            {item.keyFeatures.map((feature, featureIndex) => (
                <li key={featureIndex} className="list-none p-2">{feature}</li>
            ))}
        </ul>
    </div>
 ))}
           <hr className='border-black mb-1' />
                  
            
                  </>
              
       
 
  )
}

export default Project