import './App.css';
import { Nav, Hero, GetStarted, HikingEssentials, Key, Footer } from './sections';


function App() {
  return (
    <main className='main-container'>
      <section className='nav'>
        <Nav/>
      </section>
        <section className=''>
        <Hero/>
        </section>
        <section className='padding get'>
        <GetStarted/>
        </section>
        <section className='padding height-container'>
          <HikingEssentials/>
        </section>
        <section className='padding height-container'>
          <Key/>
        </section>
        <section className='padding height-container'>
          <Footer/>
        </section>
    </main>
  )
}

export default App;
