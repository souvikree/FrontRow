const PasswordInput = ({label, placeholder}) =>{
    return (
        <div className="textInputDiv flex flex-col space-y-2 w-full pt-1">
            <label for={label} className="font-bold text-left text-white pb-1 pl-1">Password</label>
            <input 
                type="password" 
                placeholder={placeholder}
                className="p-2  rounded placeholder-gray-300 bg-gray-900"
                id={label}

            />
        </div>
    )
}

export default PasswordInput;