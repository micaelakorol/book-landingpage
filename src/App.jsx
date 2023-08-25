import "./App.css";
import Header from './components/Navigation/Header/Header'
import HeaderMobile from './components/Navigation/Header/HeaderMobile'
import Features from './components/SectionsLanding/Features/Features'
import AddABrowsers from './components/SectionsLanding/CardBrowser/AddABrowsers'
import Questions from './components/SectionsLanding/Questions/Questions'
import ContainerContact from './components/SectionsLanding/InputEmail/ContainerContact'
import Footer from './components/Footer/Footer'
import PresentationProduct from "./components/SectionsLanding/PresentationBookMark/PresentationProduct";
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
