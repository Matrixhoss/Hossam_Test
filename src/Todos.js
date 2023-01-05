


import { useDispatch, useSelector } from 'react-redux';

import {  Divider, Stack, Typography } from '@mui/material';
import AddTodo from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { getTasks } from './redux/tasksSlice';
import { getArchive } from './redux/archiveSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const  Todos = () => {
  const [locationData , setLocationData] = useState()
  const [weather , setWeather] = useState()
  const todos = useSelector((state) => state.tasks)
  const archive = useSelector((state) => state.archive)
  const dispatch = useDispatch()
 useEffect(() => {
  dispatch(getTasks())
  dispatch(getArchive())
  getWeather()

 } , [])

 const getWeather = async () => {
  await  navigator.geolocation.getCurrentPosition(
    (c) => setLocationData({lat : c.coords.latitude , lon : c.coords.latitude})
  )
 }

 useEffect(() => {
  locationData && axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${locationData.lat}&lon=${locationData.lon}&appid=9f3e69d707455b75e3242269584f7059`).then((d) => setWeather(d.data.main.temp))
 } ,[locationData])


 const navigate = useNavigate();
 


  return (
    <Container sx={{mt :'20px'}}>
    <Stack width='100%' alignItems='flex-end' justifyContent='flex-end'>
    <Typography sx={{cursor : 'pointer'}} fontWeight={'bold'} onClick={() =>navigate('/weather')}>Current weather : {weather ? weather+" C" : 'Loading ...'}</Typography>
    </Stack>
    <Stack direction={'column'}>
      <Typography fontWeight='bold' fontSize='18px'>ToDos : </Typography>
      <Stack direction={'column'} alignItems='center' justifyContent='center' spacing={'5px'}>
       
        {todos &&  todos.length === 0 ? <Typography>No Todos to dispaly please add new one</Typography>: todos.map(todo => <TodoItem key={todo.id} item={todo}/>)}
      </Stack>

      <Divider sx={{my : '20px'}} />
      <Typography fontWeight='bold' fontSize='18px'>Add New : </Typography>
      <AddTodo/>

      <Typography fontWeight='bold' fontSize='18px'>Archive : </Typography>
      <Stack direction={'column'} alignItems='center' justifyContent='center' spacing={'5px'}>
        {archive &&  archive.length === 0 ? <Typography>No Todos Archive</Typography>: archive.map(todo => <TodoItem key={todo.id} item={todo} isArchive={true}/>)}
      </Stack>
   </Stack>
   </Container>
  );
}

export default Todos;
