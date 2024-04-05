import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signup } from "../../services/auth"

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material'
import { AccountCircleOutlined, EmailOutlined, LockOutlined, VisibilityOffOutlined, VisibilityOutlined,  } from '@mui/icons-material'
import { blue } from '@mui/material/colors'

const SignUp = () => {
  const [visible, setVisible] = useState(false)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErorrMesage] = useState('')

  const navigate = useNavigate()

  const onSignUp = async () => {
    try {
      const res = await signup({ userName ,email, password })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', res.data.role)
      navigate('/')
    } catch (error) {
      setErorrMesage('Sorry, something happened')
    }
  }

  return (
    <Card sx={{ maxWidth: '700px', textAlign: 'center', backgroundColor: blue[50] }} raised>
      <CardHeader title='Sign Up' />
      <CardContent>
        <TextField
          label='Username'
          fullWidth
          margin='normal'
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <AccountCircleOutlined />
                </Icon>
              </InputAdornment>
            )
          }}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          label='Email'
          fullWidth
          margin='normal'
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <EmailOutlined />
                </Icon>
              </InputAdornment>
            )
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='Password'
          type={visible ? 'text' : 'password'}
          fullWidth
          margin='normal'
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <LockOutlined />
                </Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => setVisible((value) => !value)}
                >
                  {
              visible ? <VisibilityOutlined /> : <VisibilityOffOutlined />
            }
                </IconButton>
              </InputAdornment>
            )
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', padding: '15px' }}>
        <Button variant='outlined' color='secondary'>Home</Button>
        <Button variant='contained' onClick={() => onSignUp()}>Sign up</Button>
      </CardActions>
    </Card>
  )
}

export default SignUp