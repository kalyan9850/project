import { createSlice } from "@reduxjs/toolkit";
const initialState={
    task:[],
    updatedtask:[]
}
export const TodoSlice = createSlice(
    {
        name:"Todolist",
        initialState,
        reducers:{
            add:(state,action)=>{

                // if(text.trim!==''){}
                state.task.push(action.payload)
                // if(state.task.push(action.payload)){
                //     text==null;
                // }
                console.log(action.payload);
            },
            clear:(state,action)=>{
                state.task.pop(action.payload.lenght-1)
                
                console.log(action.payload);

            },


            edit:(state, action) => {
              
            },
            
            
            
            

            
        }
    }
)

export const {add,clear,edit} = TodoSlice.actions

export default TodoSlice.reducer

