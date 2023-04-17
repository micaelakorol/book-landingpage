import "./App.css";
import Features from "./components/Features/Features";
import PresentationProduct from "./components/PresentationBookMark/PresentationProduct";
import AddABrowsers from "./components/Browsers/AddABrowsers";
import Header from "./components/Header/Header";
import Questions from "./components/Questions/Questions";
import ContainerContact from "./components/ContactUs/ContainerContact";
import Footer from "./components/Footer/Footer";
import HeaderMobile from "./components/Header/HeaderMobile";

function App() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <PresentationProduct />
      <Features />
      <AddABrowsers />
      <Questions />
      <ContainerContact />
      <Footer />
    </>
  );
}

export default App;
