import { Button, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask , editTask} from '../redux/tasksSlice'

const TodoForm = ({defaultValues , onAdd}) => {
    const [title , setTitle] = useState(defaultValues ? defaultValues.title : '')
    const [descripation , setDescripation] = useState(defaultValues ? defaultValues.descripation : '')

    const dispatch = useDispatch();
    const handleTodo = (data) => {

     defaultValues ? dispatch(editTask({  ...defaultValues ,title , descripation})) : dispatch(addTask({title , descripation}))
      setTitle('')
      setDescripation('')
    }

  return (
    <Stack direction='column' spacing='10px' minWidth='400px' mt={'20px'}>
        <TextField variant='outlined' label='Title' type='text' value={title} onChange={(e) =>setTitle(e.target.value)}   />
        <TextField multiline variant='outlined' label='Descripation'  type='text' rows='4' value={descripation} onChange={(e) =>setDescripation(e.target.value)}/>
        <Button variant='contained' onClick={handleTodo}>{defaultValues ? "Edit":"Add"}</Button>
    </Stack>
  )
}

export default TodoForm
