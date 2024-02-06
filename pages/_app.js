import "../styles/globals.css";
import SideBar from "../components/SideBar/SideBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <SideBar /> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
