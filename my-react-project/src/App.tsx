import Contact from "./domain/components/Contact";
import Decoration from "./domain/components/Decoration";
import Explanation from "./domain/components/Explanation";
import Footer from "./domain/components/Footer";
import Header from "./domain/components/Header";
import Nav from "./domain/components/Nav";
import "./styles/index.css";
function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      {/* <Decoration /> */}
      <Explanation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
