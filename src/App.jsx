import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Steps from './components/Steps'
import PricingCard from './components/PricingCard'
import Rating from './components/Rating'
import Workflow from './components/Workflow'
import Footer from './components/Footer'
import Products from './components/Product/Products'
import ProductHead from './components/Product/ProductHead'
import { useState } from 'react'
import Cart from './components/Product/Cart'

const cartsData = async() => {
  const res = await fetch('cardsData.json')
  return res.json()
}
const cartPromise = cartsData()

function App() {
  const [activeTab, setActiveTab] = useState('product')
  // console.log(activeTab)

  const [selectCart, setSelectCart] = useState([])
  console.log(selectCart)

  return (
    <>
      <Navbar selectCart={selectCart}/>
      <Banner />
      <Rating />

      {/* tools section  */}
      <ProductHead />

      {/* Tab  */}
      <div className="tabs tabs-box bg-white shadow-none justify-center my-5 w-83 border border-black/10 mx-auto rounded-full">

        <input type="radio" name="my_tabs_1" 
        onClick={()=> setActiveTab('product')}
        className={`tab rounded-full w-40 font-semibold ${activeTab === 'product' && 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} `} 
        aria-label="Products"  
        defaultChecked/>

        <input type="radio" name="my_tabs_1" 
        onClick={()=> setActiveTab('cart')}
        className={`tab rounded-full w-40 font-semibold  ${activeTab === 'cart' && 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'}`} 
        aria-label={`Cart (${selectCart.length})`} />
      </div>

      {activeTab === "product" ? <Products cartPromise={cartPromise} selectCart={selectCart} setSelectCart={setSelectCart} /> : <Cart selectCart={selectCart} setSelectCart={setSelectCart} />}

      
      

      <Steps />
      <PricingCard />
      <Workflow />
      <Footer />


    </>
  )
}

export default App
