import { useState } from "react"


export const AddCategory = ({setCategories, categories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
        
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().lenght <= 1) return;
        
        setCategories([inputValue, ...categories]);
        setInputValue('');

    }

    return (
        <form onSubmit={onSubmit}>

            <input 
                onChange={onInputChange}
                type="text" 
                placeholder="Buscar Gifs"
                value={inputValue}

            />

        </form>
        
    )
}