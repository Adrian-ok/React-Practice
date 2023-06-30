import React, { useEffect, useState } from 'react'
import { useTask } from '../hooks/useTask'
import { useNavigate, useParams } from 'react-router-dom'

export const TaskForm = () => {

  const { task, addTask, updateTask } = useTask()
  const [error, setError] = useState(false)
  const [tasks, setTasks] = useState({id:'', name:'', detail:''})
  const params = useParams()
  const navigate = useNavigate()

  const handleChange = (e) =>
  setTasks({ ...tasks, [e.target.name]: e.target.value.toUpperCase() });

 useEffect(() => {
    const taskEdit = task.find(t => t.id === params.id)

    if(taskEdit){
      // console.log(taskEdit.id, taskEdit.name, taskEdit.detail)
      setTasks({
        id: taskEdit.id,
        name: taskEdit.name,
        detail: taskEdit.detail
      })
    }
 }, [])
 
  const submit = (event) => {
    event.preventDefault()
    // const fields =  Object.fromEntries(new window.FormData(event.target))
    const { name, detail } = tasks

    if(name.trim() || detail.trim() != ''){
      if(!tasks.id){
        addTask({
          id: window.crypto.randomUUID(),
          name: tasks.name.toUpperCase(),
          detail: tasks.detail.toUpperCase(),
          complete: false
        })
      }
      else {
        updateTask(tasks)
      }

      setError(false)
      navigate('/')
    }
    else{
      setError(true)
    }
  }

  return (
    <div className='mx-auto max-w-6xl sm:px-2 sm:py-4 lg:px-2 mt-10'>
      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold mb-2 dark:text-white'>Task Form 📝</h2>

        <form className='w-full max-w-sm' onSubmit={submit}>
          <div className='mb-4'>
            <label htmlFor='UserEmail' className='block text-md font-medium text-gray-700 dark:text-gray-300'>
              Name
            </label>

            <input
              type='text'
              value={tasks.name}
              onChange={handleChange}
              name='name'
              placeholder='Go to the supermarket!'
              className=' w-full h-10 px-2 rounded-md border-gray-200 shadow-sm sm:text-sm dark:bg-gray-50'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='UserEmail' className='block text-md font-medium  text-gray-700 dark:text-gray-300'>
              Detail
            </label>

            <textarea
              rows={4}
              value={tasks.detail}
              onChange={handleChange}
              name='detail'
              placeholder='buy: juice, candies and chocolate...'
              className='w-full h-40 p-2 resize-none rounded-md border-gray-200 shadow-sm sm:text-sm dark:bg-gray-50'
            />
          </div>

          {error === true ? <p className='text-red-500 text-center mb-4'>Complete all fields!</p> : <></>}

          <div className='flex justify-center '>
            <button className='bg-blue-400 px-4 py-2 hover:bg-blue-600 rounded-md dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:text-white'>
             {tasks.id ? "Update Task" : "Create Task"}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
