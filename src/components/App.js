import Navbar from "./components/navbar";
import Categories from "./components/categories";
import Recommended from "./components/recommendeds";
import Topics from "./components/topics"; 
import Footer from "./components/footer";


function App() {
    return (
      <div>
        <Navbar />
        <Categories />
        <Recommended />
        <Topics />
        <Recommended />
        <Recommended />
        <Footer />
      </div>
    );
  }
export default App