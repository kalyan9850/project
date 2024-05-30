import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add  } from "../Slices/TodoSlice";
import { clear } from "../Slices/TodoSlice";
import { edit } from "../Slices/TodoSlice";
export default function Todo(){

    const[text,settext]=useState("");
    const[items,setItems] = useState([]);

    const added=useSelector((state)=>state.addtext.task)
    // const {index,newText}=useSelector((state)=>state.editedtext.task)
    const dispatch=useDispatch()
    // const[updatedtext,setudated]=useState("");


    // function display() {
    //     setItems(added);
    // }
   
//    console.log(items);

    function addlogic(){
         if(text.trim!==''){
           dispatch (add(text))
           settext('');
        }

    }
// console.log(added);

// let newArr=added;
// for(let i=0; i<=newArr.length;i++){
//     console.log(newArr);
// }

// let item = "";
// let newArr= added.map((ele,i)=>{
//     console.log(ele);
//     // item = ele;
//     setItems(ele);
  
// })
    
    
    return(
        <>
        <div className=" bg-red-300   h-[100px] pt-4 mt-12 flex align-baseline justify-center ">
        <input type="text" value={text} onChange={(e) => settext(e.target.value)} className="ml-45px border border-gray-600 w-[350px]  h-[40px]  "/>
        <button onClick={addlogic} className=" w-[100px] rounded-[100px]   ml-6 h-12 border border-gray-600 bg-orange-400  ">Add</button>
        </div>
        <div className=" bg-blue-950 h-[100px] pt-4 mt-12 flex align-baseline justify-center  ">
        <input type="text" value={added} className=" ml-45px border border-gray-600 w-[350px]  h-[40px]  " />
        <button  className="w-[100px] rounded-[100px]   ml-6 h-12 border border-gray-600 bg-orange-400">Edit</button>
        <button onClick={()=>dispatch(clear(text)) } className="w-[100px] rounded-[100px]   ml-6 h-12 border border-gray-600 bg-orange-400">delete</button>
        </div>
        {
            added.map((ele,i)=>{
                console.log(ele);
                // item = ele;
                // setItems(ele);
              
            })
        }
        {/* {items} */}
       
        </>
    )
}