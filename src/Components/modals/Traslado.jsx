import { Modal, Button, Select, Label, TextInput, Textarea } from 'flowbite-react'
import { FaExchangeAlt } from "react-icons/fa";
import IconTitle from '../UI/IconTitle';

const Traslado = ({ control }) => {

    return (
        <>
            <Modal show={control.variable} onClose={() => control.funcion}>
                <Modal.Header>
                    <IconTitle
                        title="Traslado"
                        icon={<FaExchangeAlt size="20px" />}
                    />
                </Modal.Header>
                <Modal.Body>
                    <div className="max-w-md mb-2">
                        <div className="block">
                            <Label value="Articulo" />
                        </div>
                        <Textarea value="Carro de 4 puestos; V; A; P40; 2F de galon; carpa; ruedas antipinchazos" required disabled rows={3} />
                    </div>

                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="De:" />
                        </div>
                        <Select id="countries" required>
                            <option value="danfel">Danfel</option>
                            <option value="dyf">DyF</option>
                            <option value="nathan">Nathan</option>
                        </Select>
                    </div>
                    <div className="max-w-md mt-2">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="A:" />
                        </div>
                        <Select id="countries" required>
                            <option value="danfel">Danfel</option>
                            <option value="dyf">DyF</option>
                            <option value="nathan">Nathan</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block mt-2">
                            <Label value="Cantidad" />
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
        </>
    )
}

export default Traslado