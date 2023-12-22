import Header from "../components/Header";
import * as Sections from "../components/Sections";
import Footer from "../components/Footer";
import * as Button from "../components/Button";

const Home = () => {
  return (
    <main className="relative">
      <Button.WhatsApp />
      <Header />
      <Sections.Banner />
      <Sections.About />
      <Sections.Services />
      <Footer />
    </main>
  );
};

export default Home;
