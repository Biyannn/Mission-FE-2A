const Input = (props) => {
    const {type, placeholder, name} = props;
    return(
        <input type={type} className="flex text-sm border-2 border-slate-500 rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-75" placeholder={placeholder} name={name} id={name}/>
    )
}

export default Input;