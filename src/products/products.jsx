import { Container } from "@mui/material"
import { productsList } from "../productlist"
import ProductCard from "../lib/card"
import Grid from "@mui/material/Grid"

function Products(){

  return(
    <Container>
      <Grid container item xs={12} md={12} gap={0}>
      {
        productsList.map((p,i)=>{

          return <Grid
          sx={{marginTop:'5px'}}
          key={i}
          item
          xs={12}
          md={4}
          >
            <ProductCard
            title={p.title}
            price={p.price}
            id={p.id}
            img={p.imgUrl}
            />
          </Grid>

        })
      }
      </Grid>
    </Container>
  )

}

export default Products