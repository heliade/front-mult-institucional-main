import React from "react";
import "./style.css";
import Main from "../Main";

const MainHome: React.FC = () => {
  return (
    <Main>
      <h1>Conheça nossos Livros</h1>
      <p>Nós oferecemos soluções inovadoras para melhorar a sua empresa.</p>
      <button className="cta-button"></button>
    </Main>
  );
};

export default MainHome;