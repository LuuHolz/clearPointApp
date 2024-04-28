import Home from './pages/Home'
import { MyContextProvider } from './context/context'

function App() {

  return (
    <MyContextProvider>
      <Home />
    </MyContextProvider>
  )
}

export default App
