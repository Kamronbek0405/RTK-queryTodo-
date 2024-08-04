import React from 'react'
import { useDeleteTodoMutation, useEditTodoMutation } from '../redux/service/todo-api'
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const TodoCard = ({title, description, age,  id}) => {
   
    const [deleteTodo] = useDeleteTodoMutation()
    const [editTodo] = useEditTodoMutation()
    const deleteItem = () =>{
        deleteTodo(id)
        toast("Malumot ochirilmoqda...")
    }

    const editItem =() =>{
      const newData = prompt("Ismingizni kiriting")
      const newDescription = prompt("Familyangizni kiting")
      const newAge = Number(prompt("Yoshingizni kiriting"))
      editTodo({id ,title:newData, description: newDescription, age: newAge })
      toast("malumot tahrirlandi...")
    }
  return ( 
    <div className='w-[400px] h-[200px] rounded-xl flex items-center justify-center flex-col bg-white mt-2'>
        <h1 className=' text-xl font-bold'>Name: {title}</h1>
        <p className='py-3'>Lastname: {description}</p>
        <span className='font-bold'>age {age}</span>
        <div className='mt-4 '>
          <button className='w-[150px] h-[50px] bg-red-600 rounded-xl font-medium hover:bg-transparent hover:border-2 hover:border-solid hover:border-red-600 hover:text-red-500 text-lg text-white' onClick={() => deleteItem(id) }>delete</button>
          <button className='w-[150px] h-[50px] bg-green-600 ml-3 rounded-xl font-medium hover:bg-transparent hover:border-2 hover:border-solid hover:border-green-600 hover:text-green-500 text-lg text-white' onClick={editItem }>edit</button>
        </div>
    </div>
  )
}
