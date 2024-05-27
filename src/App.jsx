import Header from "./Page/Header/Header";
import Footer from "./Page/Footer/Footer";
import PageSlider from "./components/PageSlider";
// import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <PageSlider />
      {/* <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> */}
      <Footer />
    </>
  );
};

export default App;