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
// import { makeStyles } from '@mui/styles/makeStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green, orange } from '@mui/material/colors'
import 'fontsource-roboto'
import  { Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'



const theme = createTheme({
  typography: {
    h2: {
      fontSize: 50,
      marginBottom: 15,
    }
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[800],
    },
  },
})

// const useStyles = makeStyles(() => ({
//   background: 'linear-gradient(45deg, #333, #999)',
//   border: 0,
//   borderRadius: 15,
//   color: 'white',
//   padding: '0 30px',
// }))

// function ButtonStyled() {
//   // const classes = useStyles()

//   return <Button className={classes.root}>Test Styled Button</Button>
// }

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
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label='Testing Checkbox'
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl'>
        <div className='App'>
          <header className='App-header'>
            <AppBar color='secondary'>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variation='h6'>MUI Themeing</Typography>
                <Button style={{color: 'black'}}>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant='h2' component='div'>
              Welcome to MUI
            </Typography>
            <Typography variant='subtitle1'>
              Learn how to use Material UI
            </Typography>
            {/* <ButtonStyled /> */}

            <Grid container spacing={2} justifyContent='center'>
              <Grid item xs={12} md={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>

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
      </Container>
    </ThemeProvider>
  )
}

export default App
