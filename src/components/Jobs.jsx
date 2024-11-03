import  { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Jobs = () => {
  const [data, setData] = useState();
  const [oneData, setOneData] = useState();

  useEffect(() => {
    axios
      .get("https://api-mern-kuto.onrender.com/jobs/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setData([]); // Set to an empty array or handle the error as needed
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      setOneData(data[Math.floor(Math.random() * data.length)]);
    }
  }, [data]); // This effect runs only when 'data' changes

  return (
    <div className="padding">
      <h2>Browse your recent job</h2>
      {oneData ? (
        <div className="container-fluid">
          <h3>{oneData.title}</h3>
        </div>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
          width="80vw"
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default Jobs;
