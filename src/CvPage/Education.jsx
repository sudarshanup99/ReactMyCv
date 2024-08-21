import axios from 'axios';
import  { useEffect, useState } from 'react'

const Education = () => {
    const [usereducation, setUserEducation] = useState([]); 

    const handleData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/education");
            setUserEducation(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        handleData();
     
    }, []);
  return (
      <>
          {usereducation.map((item, index) => (
              <>
                  <div className='flex flex-row'>
            <li key={index} className='list-none p-2'>{item.degree}</li>
                  <li key={index} className='list-none p-2'>{item.institution}</li>
                  <li key={index} className='list-none p-2'>{item.location}</li>
                      <li key={index} className='list-none p-2'>{item.startDate}</li>
                     
                      <li key={index} className='list-none p-2'>{item.endDate}</li>
                      </div>
                  {item.details.map((items, index) => (
                      <>
                          <li key={index}>{items }</li>
                      </>
                  ))}
            
                  </>
              
          ))}
           <hr className='border-black mb-1' />
      </>

  )
}

export default Education