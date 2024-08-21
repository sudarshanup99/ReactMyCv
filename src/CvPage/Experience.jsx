import axios from 'axios';
import { useEffect, useState } from 'react'

const Experience = () => {
    const [userexperience, setUserExperience] = useState([]); 

    const handleData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/experience");
            setUserExperience(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        handleData();
     
    }, []);
  return (
      <>
          {userexperience.map((item, index) => (
              <>
                  <div className='flex flex-row'>  <li key={index} className='list-none p-2'>{item.jobTitle}</li>
                  <li key={index} className='list-none p-2'>{item.company}</li>
                  <li key={index} className='list-none p-2'>{item.startDate}</li>
                      <li key={index} className='list-none p-2'>{item.endDate}</li>
                      </div>
                  <li key={index} className='list-none p-2'>{item.responsibilities}</li>
            
                  </>
              
          ))}
           <hr className='border-black mb-1' />
          
      </>
  )
}

export default Experience