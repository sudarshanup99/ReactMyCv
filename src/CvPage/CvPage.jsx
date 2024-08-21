import Education from "./Education"
import Experience from "./Experience"
import Header from "./Header"
import Project from "./Project"
import Skills from "./Skills"
import Summary from "./Summary"
import TrainingCertification from "./TrainingCertification"


const CvPage = () => {
  return (
      <>
      
          <Header />
          <Summary />
          <Experience />
          <Project />
      <TrainingCertification />
      <Education />
      <Skills/>
      </>
  )
}

export default CvPage