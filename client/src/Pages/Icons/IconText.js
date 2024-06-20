import { Icon } from "@iconify/react/dist/iconify.js"



const IconText =({iconName, displayText, active}) =>{
    return(
        <div className="flex items-center justify-start cursor-pointer ">
            <div className="px-2 py-2">
                <Icon icon={iconName} color={active?"white":"gray"} fontSize={35} />
            </div>
            <div className={`${active?"text-gray-400":"text-white"} text-sm font-semibold hover:text-black ` }>
                {displayText}
            </div>

        </div>
    )
}

export default IconText