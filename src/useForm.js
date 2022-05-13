import { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handleInputChange = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        setValues({
            ...values,
            [name]: val
        });
    }

    return {
        handleInputChange,
        values
    }
}