import Hero from "./Components/Hero"
import NavBar from "./Components/NavBar"
import "./app.scss"


function App() {
  return (
    <>
      <section id="HomePage">
        <NavBar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="contact">contact</section> 
    </>
  ) 
}

export default App
