import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Steps from './components/Steps'
import PricingCard from './components/PricingCard'
import Rating from './components/Rating'
import Workflow from './components/Workflow'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Rating />

      {/* tools section  */}

      <Steps />
      <PricingCard />
      <Workflow />
      <Footer />
      

    </>
  )
}

export default App
