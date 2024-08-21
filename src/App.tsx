import Banner from "./component/Banner"
import { Hero } from "./component/Hero"
import { Services } from "./component/Services"


function App() {
  return (
  <main className="overflow-x-hidden bg-white text-black">
  
    <Hero/>
    <Services/>
    <Banner/>
  </main>

  )
}

export default App
