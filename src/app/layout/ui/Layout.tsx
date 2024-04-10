import {Header} from "../../../widgets/header";
import {Outlet} from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header/>
      <main className='content'>
        <Outlet/>
      </main>
    </>
  )
}