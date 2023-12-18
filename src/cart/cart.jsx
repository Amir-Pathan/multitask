import { useContext, useEffect, useState } from "react"
import { MyContext } from "../mycontext"
import { productsList } from "../productlist"
import { Container, Typography,Box,Grid } from "@mui/material"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Grade } from "@mui/icons-material";
import ProductCard from "../lib/card";


function Cart(){

  const {context} = useContext(MyContext)

  const [cartItem,setCartItem] = useState([])

  const [subTotalCart,setSubTotal] = useState(0)

  useEffect(()=>{


    let cart=[]

    let subTotal= 0;

    context.forEach(element => {

      let index = productsList.findIndex((i)=>{

        return i.id===element

      })

      subTotal+=productsList[index].price

      cart.push(productsList[index])

      
    });


   setCartItem(cart)

   setSubTotal(subTotal)

  },[context])

  return(
    <>
       {

          context.length>0?
          <Container>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:"space-around"}}>
              <Typography>No Of Products {context.length}</Typography>
              <Typography>Sub_Total : <CurrencyRupeeIcon/>{subTotalCart}</Typography>
            </Box>
            <Grid container item xs={12} md={12} gap={0}>
              {
                cartItem.map((p,i)=>{

                  return <Grid item xs={12} md={4} key={i}>
                    <ProductCard
                    title={p.title}
                    img={p.imgUrl}
                    price={p.price}
                    id={p.id}
                    />
                  </Grid>

                })
              }
            </Grid>
          </Container>
          :<Typography align='center'>Cart is Empty</Typography>

       }
    </>
  )

}

export default Cart