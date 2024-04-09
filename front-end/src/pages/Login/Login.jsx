import './Login.css'
import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Lock, Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from '../../services/auth'

const Login = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [errorMessage, setErorrMesage] = useState("");

  const navigate = useNavigate('/')

  const onLogin = async () => {
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      if (!error?.response) {
        setErorrMesage("No response from server");
      } else if (email === '' || password === '') {
        setErorrMesage("Missing Email or Password");
      } else {
        setErorrMesage("Email or Password incorrect");
      }
    }
  }

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "primary.bg", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Card sx={{ maxWidth: "500px", textAlign: "center", backgroundColor: "secondary.main", color: "#fff" }} raised>
          <CardHeader title="Hey Welcome Back" />
          <p className={errorMessage ? "errMsg" : "offscreen"}>{errorMessage}</p>
          <CardContent>
            <TextField
              id="email"
              label="Email"
              type="email"
              value={email}
              required
              className='input-border'
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputProps={{
                style : { color: "#fff"},
                startAdornment: (
                  <InputAdornment>
                    <Icon sx={{ mr: 1 }}>
                      <Email />
                    </Icon>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: { color: "rgb(255, 255, 255, 0.7)" },
              }}
            />
            <TextField
              id="password"
              label="Password"
              type={isPassVisible ? "text" : "password"}
              value={password}
              required
              className='input-border'
              variant="outlined"
              margin="dense"
              fullWidth={true}
              InputProps={{
                style : { color: "#fff"},
                startAdornment: (
                  <InputAdornment>
                    <Icon sx={{ mr: 1 }}>
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
              InputLabelProps={{
                style: { color: "rgb(255, 255, 255, 0.7)" },
              }}
            />
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "flex-end", padding: "15px" }}>
          <Link to="/signup">
            <Button sx={{ color: "#fff" }}>Sign Up</Button>
          </Link>
          <Button variant="contained" onClick={() => onLogin()}>
            Login
          </Button>
        </CardActions>
        </Card>
    </Box>
  );
};

export default Login;
