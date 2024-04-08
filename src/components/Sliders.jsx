import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pizza from "../assets/pizza.jpg";
import fish from "../assets/fish.jpg";
import momo from "../assets/momo.jpg";
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
      items: 2,
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
        swipeable={true}
      >
        <div className="h-[300px] w-full">
          <img src={pizza} alt="pizza" className="w-full" />
        </div>
        <div className=" h-[300px] w-full">
          <img src={fish} alt="fish" className="w-full" />
        </div>
        <div className="h-[300px] w-full">
          <img src={momo} alt="" className="w-full" />
        </div>
        <div className="h-[300px] w-full">
          <img src={burger} alt="" className="w-full " />
        </div>
      </Carousel>
    </div>
  );
};

export default Sliders;
