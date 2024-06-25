import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id: nanoid(), // id create krna ka tarika
                text: action.payload 
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload ) 
            //creates a new array that includes only those todo items whose id does not match action.payload
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions // actions se in addTodo aur removeTodo ki access mil jaye gi

export default todoSlice.reducer