import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Services } from "./components/Services"
import { TestimonialsContainer } from "./components/TestimonialsContainer"
import { Gallery } from "./components/Gallery"
import { Footer } from "./components/Footer"

function App() {

  return (
    <main className="relative max-w-[1440px] mx-auto">
      <Header />
      <Main />
      <Services />
      <TestimonialsContainer />
      <Gallery />
      <Footer />
    </main>
  )
}

export default App