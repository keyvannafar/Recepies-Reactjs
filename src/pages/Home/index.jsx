import React from "react";
import RecipeList from "../../components/RecipeList";
import { Header, Footer, Navbar } from "../../components/layout";
import SearchByName from "../../components/Search/SearchByName";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="hero d-flex justify-content-center align-items-center">
        <SearchByName />
      </div>
      <div className="container my-5">
        <RecipeList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
