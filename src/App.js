import React, { useState } from 'react'
import Todos from './Todos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { Button, createTheme } from '@mui/material'
import WeatherPage from './WeatherPage'

const App = () => {
    const [theme , setTheme] = useState(false)
     const light =createTheme({
        palette: {
          mode: 'light',
        },
      });
      
       const dark = createTheme({
        palette: {
          mode: 'dark',
          background: {
            default: '#000000',
          },
        },
        
        
      });
    
      
  return (
   <ThemeProvider theme={ theme ? dark : light}>
    <BrowserRouter>
    <Button onClick={() => setTheme(!theme)}>Change Theme</Button>
      <Routes>
        <Route path="/" element={<Todos />}></Route>
        <Route path="/weather" element={<WeatherPage />}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
   
  )
}

export default App
