import {Home,Item,PurchasePage, NotFoundPage} from '../screens/app'
import {Login,Registration} from '../screens/auth'

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    
  },
  {
    path: "/Item",
    component: Item,
    privateRoute:true
  },
  {
    path: "/PurchasePage",
    component: PurchasePage
  },
  {
    path: "/Login",
    component: Login
  },
  {
    path: "/Registration",
    component: Registration
  },
 
  {
    path: "*",
    component: NotFoundPage
  }
];
