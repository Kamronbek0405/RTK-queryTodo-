
import './App.css'
import { useGetTodosQuery, useCreateTodoMutation } from './redux/service/todo-api'
import { TodoCard } from './components/todo-card';
import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {error, isLoading , data} = useGetTodosQuery()
  const [createTodo, {isLoading:newLoading}] = useCreateTodoMutation()
 
  const {handleSubmit, register, reset} = useForm()
  const submit = (data) =>{
    createTodo(data).unwrap(data).catch((error) =>{
      console.log(error);
    })
    reset()
  }
  const notify = () => toast("malumot kitildi")
 
 

  return (
    <div className='flex flex-col  items-center  h-[150vh] w-[100%] bg-[url("https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/952b0a8f1aec1d13ed2a9190b9de93ee.webp")] bg-no-repeat bg-cover'>
    <form  onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center  w-[450px] h-[280px] rounded-xl  bg-white gap-3 mt-20'>
      <input className='w-[300px] h-[50px] rounded-lg border-2 px-3 shadow-lg shadow-gray-200 border-gray-200 border-solid outline-gray-400' {...register("title")} type="text" required placeholder='ismingizni kiriting' />
      <input className='w-[300px] h-[50px] rounded-lg border-2 px-3 shadow-lg shadow-gray-200 border-gray-200 border-solid outline-gray-400' {...register("description")} type="text" required  placeholder='malumot kiriting' />
      <input className='w-[300px] h-[50px] rounded-lg border-2 px-3 shadow-lg shadow-gray-200 border-gray-200 border-solid outline-gray-400' {...register("age")} type="number" required  placeholder='yoshingiz kiriting' />
      <button className='w-[150px] h-[50px] bg-gray-400 rounded-xl text-white font-bold text-lg hover:bg-transparent hover:border-2 hover:border-gray-400 hover:text-gray-400' type='submit' onClick={notify}>send</button>
      <ToastContainer/>
    </form>
     <div className='w-[450px] mt-10 h-auto flex items-center justify-center'>
      {isLoading? <h1>Loading...</h1> : <div>
        {data.map((item) => <TodoCard key={item.id} {...item}/> )}
       
        </div>}
     </div>
    </div>
  )
}

export default App
