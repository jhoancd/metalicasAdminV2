
const IconTitle = ({ icon, title, size, sm }) => {
    return (
        <div className="icon-text">
            <span className="text-sm"> {icon} </span>
            <span className={`text-${size} ${sm ? "" : "font-bold"}`}>{title}</span>
        </div>
    )
}

export default IconTitle