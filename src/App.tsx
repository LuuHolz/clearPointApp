import Home from './pages/Home'
import { MyContextProvider } from './context/context'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/navbarStyle.scss'
import './style/bodyStyles.scss'
import 'leaflet/dist/leaflet.css';

function App() {

  return (
    <MyContextProvider>
      <Home />
    </MyContextProvider>
  )
}

export default App
