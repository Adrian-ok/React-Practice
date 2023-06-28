import React from 'react'

export const TaskForm = () => {
  return (
    <div className='mx-auto max-w-6xl sm:px-2 sm:py-4 lg:px-2 mt-10'>
      <div class='flex flex-col items-center'>
        <h2 class='text-2xl font-bold mb-2 dark:text-white'>Task Form 📝</h2>

        <form class='w-full max-w-sm'>
          <div className='mb-4'>
            <label htmlFor='UserEmail' className='block text-md font-medium text-gray-700 dark:text-gray-300'>
              Name
            </label>

            <input
              type='text'
              id=''
              placeholder='Go to the supermarket!'
              className=' w-full h-10 px-2 rounded-md border-gray-200 shadow-sm sm:text-sm dark:bg-gray-50'
            />
          </div>

          <div className='mb-8'>
            <label htmlFor='UserEmail' className='block text-md font-medium  text-gray-700 dark:text-gray-300'>
              Detail
            </label>

            <textarea
              rows={4}
              id='UserEmail'
              placeholder='buy: juice, candies and chocolate...'
              className='w-full h-40 p-2 resize-none rounded-md border-gray-200 shadow-sm sm:text-sm dark:bg-gray-50'
            />
          </div>

          <div className='flex justify-center '>
            <button className='bg-blue-400 px-4 py-2 hover:bg-blue-600 rounded-md dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:text-white'>
              Add Task
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
