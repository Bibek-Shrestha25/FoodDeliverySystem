import momo from "../assets/momo.jpg";
import SigIn from "../components/SignIn";

const Login = () => {
  return (
    <div className=" bg-orange-50 py-40">
      <h1 className="text-3xl font-semibold text-center mt-[80px] ">
        Login for daily updates and exciting offers
        <br />
        Create a free account now.
      </h1>
      <div className="w-full flex justify-center items-center flex-col gap-5 mt-10  ">
        <SigIn />
      </div>
    </div>
  );
};
export default Login;
