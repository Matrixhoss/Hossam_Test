import { Button, Checkbox, Typography , Box, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/tasksSlice'
import EditTodoPopup from './EditTodoPopup';
import { addArchive } from '../redux/archiveSlice';

const TodoItem = ({item , isArchive}) => {
  const [open , setOpen] = useState(false)
  const {title , id , descripation , isChecked} = item;
  const dispatch = useDispatch()
  const toggleTodo = () => {
    dispatch(toggleTask(id))
  }
  const handelDeleteTodo = () => {
    dispatch(deleteTask(id))
  }

  const handelArchive = () => {
    dispatch(addArchive(item))
    dispatch(deleteTask(id))
  }
  return (
    <Box sx={{w:'100%'}}>
    <Accordion sx={{minWidth :'500px' , border :'1px solid #0000001f' , boxShadow:'none' , borderRadius :'10px'} }>
     
        <AccordionSummary
       
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Stack direction='row' alignItems = 'center'>
         <Checkbox onClick={toggleTodo} checked={isChecked}/>
          <Typography>{title}</Typography>
         </Stack>
        </AccordionSummary>
        <AccordionDetails>
        <Stack direction={'column'} spacing='3px'>
        <Typography fontWeight={'bold'} fontSize='14px'>
          Description:
          </Typography>
        <Typography>
           {descripation}
          </Typography>
        </Stack>
         {!isArchive && <Stack direction='row' alignItems={'flex-end'} justifyContent='flex-end' width='100%'>
          <Button  onClick={() => setOpen(true)}>Edit</Button>
          <Button  onClick={handelArchive}>Archive</Button>
          <Button variant='outlined' color='error' onClick={handelDeleteTodo}>Delete</Button>
          </Stack>}
          <Divider/>
<Stack mt='5px'>
  
<Typography fontSize={'11px'}>Created At : {item?.createdAt.toString()}</Typography>
          <Typography fontSize={'11px'}>Finithed At : {item?.finishedAt.toString()}</Typography>
        { isArchive &&  <Typography fontSize={'11px'}>Archive At : {item?.archiveAt.toString()}</Typography>}
</Stack>
        </AccordionDetails>
        
    </Accordion>
    <EditTodoPopup item={item} open={open} handleClose={() => setOpen(false)} />
    </Box>
  )
}

export default TodoItem
