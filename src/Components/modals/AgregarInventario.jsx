import React from 'react'
import { HiPlus } from "react-icons/hi";
import { Button, TextInput, Modal, Label, Select } from 'flowbite-react';
import IconTitle from '../UI/IconTitle';

const AgregarInventario = ({ control }) => {
    return (
        <div>
            <Modal show={control.variable} onClose={() => control.funcion(false)}>
                <Modal.Header>
                    <IconTitle
                        title="Ingresar mercancia"
                        icon={<HiPlus size="20px" />}
                    />
                </Modal.Header>
                <Modal.Body className='p-4'>
                    <div className='mb-2'>
                        <div className="block mt-2">
                            <Label value="Articulo:" />
                        </div>
                        <TextInput type="text" required shadow />
                    </div>

                    <div className="mb-2">
                        <div className="block">
                            <Label htmlFor="countries" value="Ingresar a:" />
                        </div>
                        <Select id="countries" required>
                            <option value="danfel">Danfel</option>
                            <option value="dyf">DyF</option>
                            <option value="nathan">Nathan</option>
                        </Select>
                    </div>
                    <div className="mb-2">
                        <div className="block mt-2">
                            <Label value="Cantidad:" />
                        </div>
                        <TextInput type="number" required shadow />
                    </div>
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

export default AgregarInventario