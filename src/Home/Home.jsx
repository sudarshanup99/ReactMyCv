import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate =useNavigate();
    function handleCv()
    {
      navigate("/page")
    }
    return (
     
      <>
          <button onClick={handleCv}>View My cv</button>
          
      </>
  )
}

export default Home