import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import ButtonGoogle from "../Elements/Button/Google";
import Number from "../Elements/Input/Number";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    localStorage.setItem("fullname", event.target.fullname.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    localStorage.setItem("phone", event.target.phone.value);
    window.location.href = "/homepage";
  };

  return (
    <div className="bg-white border-2 rounded-lg border-solid border-black w-1/2 h-auto py-6 items-center mx-auto mt-28 justify-center">
      <form onSubmit={handleRegister}>
        <p className="justify-center text-xl font-semibold items-center flex mb-6">
          Register
        </p>
        <InputForm
          label="Fullname"
          name="fullname"
          type="text"
          placeholder="Insert your fullname"
        />
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
        <Number
          label="Phone Number"
          name="phone"
          type="number"
          placeholder="Insert your phone number"
        />
        <InputForm
          label="Confirm Password"
          name="ConfirmPassword"
          type="password"
          placeholder="Confirm your new passsword"
        />
        <p className="text-sm mb-2 text-right mr-4">Forgot Password?</p>
        <Button variant="bg-[#3ecf4c]" color="text-white" type="submit">
          Register
        </Button>
        <Button
          variant="bg-[#e2fcd9]"
          color="text-[#3ecf4c]"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <p className="text-md my-2 text-center">Or</p>
        <ButtonGoogle />
      </form>
    </div>
  );
};

export default FormRegister;
