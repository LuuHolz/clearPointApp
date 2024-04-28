import { useEffect } from "react"
import useClearPoint from "../hooks/useClearPoint"
import Navbar from "../components/Navbar"

const Home = () => {

  const { isLoading, getClearPoints, error, clearPoint } = useClearPoint();

  useEffect(() => {
    getClearPoints()
  }, []);

  return (
    <>
      <Navbar/>
    </>
  )
}

export default Home
