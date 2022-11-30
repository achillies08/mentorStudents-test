import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import renderContext from "./renderContext";

const Form = () => {
  const [word, setWord] = React.useState("");
  const {setAd} = React.useContext(renderContext)
  const handleChange = (event) => {
    setWord(event.target.value);
  };
  const handleSubmit = () => {
    let postData = {word}
    console.log(postData);

    axios({
      method: "post",
      data: postData,
      url: "http://localhost:5000/",
    })
      .then((res) => {
        // console.log(res.data);
        setAd(res.data[0])
      })
      .catch((err) => console.error(err));
  };
  return (
    <Box sx={{ p: "2%" }}>
      <Stack direction={"row"} justifyContent={"center"} spacing={0.5}>
        <TextField
          label="Search"
          fullWidth
          onChange={handleChange}
          placeholder={word}
          required={true}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default Form;
