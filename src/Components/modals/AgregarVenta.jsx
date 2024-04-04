import React, { useState } from 'react'
import { HiPlus } from "react-icons/hi";
import { Button, TextInput, Modal, Label, Select, Table, Checkbox } from 'flowbite-react';
import IconTitle from '../UI/IconTitle';

const AgregarVenta = ({ control }) => {

    const [redesSociales, setRedesSociales] = useState(false)

    return (
        <div>
            <Modal show={control.variable} onClose={() => control.funcion(false)} size="3xl">
                <Modal.Header>
                    <IconTitle
                        title="Registrar venta"
                        icon={<HiPlus size="20px" />}
                    />
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="flex">
                            <div className='flex-1 mr-2'>
                                <div className="block">
                                    <Label value="Factura" />
                                </div>
                                <TextInput type="number" required />
                            </div>
                            <div className='flex-1'>
                                <div className="block">
                                    <Label value="Fecha" />
                                </div>
                                <TextInput type="date" required />
                            </div>
                        </div>
                        <div className="max-w mt-2">
                            <div className="block">
                                <Label value="Almacen" />
                            </div>
                            <Select required>
                                <option value="">Seleccionar almacen</option>
                                <option value="danfel">Danfel</option>
                                <option value="dyf">DyF</option>
                                <option value="nathan">Nathan</option>
                            </Select>
                        </div>
                        <div className="articulos ">
                            <hr className='mt-3' />
                            <div className="max-w mt-2">
                                <div className="block">
                                    <Label value="Articulos" />
                                </div>
                                <Select required>
                                    <option value="">Seleccionar articulos</option>
                                    <option value="danfel">Danfel</option>
                                    <option value="dyf">DyF</option>
                                    <option value="nathan">Nathan</option>
                                </Select>
                            </div>
                            <div className="flex mt-2">
                                <div className='flex-1 mr-2'>
                                    <div className="block">
                                        <Label value="Valor Und" />
                                    </div>
                                    <TextInput type="number" required />
                                </div>
                                <div className='flex-1'>
                                    <div className="block">
                                        <Label value="Cantidad" />
                                    </div>
                                    <TextInput type="number" required />
                                </div>
                            </div>
                            <Button className='mt-2 w-full'>Agregar</Button>
                            <div className='mt-2 overflow-x-auto'>
                                <Table striped>
                                    <Table.Head>
                                        <Table.HeadCell>Cant.</Table.HeadCell>
                                        <Table.HeadCell>Articulo</Table.HeadCell>
                                        <Table.HeadCell>Und.</Table.HeadCell>
                                        <Table.HeadCell>Total</Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell>2</Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Calentador VC; 50cm; Electrico</Table.Cell>
                                            <Table.Cell>4</Table.Cell>
                                            <Table.Cell>0</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>

                            </div>
                            <hr className='mt-3' />
                        </div>
                        <div className=''>
                            <div className="block">
                                <Label value="Pago" />
                            </div>
                            <TextInput type="number" required />
                        </div>
                        <div className="max-w mt-2">
                            <div className="block">
                                <Label value="Metodo" />
                            </div>
                            <Select required>
                                <option value="">Seleccionar metodo</option>
                                <option value="efectivo">Efectivo</option>
                                <option value="transferencia">Transferencia</option>
                                <option value="sistecrediro">Sistecredito</option>
                            </Select>
                        </div>
                        <div className="my-4 flex items-center gap-2">
                            <Checkbox id="redesSociales" onChange={(e) => setRedesSociales(e.target.value)} />
                            <Label htmlFor="redesSociales" className="flex">
                                Redes sociales
                            </Label>
                        </div>
                        <div className={`max-w ${redesSociales ? "block" : "invisible"}`}>
                            <Select required>
                                <option value="">Seleccionar nombre</option>
                                <option value="mario">Mario</option>
                                <option value="eddy">Eddy</option>
                                <option value="vanesa">Vanesa</option>
                                <option value="jhoan">Jhoan</option>
                            </Select>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button color="success" onClick={() => control.funcion(false)}>Aceptar</Button>
                    <Button color="failure" outline onClick={() => control.funcion(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AgregarVenta