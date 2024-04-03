
const IconTitle = ({ icon, title, size }) => {
    return (
        <div className="icon-text">
            <span className="text-sm"> {icon} </span>
            <span className={`text-${size} font-bold`}>{title}</span>
        </div>
    )
}

export default IconTitle