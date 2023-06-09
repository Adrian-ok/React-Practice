import React from 'react'
import { useTask } from '../hooks/useTask'
import { Link } from 'react-router-dom'

function TaskItem({ item, complete, deleteT }) {
  return (
    <div className='flex flex-col items-center md:flex-row justify-between mb-5 bg-zinc-300 rounded py-4 pl-4 dark:text-white dark:bg-slate-800'>
      <div className='sw-64 text-center mb-1'>
        <p>{item.name}</p>
      </div>
      <div className='w-80 text-center mb-1'>
        <p className="break-words">{item.detail}</p>
      </div>
      <div className='w-56 flex justify-around'>
        <button className='text-xl bg-zinc-500 rounded p-2'><Link to={`/edit/${item.id}`}>✏️</Link></button>
        <button onClick={deleteT} className='text-xl bg-red-600 rounded p-2'>🗑️</button>
        {item.complete ? <button onClick={complete} className='text-xl bg-emerald-600 rounded p-2'>✔️</button> : <button onClick={complete} className='text-md bg-blue-500 rounded p-2'>Done</button>}
      </div>
    </div>
  )
}

export const TaskList = () => {

  const { task, completeTask, deleteTask } = useTask()

  return (
    <>
      {task.length === 0 ?
        <div className='h-96 flex justify-center items-center'>
          <span className='text-xl font-semibold dark:text-white mr-2'>No Tasks yet,</span>
          <Link to='/addTask' className='text-xl font-semibold hover:font-bold hover:underline dark:text-white'>write a task here!</Link>
        </div> 
        :
        <div className='mx-auto max-w-6xl sm:px-2 sm:py-4 lg:px-2 mt-10'>
          {task.map(item => {
            return (
              <TaskItem key={item.id} item={item} complete={() => completeTask(item)} deleteT={() => deleteTask(item)} />
            )
          })}
        </div>
      }
    </>
  )
}
