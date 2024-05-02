import { useEffect } from "react"
import useClearPoint from "../hooks/useClearPoint"
import Navbar from "../components/Navbar"
import Body from "../components/Body"


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
      </div>
    </>
  )
}

export default Home
