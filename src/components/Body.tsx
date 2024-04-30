import Recycling from "../assets/reciclaje.jpg"
import naturesIocn from "../assets/nature.png"

const BodyImages = () => {
  return (
    <>
      <div className="containerCardRecycling">
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
    </>
  )
}

export default BodyImages