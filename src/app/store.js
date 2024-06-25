import {configureStore} from '@reduxjs/toolkit'; //@reduxjs = core redux se aya he
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer 
    // reducer yahan pe store k sath connect hogya he,ab store ko reducer ki addTodo aur removeTodo ki values ko access mil gya he
}); // yahan values as object{} hi pass hon gi