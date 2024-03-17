import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import KepalaSekolah from "./components/KepalaSekolah";
import News from "./components/News";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <KepalaSekolah />
      <News />
      <Footer />
    </div>
  );
}

export default App;
