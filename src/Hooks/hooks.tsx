import { useState } from 'react';

/**
 * @returns  Hook para manejar los formularios
 */
const UseForm = (initialState: any) => {
    const [values, setValues] = useState(initialState);
    const handleChange = ({ target }: any)=>{
        setValues({...values,[target.name]: target.value});
    };
    const reset =() =>{
        setValues(initialState);
    };
    return[values,handleChange,reset]
};

export default UseForm;
