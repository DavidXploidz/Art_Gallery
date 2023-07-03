import './App.css'
import Galeria from './components/Galeria';
import Header from './components/Header';
import useGaleria from './hooks/useGaleria'

function App() {

  const {} = useGaleria();

  return (
    <>
      <Header />
      <Galeria />
    </>
  )
}

export default App
