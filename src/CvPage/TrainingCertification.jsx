import axios from "axios";
import { useEffect, useState } from "react";


const TrainingCertification = () => {
    const [usercertificate, setUserCertificate] = useState([]); 

    const handleData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/trainingCertifications");
            setUserCertificate(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        handleData();
     
    }, []);
  return (
      <>
           {usercertificate.map((item, index) => (
              <>
                   <div className='flex flex-row'>
                       <li key={index} className='list-none p-2'>{item.title}</li>
                  <li key={index} className='list-none p-2'>{item.issuer}</li>
                       <li key={index} className='list-none p-2'>{item.date}</li>
                      
                   
                   </div>
                   {item.details.map((items, detailindex) => (
                           <>
                               <li key={detailindex}>{items }</li>
                           </>
                       ))}
                
            
                  </>
              
          ))}
            <hr className='border-black mb-1' />
      </>
  )
}

export default TrainingCertification