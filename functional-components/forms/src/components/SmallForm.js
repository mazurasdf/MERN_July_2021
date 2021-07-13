import React, { useState } from "react";

const SmallForm = (props) => {
    const [form, setForm] = useState({
        iceCream: "",
        sauce: "Hot Fudge",
        topping: "Crushed Oreos",
        whipped: false,
        name: ""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const lengthValidator = (input, length) => {
        return input.length > length;
    }

    const allValid = () => {
        return lengthValidator(form.name, 8) && lengthValidator(form.iceCream, 4);
    }

    return(
        <div>
            <h1>hey it's me, the form!</h1>

            <form>
                <div className="form-group">
                    <label>Sundae Name:</label>
                    <input name="name" type="text" className="form-control" onChange={onChangeHandler}/>
                    {!lengthValidator(form.name, 8) && form.name.length !== 0 && <span className="alert-danger">You need at least 8 characters!</span>}
                </div>

                <div className="form-group">
                    <label>Ice Cream Flavor:</label>
                    <input name="iceCream" type="text" className="form-control" onChange={onChangeHandler}/>
                    {!lengthValidator(form.iceCream, 4) && form.name.length !== 0 && <span className="alert-danger">You need at least 4 characters!</span>}
                </div>

                <div className="form-group">
                    <label>Select Sauce</label>
                    <select name="sauce" className="form-select" onChange={onChangeHandler}>
                        <option value="Hot Fudge">Hot Fudge</option>
                        <option value="Bourbon">Bourbon</option>
                        <option value="Caramel Drizzle">Caramel Drizzle</option>
                        <option value="Maple Syrup">Maple Syrup</option>
                        <option value="Almond Butter">Almond Butter</option>
                        <option value="Peanut Butter">Peanut Butter</option>
                        <option value="Strawberry Sauce">Strawberry Sauce</option>
                        <option value="Reese's Shell">Reese's Shell</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Select Topping</label>
                    <select name="topping" className="form-select" onChange={onChangeHandler}>
                        <option value="Crushed Oreos">Crushed Oreos</option>
                        <option value="PB Cup">PB Cup</option>
                        <option value="Cherries">Cherries</option>
                        <option value="Soda">Soda</option>
                        <option value="Sunflower Seeds">Sunflower Seeds</option>
                        <option value="Rainbow Spranks">Rainbow Spranks</option>
                        <option value="Crushed Peanuts">Crushed Peanuts</option>
                        <option value="Tapioca Balls">Tapioca Balls</option>
                    </select>
                </div>

                <div className="form-group">
                    <input name="whipped" type="checkbox" className="form-check-input" onChange={onChangeHandler}/>
                    
                    <label className="form-check-label">Whipped cream?</label>
                </div>

                {
                    allValid() ?
                        <input type="submit" className="btn btn-lg btn-primary"/> :
                        <input type="submit" className="btn btn-lg btn-primary" disabled/>
                }
                
            </form>
        </div>
    )
}

export default SmallForm;