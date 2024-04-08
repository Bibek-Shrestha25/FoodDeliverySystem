import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.jpg";

const Sliders = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
      >
        <div>
          <img src={pizza} alt="pizza" />
        </div>
        <div>
          <img src={burger} alt="pizza" />
        </div>
      </Carousel>
    </div>
  );
};

export default Sliders;
