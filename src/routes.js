import DisplayFetchData from "./fetch";
import Products from "./products/products";
import TodoList from "./todolist/todolist";
import Cart from "./cart";
import Home from "./home/home";
import AboutUs from "./about";
import ContactUs from "./contact";


export const routes=[
  {
    component:<TodoList/>,
    path:'/todoList'
  },
  {
    component:<DisplayFetchData/>,
    path:'/fetchData'
  },
  {
    component:<Products/>,
    path:'/products'
  },
  {
    component:<TodoList/>,
    path:'/card'
  },
  {
    component:<Cart/>,
    path:'/cart'
  },
  {
    component:<Home/>,
    path:'/'
  },
  {
    component:<AboutUs/>,
    path:'aboutUs'
  },
  {
    component:<ContactUs/>,
    path:'/contact'
  }
]