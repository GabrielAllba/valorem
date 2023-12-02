import Footer from "./components/user/footer";
import Hero from "./components/user/hero";
import NavigationBar from "./components/user/navigation_bar";
import Tujuan from "./components/user/tujuan";
import Feedback from "./components/user/feedback";

const Home = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Hero></Hero>
      <Tujuan></Tujuan>
      <Feedback></Feedback>
      <Footer></Footer>
    </>
  );
};

export default Home;
