import Banner from "./component/Banner"
import Banner2 from "./component/Banner2"
import { Hero } from "./component/Hero"
import { Services } from "./component/Services"
import Subscribe from "./component/Subscribers"


function App() {
  return (
  <main className="overflow-x-hidden bg-white text-black">
  
    <Hero/>
    <Services/>
    <Banner/>
    <Subscribe/>
    <Banner2/>
  </main>

  )
}

export default App
