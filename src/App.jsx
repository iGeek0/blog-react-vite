
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRouter from './router/AppRouter';

function App() {

  const tituloPagina = "Blog";


  return (
    <>
      <Header titulo={tituloPagina} />
      <AppRouter/>
      <Footer/>
    </>
  )
}

export default App
