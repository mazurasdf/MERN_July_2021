import React, { useState } from "react";

const BigForm = (props) => {
    const [flavor, setFlavor] = useState("");
    const [sauce, setSauce] = useState("Hot Fudge");
    const [topping, setTopping] = useState("Crushed Oreos");
    const [whipped, setWhipped] = useState(false);
    const [flavorError, setFlavorError] = useState("");
    const [sauceError, setSauceError] = useState("");
    const [toppingError, setToppingError] = useState("");
    const [whippedError, setWhippedError] = useState("");

    const handleFlavor = (event) => {
        setFlavor(event.target.value);

        if(event.target.value.length < 4){
            setFlavorError("You need at least 4 characters!");
        }
        else{
            setFlavorError("");
        }
    }

    return(
        <div>
            <h1>hey it's me, the form!</h1>

            <form>
                <div className="form-group">
                    <label>Ice Cream Flavor:</label>
                    <input type="text" className="form-control" onChange={handleFlavor}/>
                    <span className="alert-danger">{flavorError}</span>
                </div>

                <div className="form-group">
                    <label>Select Sauce</label>
                    <select className="form-select" onChange={(event)=>setSauce(event.target.value)}>
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
                    <select className="form-select" onChange={(event)=>setTopping(event.target.value)}>
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
                    <input type="checkbox" className="form-check-input" onChange={(event)=>setWhipped(event.target.checked)}/>
                    
                    <label className="form-check-label">Whipped cream?</label>
                </div>

                <input type="submit" className="btn btn-lg btn-primary"/>
            </form>
        </div>
    )
}

export default BigForm;