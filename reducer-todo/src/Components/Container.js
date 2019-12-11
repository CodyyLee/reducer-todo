import React, {useState, useReducer} from "react";

import { reducer, initialState } from "../Reducers/reducer";

export default function Container() {

    const [ item, dispatch] = useReducer(reducer, initialState);
    const [ newItemText, setNewItemText] = useState("");

    const changeHandler = (e) => {
        setNewItemText(e.target.value);
    }

    return(
        <div>
            <div>
                <ul>
                    {item.map((item, index) => {
                        return <li key={index} id={item.id} onClick={() => {
                            dispatch({ type: "TOGGLE_SELECT", id: item.id})
                        }}>{item.item}</li>
                    })}
                </ul>
            </div>

            <div>
                <input type="text" name="item" id="item" placeholder="Add New Item..." value={newItemText} onChange={changeHandler}/>

                <div>
                    <button onClick={() => {
                        dispatch({ type: "ADD_ITEM", payload: newItemText})
                    }}>Add Item</button>
                    <button onClick={() => {
                        dispatch({ type: "REMOVE_COMPLETE"})
                    }}>Clear Completed</button>
                </div>
            </div>
        </div>
    )
}