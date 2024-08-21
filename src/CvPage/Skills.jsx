import axios from "axios";
import { useEffect, useState } from "react";


const Skills = () => {
    const [userSkills, setUserSkills] = useState([]); 

    const handleData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/skills");
            setUserSkills(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        handleData();
     
    }, []);
  return (
      <>
          <h1>Skills</h1>
          
          {userSkills.map((item, index) => (
              <div className="flex flex-row" key={index}>{item }</div>
          ))}

          
      </>
  )
}

export default Skills