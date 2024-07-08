import { Typography } from '@mui/material';
import ErrorAlert from "./modals/ErrorAlert";
import SuccessAlert from './modals/SuccessAlert';
import './App.css'

function App() {

  return (
    <>
      <Typography variant='h3' sx={{color: 'customColors.violeta' }}>Hola river plate</Typography>
      <ErrorAlert />
      <SuccessAlert />
    </>
  )
}

export default App
