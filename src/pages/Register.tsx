import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupWithEmailAndPass } from "../api/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleButtonPress = async () => {
    try {
      await SignupWithEmailAndPass(email, password);
      navigate("/login");
    } catch (e) {
      /* handle error */
      console.error("Login::error", e);
    }
  };

  return (
    <div>
      <Typography variant="h3">Register</Typography>

      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 800,
          margin: "auto",
          padding: 2,
          marginTop: 10,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          variant="outlined"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <Button
          variant="contained"
          onClick={handleButtonPress}
          name="sign-in-button"
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
};

export default Register;
