const TextInput = ({label, placeholder, className, onChange}) =>{
    return (
        <div className={`textInputDiv flex flex-col space-y-2 w-full text-left pt-2 ${className}`}>
            <label for={label} className="font-bold text-white pb-1 pl-1">{label}</label>
            <input 
                type="text" 
                placeholder={placeholder}
                className="p-2 rounded  placeholder-gray-300 bg-gray-900"
                id={label}
                onChange={onChange}

            />
        </div>
    )
}

export default TextInput;