
import { createSlice } from "@reduxjs/toolkit";
import { toFormData } from "axios";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        getTasks :  (state, action)=>{
            return localStorage.tasks ? JSON.parse(localStorage.tasks): state
           
        },
        addTask: (state, action)=>{

            const newTask = {
                id: Math.random(1000),
                title: action.payload.title,
                description : action.payload.descripation,
                createdAt : new Date(),
                archiveAt : '',
                finishedAt :'',
                isChecked : false,
            }
            state.push(newTask);
            localStorage.setItem('tasks' , JSON.stringify(state))
        },
        deleteTask: (state, action)=>{
            const newState = state.filter((item) => item.id !== action.payload);
            localStorage.setItem('tasks' , JSON.stringify(newState))
            return newState
        },
        
        toggleTask :(state , action) =>{
            const  id  = action.payload
            const newState =  state.map((todo) => {
              if (todo.id !== id) return todo
      
              return {
                ...todo,
                finishedAt : !todo.isChecked ? new Date() :'',
                isChecked: !todo.isChecked,
                
              }
            })

            localStorage.setItem('tasks' , JSON.stringify(newState))
            return newState
        },
        editTask :(state , action) =>{
            const  id  = action.payload.id
            const newState = state.map((todo) => {
              if (todo.id !== id) return todo
      
              return {
                ...action.payload
              }
            })
            localStorage.setItem('tasks' , JSON.stringify(newState))
            return newState
        }
    }
});

export const {addTask, deleteTask , toggleTask ,editTask , getTasks} = tasksSlice.actions;

export default tasksSlice.reducer