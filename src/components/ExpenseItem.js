import React, {useContext } from 'react';
import {TiDelete} from 'react-icons/ti';
import {AppContext} from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }
        dispatch({
            type: 'DEC_EXPENSE',
            payload: expense,
        })
    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button 
                    onClick={event => increaseAllocation(props.name)}
                    style={{
                        backgroundColor: "#2E8B57",
                        border: "none",
                        borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                        fontSize: "25px",
                        color: "#FFFFFF",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    +
                </button>
            </td>
            <td>
                <button 
                    onClick={event => decreaseAllocation(props.name)}
                    style={{
                        backgroundColor: "#880000",
                        border: "none",
                        borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                        fontSize: "25px",
                        color: "#ffffff",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    −
                </button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
    
};

export default ExpenseItem;
