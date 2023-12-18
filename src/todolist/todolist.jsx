import { Box, Button, Checkbox, Container, TextField, Typography } from "@mui/material"
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';


function TodoList(){

  const [todo,setTodo] = useState('')

  const [noOfCompletedTask,setNoOfCompletedTask] = useState(0)

  const [todos,setTodos] = useState([])

  const [update,setUpdate]= useState(0)

  const addTodo=()=>{

    let obj={
      isComplete:false,
      title:todo
    }

    let t =todos

    t.unshift(obj)

    setTodos(t)

    setTodo('')

  }

  const countCompleted=()=>{

    let filt = todos.filter((e)=>{

      return e.isComplete===true

    })

    setNoOfCompletedTask(filt.length)

  }

  const handelDelete=(i)=>{

     if(todos[i].isComplete===true) setNoOfCompletedTask(noOfCompletedTask-1)  
  
     let filt = todos.filter((_,index)=>{
     
        return i!=index

     })

     setTodos(filt)

     

  }

  return(
    <Container sx={{marginTop:'10px'}}>
      <Box sx={{display:'flex',flexDirection:"row"}}>
        <TextField
        sx={{width:'80%'}}
        value={todo}
        onChange={(e)=>{
          setTodo(e.target.value)
        }}
        label='Add Todo'
        size="small"
        variant="outlined"
        fullWidth
        />
        <Button disabled={todo.length===0}
        onClick={addTodo}
        >
          Add Todo
        </Button>
      </Box>
      <Box>
        <Box sx={{display:"flex",flexDirection:'row',justifyContent:"space-evenly"}}>
          <Typography>Total Task : {todos.length}</Typography>
          <Typography color={'green'}>Completed Task : {noOfCompletedTask}</Typography>
        </Box>
        {
          todos.map((t,i)=>{

            return <Box key={i} sx={{display:'flex',flexDirection:'row',alignItems:"center",width:'400px',justifyContent:'space-between'}}>
             <Box sx={{display:'flex',flexDirection:'row',alignItems:"center"}}>
              <Checkbox checked={t.isComplete}
              onChange={(e)=>{

                todos[i].isComplete=Boolean(e.target.checked);

                countCompleted()

                setUpdate(update+1)
                setTodos(todos)

              }}
              />
              <Typography>{t.title}</Typography>
              </Box>
              <Box>
                <DeleteIcon 
                onClick={()=>handelDelete(i)}
                />
              </Box>
            </Box>

          })
        }
      </Box>
    </Container>
  )

}

export default TodoList