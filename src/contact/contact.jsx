import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";

function ContactUs(){

  const initial={
    name:'',
    email:'',
    message:''
  }

  const initialErr={
    name:'',
    email:'',
    message:''
  }

  const [state,setState] = useState(initial)

  const [err,setErr] = useState(initialErr)

  const handleChange=(e,k)=>{

      setState(prev=>({
        ...prev,
        [k]:e
      }))

  }

  const errHandle=(e,k)=>{

    setErr(prev=>({
      ...prev,
      [k]:e
    }))

  }

  const handleSubmit=()=>{

    let valid = true;

    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!state.email.match(validEmail)){

      errHandle('please Enter valid Email Id','email')

      valid=false

   }else{

     errHandle('','email')

   }

    if(state.name.length<1){

       errHandle('please Enter Name','name')

       valid=false

    }else{

      errHandle('','name')

    }

    if(state.message.length<10){

      errHandle('please Enter message min 10 char','message')

      valid=false

   }else{

     errHandle('','message')

   }

   if(valid){

    alert('thank you your response recorted')

    setState(initial)

   }

  }

  return(
    <Box sx={{display:'flex',flexDirection:"row",width:'100%',justifyContent:'center',alignContent:"center",alignItems:'center'}}>
      <Box sx={{display:'flex',flexDirection:"column",width:'400px',gap:'10px'}}>
      <Typography align="center">Contact Us</Typography>
      <TextField
      label="Enter Name"
      value={state.name}
      variant="outlined"
      size="small"
      onChange={(e)=>handleChange(e.target.value,'name')}
      fullWidth
      />
      <Typography color='red'>{err.name}</Typography>
      <TextField
      label="Enter emailId"
      value={state.email}
      variant="outlined"
      size="small"
      onChange={(e)=>handleChange(e.target.value,'email')}
      />
      <Typography color='red'>{err.email}</Typography>
      <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          value={state.message}
          onChange={(e)=>handleChange(e.target.value,'message')}
        />
        <Typography color='red'>{err.message}</Typography>
        <Button variant="outlined" 
        onClick={handleSubmit}
        >Submit</Button>
        </Box>
    </Box>
  )

}

export default ContactUs