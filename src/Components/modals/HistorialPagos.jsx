import React from 'react'
import { HiOutlineClock, HiOutlineX } from "react-icons/hi";
import { Button, Modal } from 'flowbite-react';
import IconTitle from '../UI/IconTitle';

const HistorialPagos = ({ control }) => {

    return (
        <div>
            <Modal show={control.variable} onClose={() => control.funcion(false)}>
                <Modal.Header>
                    <IconTitle
                        title="Historial Pagos"
                        icon={<HiOutlineClock size="20px" />}
                    />
                </Modal.Header>
                <Modal.Body className='p-4' >
                    <div className="overflow-x-auto mb-5">


                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-2">
                                            Fecha
                                        </th>
                                        <th scope="col" className="px-6 py-2">
                                            Valor
                                        </th>
                                        <th scope="col" className="px-6 py-2">
                                            Metodo
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <th className='px-1 py-3'>
                                            24/08/2024
                                        </th>
                                        <td className='px-1 py-3'>
                                            $1.500.000
                                        </td>
                                        <td className='px-1 py-3'>
                                            Transferencia
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <th className='px-1 py-3'>
                                            24/08/2024
                                        </th>
                                        <td className='px-1 py-3'>
                                            $1.500.000
                                        </td>
                                        <td className='px-1 py-3'>
                                            Transferencia
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" color="failure" onClick={() => control.funcion(false)}>
                        <IconTitle
                            sm
                            title="Cerrar"
                            icon={<HiOutlineX />}
                        />
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HistorialPagos