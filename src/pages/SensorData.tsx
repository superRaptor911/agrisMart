import { Typography, Paper, TextField, Switch } from "@mui/material";
import { useState, useEffect } from "react";
import { api_readSensorData } from "../api/api";

const SensorData = () => {
  const [sensorData, setSensorData] = useState<any>();

  useEffect(() => {
    api_readSensorData().then((result) => setSensorData(result[0]));
  }, []);

  return (
    <div>
      <Typography variant="h3">My Farm Data</Typography>

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
        {sensorData && (
          <>
            <div>
              <span>Humidity</span>
              <TextField
                variant="outlined"
                disabled
                value={sensorData.humidity}
              />
            </div>
            <br />

            <div>
              <span>Moisture</span>
              <TextField
                variant="outlined"
                disabled
                value={sensorData.soil_moisture}
              />
            </div>
            <br />

            <div>
              <span>Temperature</span>
              <TextField
                variant="outlined"
                disabled
                value={sensorData.temperature}
              />
            </div>

            <div>
              <span>Sprinkler </span>
              <Switch />
            </div>
          </>
        )}
      </Paper>
    </div>
  );
};

export default SensorData;
