import {createContext , useContext } from "react"

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo : "todo msg",
            completed : false,
        }
    ],
    addTodo : (todo) => {}, 
    deleteTodo : (id) => {},
    updateTodo : (id , todo) => {},
    togglecomplete : (id) => {}
          
})
export const TodoProvider = TodoContext.Provider

export const useTodo = () =>{
    return useContext(TodoContext) 
}
