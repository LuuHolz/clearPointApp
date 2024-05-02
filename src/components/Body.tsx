import useClearPoint from "../hooks/useClearPoint"
import Recycling from "../assets/reciclaje.jpg"
import naturesIocn from "../assets/nature.png"
import plant from "../assets/plants.jpg"
import boxRecyling from "../assets/boxRecycling.jpg"
import Map from "../components/Map"


const BodyImages = () => {

  const { isLoading, getClearPoints, error, clearPoint } = useClearPoint();


  return (
    <>
      <div className="containerimgPlant">
        <img src={plant} alt="" className="imgPlant" />
      </div>

      <div className="containerCardRecycling">
        {/* CARD */}

        <div>
          <img src={Recycling} alt="Recycling" className="imgRecycling" />
        </div>

        <div className="centerBox">
          <h5 className="textCardWeAre">We are top <strong>recycling</strong> organization to create best <strong>environment.</strong></h5>
          <p className="textCardView">VIEW ALL SERVICES</p>
        </div>

        <div className="rightBox">
          <img src={naturesIocn} alt="icon" className="natureLogoCard" />
          <p className="text25">25+</p>
          <p className="textCardYears">YEARS</p>
          <p className="textCardExperience">EXPERIENCE</p>
        </div>
      </div>

      {/* MAPA */}

      <div>
        <p className="textFind">FIND YOUR NEAREST RECYCLING POINT!</p>
      </div>
      <Map containers={clearPoint} />

      {/* CARDS */}

      <div className="boxReciclyngContainer">
        <img src={boxRecyling} alt="" className="imgboxRecyling" />
        <div className="overlay"></div>

        <div>
          <p>RECYCLING WASTAGE SAVE ENVIRONMENT!</p>
          <p>Simple steps Wastage to Recycling Item Processing</p>
        </div>

        <div>
          <p>Recycling is the process of converting waste materials into new materials and objects.
            To do this, recycling often requires both machinery and employees to correctly sort recyclable items based on the material they’re made of.
            This includes paper, plastic, glass, metal, and more.
            This Waste Management video shows the step-by-step process of how materials are processed once they reach a facility.
          </p>
          <button>GET STARTED</button>
          <button>VIEW OUR PLANS</button>
        </div>

        <div>
          {/* CARDS */}
        </div>

      </div>
    </>
  )
}

export default BodyImages
