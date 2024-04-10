import {HashRouter, Route, Routes} from "react-router-dom";
import {Layout} from "../layout";
import {HomePage} from "../../pages/home";
import {CartPage} from "../../pages/cart";
import {ErrorPage} from "../../pages/404";
import {ScrollReset} from "../../shared/utils";

export const AppRouter = () => {
  return (
    <HashRouter basename='/'>
      <ScrollReset/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='cart' element={<CartPage/>}/>
        </Route>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </HashRouter>
  )
}