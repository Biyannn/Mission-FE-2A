import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import ButtonGoogle from "../Elements/Button/Google";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/homepage";
  };
  return (
    <div className="bg-white border-2 rounded-lg border-solid border-black w-1/2 h-auto py-6 items-center mx-auto mt-28 justify-center">
      <form onSubmit={handleLogin}>
        <p className="justify-center text-xl font-semibold items-center flex mb-6">
          Login
        </p>
        <InputForm
          label="Email"
          name="email"
          type="email"
          placeholder="ayy@gmail.com"
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="******"
        />
        <p className="text-sm mb-2 text-right mr-4">Forgot Password?</p>
        <Button variant="bg-[#3ecf4c]" color="text-white" type="submit">
          Login
        </Button>
        <Button
          variant="bg-[#e2fcd9]"
          color="text-[#3ecf4c]"
          onClick={() => navigate("/")}
        >
          Register
        </Button>
        <p className="text-md my-2 text-center">Or</p>
        <ButtonGoogle />
      </form>
    </div>
  );
};

export default FormLogin;
