import Feedback from "./components/user/feedback";
import Footer from "./components/user/footer";
import Hero from "./components/user/hero";
import NavigationBar from "./components/user/navigation_bar";
import Team from "./components/user/team";
import Tujuan from "./components/user/tujuan";

const Home = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Hero></Hero>
      <Tujuan></Tujuan>

      <Team></Team>

      <Feedback></Feedback>
      <Footer></Footer>
    </>
  );
};

export default Home;
