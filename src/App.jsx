import Header from "./components/Header"
import Footer from "./components/Footer"
import Musicals from "./data/musicals.json"
import './App.css'


function App() {

  return (
    <>
      <Header />
      {
        Musicals.forEach((m, index) => (
          <Musical key={index} props={m} />
        ))
      }
      <Footer />

    </>
  )
}

export default App
