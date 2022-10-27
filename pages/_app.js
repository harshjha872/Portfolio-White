import "../styles/globals.css";
import SideBar from "../components/SideBar/SideBar";
import Navbar from "../components/Navbar/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <SideBar />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
