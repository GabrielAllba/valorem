import Footer from "./components/user/footer";
import Hero from "./components/user/hero";
import NavigationBar from "./components/user/navigation_bar";
import Tujuan from "./components/user/tujuan";

const Home = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Hero></Hero>
      <Tujuan></Tujuan>
      <Footer></Footer>
    </>
  );
};

export default Home;
