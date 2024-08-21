import axios from "axios";
import { useEffect, useState } from "react";


const Summary = () => {
  
        const [summaryinfo, setSumamryInfo] = useState(); 
    
        const handleData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/summary");
                setSumamryInfo(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
    
        useEffect(() => {
            handleData();
         
        }, []);
  return (
      <>
          <h1 className="text-lg">Summary</h1>
          <p>{summaryinfo}</p> <hr className='border-black mb-1' />

      </>
      
  )
}

export default Summary