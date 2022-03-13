import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'

function CheckboxExample() {
  const [checked, setChecked] = useState(true)

  return (
    <FormControlLabel 
      control={
        <Checkbox 
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />}
        label="Testing Checkbox"
    />
  )
}


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <TextField 
          variant='filled'
          color='secondary'
          type='email'
          placeholder='test@test.com'
        />
        <CheckboxExample />
        <ButtonGroup>
          <Button
            startIcon={<SaveIcon />}
            size='large'
            variant='contained'
            color='primary'
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            size='large'
            variant='contained'
            color='secondary'
          >
            Discard
          </Button>
        </ButtonGroup>

        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  )
}

export default App
