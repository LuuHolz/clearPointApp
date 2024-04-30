import { useEffect } from "react"
import useClearPoint from "../hooks/useClearPoint"
import Navbar from "../components/Navbar"
import Body from "../components/Body"
import Map from "../components/Map"

const Home = () => {

  const { isLoading, getClearPoints, error, clearPoint } = useClearPoint();

  useEffect(() => {
    getClearPoints()
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="containerBodyHome">
          <Body />
        </div>
        <Map/>
      </div>
    </>
  )
}

export default Home
