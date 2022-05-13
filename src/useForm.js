import { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState); /*
        estado para leer los valores, y para establecer los valores
    */ 

    const restartForm = () => {
        setValues(initialState);
    } // devuelve los valores del formulario a su estado inicial

    const handleInputChange = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        setValues({
            ...values,
            [name]: val
        });
    } // actualiza los valores en el estado conforme cambia el valor de los inputs

    return {
        handleInputChange,
        restartForm,
        values
    }
}