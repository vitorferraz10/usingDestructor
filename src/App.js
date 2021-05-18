import React from "react";
import "./App.css";

function App() {
  const livros = [
    { nome: "Game of Thrones", ano: 1996 },
    { nome: "Clash of Kings", ano: 1996 },
    { nome: "Piratas do caribean", ano: 1996 },
  ];



  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
  
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
  
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  const dados = produtos.filter(
    ({ preco }) => +preco.replace("R$ ", "") >= 1500
  );


  return (
    <>

    <h1>Dados de livros consumido em arrays com MAP</h1>
      <ul>
        {livros.map(({ nome, ano }) => {
          return <li key={nome}>{nome + ": " + ano}</li>;
        })}
      </ul>
      <br/>

    <h1>Consumindo lista de produtos com MAP e FILTER</h1>
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>Preço: {preco}</p>
          <ul>
            {cores.map((cor) => (
              <li style={{ backgroundColor: cor, color: "#fff" }}>{cor}</li>
            ))}
          </ul>
        </div>
      ))}



    </>
  );
}

export default App;
