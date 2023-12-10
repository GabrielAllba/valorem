import Feedback from './components/user/feedback';
import Footer from './components/user/footer';
import Hero from './components/user/hero';
import NavigationBar from './components/user/navigation_bar';
import Tujuan from './components/user/tujuan';
import Team from './components/user/team';

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
