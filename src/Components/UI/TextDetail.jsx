
const TextDetail = ({ title, detail }) => {
    return (
        <div>
            <span className='text-slate-600 block text-sm'>{title}</span>
            <span className='text-gray-900 font-bold'>{detail}</span>
            <hr />
        </div>
    )
}

export default TextDetail