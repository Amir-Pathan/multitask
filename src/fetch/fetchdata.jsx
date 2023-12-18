import axios from "axios"
import { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";



function DisplayFetchData(){


  let [isLoading,setIsLoading] = useState(true)

  const [data,setData] = useState([])

  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{

    setData(res.data)

    console.log(res.data);

    setIsLoading(false)

    })

  },[])

  const heads= ['UserId','Id',"Title","Body"]



  return(
    <Container sx={{marginTop:'12px'}}>
      {
        isLoading?
        <h1></h1>
        :
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
           <TableHead>
               <TableRow>
                {
                  heads.map((e,i)=>{

                     return <TableCell align="center" key={i}>{e}</TableCell>

                  })
                }
               </TableRow>
           </TableHead>
           <TableBody>
          {data.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.userId}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
          </Table>
        </TableContainer>
      }
    </Container>
  )


}

export default DisplayFetchData