import Nav from "@components/Nav"
import HeroSection from "@components/HeroSection"
import AboutUs from "@components/AboutUs"
import JoinCommunity from "@components/JoinCommunity"
import Activities from "@components/Activities"
import Training from "@components/Training"
import Footer from "@components/Footer"
import Learn from "@components/Learn"
import Newsletter from "@components/Newsletter"
import OurBlog from "@components/OurBlog"
import Partners from "@components/Partners"
import OurTeam from "@components/OurTeam"
import UpcomingEvents from "@components/UpcomingEvents"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col text-center">
      <Nav />
      <HeroSection />
      <AboutUs />
      <JoinCommunity />
      
      <Activities />
      <Training />
      <UpcomingEvents />
      {/* <Result /> */}
      {/* <Partners /> */}
      <OurTeam />
      <OurBlog />
      <Newsletter />
      <Learn />
      <Footer />
    </section>
  )
}

export default Home