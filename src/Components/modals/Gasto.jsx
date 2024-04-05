import React from 'react'
import { HiArrowSmDown } from "react-icons/hi";
import { Button, TextInput, Modal, Label, Select } from 'flowbite-react';
import IconTitle from '../UI/IconTitle';

const Gasto = ({ control }) => {
    return (
        <div>
            <Modal show={control.variable} onClose={() => control.funcion(false)}>
                <Modal.Header className="items-center px-5 py-2.5">
                    <IconTitle
                        title="Agregar salida"
                        icon={<HiArrowSmDown size="20px" />}
                    />
                </Modal.Header>
                <Modal.Body className='p-4'>
                    <div className='mb-2'>
                        <div className="block mt-2">
                            <Label value="Fecha:" />
                        </div>
                        <TextInput type="date" required shadow />
                    </div>
                    <div className="mb-2">
                        <div className="block mt-2">
                            <Label value="Descripcion:" />
                        </div>
                        <TextInput type="text" required shadow />
                    </div>
                    <div className="mb-2">
                        <div className="block">
                            <Label htmlFor="countries" value="Motivo" />
                        </div>
                        <Select id="countries" required>
                            <option value="danfel">Compra</option>
                            <option value="dyf">Sueldo</option>
                            <option value="nathan">Adelanto</option>
                            <option value="nathan">Inversión</option>
                        </Select>
                    </div>
                    <div className="mb-2">
                        <div className="block">
                            <Label htmlFor="countries" value="Almacen" />
                        </div>
                        <Select id="countries" required>
                            <option value="danfel">Danfel</option>
                            <option value="dyf">DyF</option>
                            <option value="nathan">Nathan</option>
                        </Select>
                    </div>
                    <div className="mb-2">
                        <div className="block mt-2">
                            <Label value="Valor:" />
                        </div>
                        <TextInput type="number" required shadow />
                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-end p-2.5'>
                    <Button color="failure" outline onClick={() => control.funcion(false)}>
                        Cancelar
                    </Button>
                    <Button color="success" onClick={() => control.funcion(false)}>Aceptar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Gasto