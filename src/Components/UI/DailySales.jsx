import "./../styles/dailysales.css"
import logodyf from "./../../img/logodyf.svg"

const DailySales = () => {



    return (
        <>
            {/* header resumen de ventas */}
            <div className='container mx-auto px-11 h-48 bg-sky-950 flex items-center daily-sales rounded-b-lg'>
                <div>
                    <img src={logodyf} alt="logodyf" className="mt-4" width="120rem" />
                    <hr className="my-2" />
                    <h1 className="font-extrabold text-3xl">$4.500.000</h1>
                    <p className="antialiased text-sm font-light text-slate-400	">Ventas semanal</p>
                    <h1 className="font-bold text-lg mt-2 text-red-400">$1.100.000</h1>
                    <p className="antialiased text-sm font-light text-red-100	">Gastos semanal</p>
                </div>
            </div>
        </>
    )
}

export default DailySales