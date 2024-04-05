import React from 'react'
import { Alert } from "flowbite-react"

const InformeBadge = ({ title, subTitle, color, icon }) => {
    return (
        <>
            <Alert className='mb' color="liht" rounded>
                <div className="inline-flex h-8 items-center justify-center">
                    <div className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-${color}-100 text-${color}-500 mr-2`}>
                        {icon}
                    </div>
                    <div>
                        <span className="font-bold text-slate-500 text-xs">{subTitle}</span>
                        <span className="font-bold text-gray-700 text-xl block">{title}</span>
                    </div>
                </div>

            </Alert>
        </>
    )
}

export default InformeBadge