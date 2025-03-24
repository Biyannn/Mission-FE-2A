import Input from "./Input";
import Label from "./Label"

const InputForm = (props) => {
    const {label, name, type, placeholder} = props;
    return(
        <div className="mb-6 mx-2">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
          </div>
    )
}

export default InputForm;








{/* <Button variant="bg-[#3ecf4c]" color="text-white">Login</Button>
      <Button variant="bg-[#e2fcd9] text-[#3ecf4c]" color="text-[#3ecf4c]">Register</Button>
      <Button></Button>
      <Button></Button> */}