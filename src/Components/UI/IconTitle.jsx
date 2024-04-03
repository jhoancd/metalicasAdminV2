
const IconTitle = ({ icon, title }) => {
    return (
        <div className="icon-text">
            <span> {icon} </span>
            <span className='text-2xl font-bold'>{title}</span>
        </div>
    )
}

export default IconTitle