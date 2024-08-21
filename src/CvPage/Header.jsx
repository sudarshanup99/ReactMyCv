import { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
    const [userinfo, setUserInfo] = useState(); 

    const handleData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/personalDetails");
            setUserInfo(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        handleData();
     
    }, []);

    if (!userinfo) {
        return <div>Loading...</div>; 
    }

   

    return (
        <div>
            <h1 className='font-bold text-xl m-5'>{userinfo.name}</h1>
            <h2 className='m-5'>My CV</h2>
            <div className='flex flex-row p-15'>
            <p className='p-2' >Email: {userinfo.email}</p>
            <p className='p-2'>Phone: {userinfo.phone}</p>
            <p className='p-2'>GitHub: <a href={userinfo.github} target="_blank" >{userinfo.github}</a></p>
            <p className='p-2'>LinkedIn: <a href={userinfo.linkedin} target="_blank" >{userinfo.linkedin}</a></p>
                <p className='p-2'>Medium: <a href={userinfo.medium} target="_blank" >{userinfo.medium}</a></p>
            </div>
            <hr className='border-black mb-1' />
        </div>
    );
};

export default Header;
