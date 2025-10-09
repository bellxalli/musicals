import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Musical from "./components/Musical"
import Musicals from "./data/musicals.json"


function App() {

  const musicalElements = [];

  Musicals.musicals.forEach((m, index) => {

    musicalElements.push(<Musical key={index}/>)

  })

  return (
    <div>
      <Header />
      {musicalElements}
      <Footer />
    </div>
  )
}

export default App
