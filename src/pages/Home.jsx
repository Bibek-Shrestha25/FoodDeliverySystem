import Sliders from "../components/Sliders";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div className="bg-orange-200">
      <Sliders />
      <div className="flex flex-row justify-between mt-10">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
