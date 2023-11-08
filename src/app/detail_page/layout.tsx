import NavigationBar from '../components/user/navigation_bar';
import Footer from '../components/user/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div>{children}</div>
            <Footer></Footer>
        </>
    );
}
