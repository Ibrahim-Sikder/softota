import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../TopBar/TopBar";

export default function Layout({children}){

     return (
          <>
          {/* <TopBar></TopBar>
          <Header></Header>
          <Footer></Footer> */}
          <main className="layout">{children}</main>
         
          </>
     )
}