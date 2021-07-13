import React, { useState } from "react";

const Form = (props) => {
    const [form, setForm] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.setCharacters([
            ...props.characters,
            {
                name: form,
                isGood: true,
                powers: []
            }
        ])
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <input className="form-control mb-1" type="text" placeholder="add character name" onChange={(event)=>setForm(event.target.value)} />
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Form;