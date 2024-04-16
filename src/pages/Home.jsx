import Sliders from "../components/Sliders";
import Cards from "../components/Cards";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="bg-orange-50">
      <Hero />
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
