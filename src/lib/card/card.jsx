
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { MyContext } from '../../mycontext';

function ProductCard({title,img,price,id}){

  const {context,setContext} = useContext(MyContext)

  const handleCart=()=>{

    if(context.includes(id)){

      let filt = context.filter((e)=>{

        return e!=id

      })

      setContext(filt)

    }else{

      setContext([...context,id])

    }

  }

  return(
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 260 }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
        <Typography><CurrencyRupeeIcon/>{price}</Typography>
        <Button size="small" 
        onClick={handleCart}
        >{context.includes(id)?'Remove From Card':'Add To Card'}</Button>
        </Box>
      </CardContent>
    </Card>
    
    </>
  )

}

export default ProductCard