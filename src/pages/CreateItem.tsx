import { Button, Input, Paper, TextField, Typography } from "@mui/material";
import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_addItem } from "../api/api";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [file, setFile] = useState<File>();
  const navigate = useNavigate();

  const handleButtonPress = async () => {
    if (file && adminPass == "adminPass") {
      await api_addItem(name, price, file);
      navigate("/dahboard");
    }
  };

  const onFileSelected = (e: any) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <Typography variant="h3">Create Product</Typography>
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
          placeholder="item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          variant="outlined"
          placeholder="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <TextField
          variant="outlined"
          placeholder="Admin Password"
          type="password"
          value={adminPass}
          onChange={(e) => setAdminPass(e.target.value)}
        />

        <br />
        <input type="file" onChange={(e) => onFileSelected(e)} />

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

export default CreateItem;
