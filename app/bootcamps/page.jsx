// import Alumini from "@components/Alumini"
import Cairo from "@components/Cairo"
import Curriculum from "@components/Curriculum"
import Faq from "@components/Faq"
import Footer from "@components/Footer"
import Nav from "@components/Nav"
import Registansts from "@components/Registansts"

const Bootcamps = () => {
  return (
    <div>
        <Nav />
        <Cairo />
        <Registansts />
        {/* <Alumini /> */}
        <Curriculum />
        <Faq />
        <Footer />
    </div>
  )
}

export default Bootcamps