import React, { useState } from "react";
// import img from "./Images/img.svg";
import img from "../Images/img.jpg"; 





const Todo=()=>{

    const [inputData,setInputData]=useState("");
    const [items,setItems]=useState([]);

    const addItem=()=>{
            if(!inputData){

            }
            else{
                setItems([...items,inputData]);
                setInputData("");
            }
           
            }
    
    const deleteItem=(id)=>{
        console.log(id);
        const updatedItems=items.filter((ele,ind)=>{
            return ind!==id;
        });
        setItems(updatedItems);
    }

    const removeAll=()=>{
        setItems([]);
    }
    
    return (

        <>

            <div className="main_div">
                <div className="child-div">
                
                    <figure>
                        <img src={img} alt="todologo"/>
                        <figcaption>Add your List here👍</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍️Add Items..."
                            value={inputData}
                            onChange={
                                (e)=>setInputData(e.target.value)
                                }
                        />
                        <button onClick={addItem}>+</button>
                        
                    </div>

                    <div className="showItems">
                        {
                            items.map((ele,ind)=>{
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3 >{ele}</h3>
                                        <button onClick={()=>deleteItem(ind)}>-</button>
                                    </div>
                                )
                            })
                        }
                       
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="REMOVE ALL" onClick={removeAll}><span>CHECKLIST</span></button>

                    </div>

                   
                </div>
            </div>
        </>
    )

};

export default Todo;