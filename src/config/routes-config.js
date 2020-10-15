import {Home,MovieItem,PurchasePage, NotFoundPage} from '../screens/app'
import {Login,Registration} from '../screens/auth'

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    
  },
  {
    path: "/movieItem/:id",
    component: MovieItem,
    privateRoute:true
  },
  {
    path: "/purchasePage",
    component: PurchasePage
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/registration",
    component: Registration
  },
 
  {
    path: "*",
    component: NotFoundPage
  }
];
