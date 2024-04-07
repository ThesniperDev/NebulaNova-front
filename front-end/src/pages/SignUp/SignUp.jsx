import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../services/auth";
import "./SignUp.css";

import { Box, Button, Card, CardActions, CardContent, CardHeader, Icon, IconButton, InputAdornment, TextField } from "@mui/material";
import { AccountCircleOutlined, EmailOutlined, LockOutlined, VisibilityOffOutlined, VisibilityOutlined, Info } from "@mui/icons-material";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [userName, setUserName] = useState("");
  const [validUser, setValidUser] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const [errorMessage, setErorrMesage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setValidUser(USER_REGEX.test(userName));
  }, [userName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErorrMesage("");
  }, [userName, email, password, matchPwd]);

  const onSignUp = async () => {
    const v1 = USER_REGEX.test(userName);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErorrMesage("Invalid Entry");
      return;
    }
    try {
      const res = await signup({ userName, email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      setUserName("");
      setEmail("");
      setPassword("");
      setMatchPwd("");
      navigate("/");
    } catch (error) {
      if (!error?.response) {
        setErorrMesage("No hay respuesta del servidor");
      } else if (error.response?.status === 409) {
        setErorrMesage("Email o Nombre de usuario cogidos");
      } else {
        setErorrMesage("Registro fallido");
      }
    }
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "primary.bg", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Card sx={{ maxWidth: "500px", textAlign: "center", backgroundColor: "secondary.main", color: "#fff" }} raised>
        <CardHeader title="Create your account" />
        <p className={errorMessage ? "errMsg" : "offscreen"}>{errorMessage}</p>
        <CardContent>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: "#fff", borderColor: "#fff" },
              startAdornment: (
                <InputAdornment>
                  <Icon>
                    <AccountCircleOutlined />
                  </Icon>
                </InputAdornment>
              ),
            }}
            onChange={(e) => setUserName(e.target.value)}
            InputLabelProps={{
              style: { color: "rgb(255, 255, 255, 0.7)" },
            }}
          />
          <div className={userName && !validUser ? "instructions" : "offscreen"}>
            <Icon>
              <Info fontSize="small" />
            </Icon>
            <p className="p-instructions">
              From 4 to 24 characters.
              <br />
              It must start with a letter.
              <br />
              Letters, numbers, and special characters allowed.
            </p>
          </div>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: "#fff" },
              startAdornment: (
                <InputAdornment>
                  <Icon>
                    <EmailOutlined />
                  </Icon>
                </InputAdornment>
              ),
            }}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              style: { color: "rgb(255, 255, 255, 0.7)" },
            }}
          />
          <div className={email && !validEmail ? "instructions" : "offscreen"}>
            <Icon>
              <Info fontSize="small" />
            </Icon>
            <p className="p-instructions">
              Gmail and Hotmail emails are allowed.
              <br />
              Must be .es or .com: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
          </div>
          <TextField
            label="Password"
            type={visible ? "text" : "password"}
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: "#fff" },
              startAdornment: (
                <InputAdornment>
                  <Icon>
                    <LockOutlined />
                  </Icon>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={() => setVisible((value) => !value)}>{visible ? <VisibilityOutlined /> : <VisibilityOffOutlined />}</IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{
              style: { color: "rgb(255, 255, 255, 0.7)" },
            }}
          />
          <div className={password && !validPwd ? "instructions" : "offscreen"}>
            <Icon>
              <Info fontSize="small" />
            </Icon>
            <p className="p-instructions">
              From 8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, and at least one number.
              <br />
              Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
          </div>
          <TextField
            label="Confirm Password"
            type={visible2 ? "text" : "password"}
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: "#fff" },
              startAdornment: (
                <InputAdornment>
                  <Icon>
                    <LockOutlined />
                  </Icon>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={() => setVisible2((value) => !value)}>{visible2 ? <VisibilityOutlined /> : <VisibilityOffOutlined />}</IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(e) => setMatchPwd(e.target.value)}
            InputLabelProps={{
              style: { color: "rgb(255, 255, 255, 0.7)" },
            }}
          />
          <div className={matchPwd && !validMatch ? "instructions" : "offscreen"}>
            <Icon>
              <Info fontSize="small" />
            </Icon>
            <p className="p-instructions">Must match the password field.</p>
          </div>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end", padding: "15px" }}>
          <Link to="/">
            <Button sx={{ color: "#fff" }}>Home</Button>
          </Link>
          <Button variant="contained" onClick={() => onSignUp()}>
            Sign up
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default SignUp;
