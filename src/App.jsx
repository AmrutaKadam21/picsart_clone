import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header.jsx";
import Hero1 from "./content/Hero1.jsx";
import Block from "./content/Block.jsx";
import Customer from "./content/Customer.jsx";
import Black from "./content/Black.jsx";
import Article from "./content/Article.jsx";
import Mobileweb from "./content/Mobileweb.jsx";
import Toolkit from "./content/toolkit.jsx";
import Story from "./content/Story.jsx";
import Footer from "./Footer/Footer.jsx";
import Price from "./content/Price.jsx";

function Home() {
  return (
    <>
      <Hero1 />
      <Block />
      <Customer />
      <Black />
      <Article />
      <Mobileweb />
      <Toolkit />
      <Story />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Price />} />
      </Routes>
    </>
  );
}

export default App;
