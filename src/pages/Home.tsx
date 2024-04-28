import { useEffect } from "react"
import useClearPoint from "../hooks/useClearPoint"

const Home = () => {

    const {isLoading, getClearPoints, error, clearPoint} = useClearPoint();

    useEffect(() => {
        getClearPoints()
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default Home
