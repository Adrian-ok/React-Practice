import React from 'react'
import { useGlobalState } from '../hooks/useGlobalState'

export function FormTransaction() {

  const { addTransaction, deleteTransaction } = useGlobalState()

  const handleAddPrice = (event) => {
    event.preventDefault()

    const fields = new window.FormData(event.target)
    const description = fields.get('description')
    const mount = fields.get('mount')
    
    addTransaction({
      id : window.crypto.randomUUID(),
      description,
      mount : +mount
    })
  }

  return (
    <div>
      <form onSubmit={handleAddPrice}>
        <input required type="text" name='description' placeholder='Descripcion' />
        <input required type="number" name='mount' placeholder='Monto' step={'00.01'}/>
        <button type="submit">cargar</button>
      </form>
    </div>
  )
}
