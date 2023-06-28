import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../TopBar/TopBar";

export default function Layout({children}){
     return (
          <>
          <TopBar></TopBar>
          <Header></Header>
          <main className="layout">{children}</main>
         <Footer></Footer>
          </>
     )
}