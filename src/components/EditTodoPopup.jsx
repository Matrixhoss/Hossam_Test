import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import TodoForm from './TodoForm'

const EditTodoPopup = ({open , handleClose , item}) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth='lg' >
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TodoForm defaultValues={item} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditTodoPopup
