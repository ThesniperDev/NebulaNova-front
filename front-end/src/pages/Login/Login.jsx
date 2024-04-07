import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Lock, Email, Visibility, VisibilityOff } from "@mui/icons-material";

import { useState } from "react";
//import { login } from '../../services/auth'

const Login = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({
    error: false,
    message: "",
  })

  const [password, setPassword] = useState("")

  const validateEmail = ( email ) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)

  }

  const handleSubmit = () => {
    validateEmail(email) 
    ? setEmailError({ error: false , message:""})
    : setEmailError({ error: true, message: "Incorrect email format"})
  }

  return (
    <>
      <Container sx={{display: "flex", flexDirection: "column", textAlign: "center", padding:"18px"}}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <h1>HEY</h1>
            <h3>Welcome back</h3>
            <TextField
              id="email"
              label="Email"
              type="email"
              value={email}
              required
              variant="outlined"
              margin="dense"
              fullWidth={true}
              helperText={emailError.message}
              error={emailError.error}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <Icon sx={{ mr: 2 }}>
                      <Email />
                    </Icon>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              type={isPassVisible ? "text" : "password"}
              value={password}
              required
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <Icon sx={{ mr: 2 }}>
                      <Lock />
                    </Icon>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={() => {
                        setIsPassVisible((oldState) => !oldState);
                      }}
                    >
                      {isPassVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="primary" fullWidth={true} onClick={() => handleSubmit()}>
              <h3>Login</h3>
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Login;
