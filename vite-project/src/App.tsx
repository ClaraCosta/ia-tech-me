import React from 'react';
import './App.css';
import './index.css';
import { ItemSuggestion } from './components/ItemSuggestion';

const Sidebar: React.FC = () => {

  return (
    <div className="container">
      <div className="sidebar">

        <div className="logo">
          <h1>M<span>C</span></h1>
        </div>

        <details open className="suggestion">
          <summary>Tópicos sugeridos</summary>
          <ItemSuggestion title={"HTML"} />
          <ItemSuggestion title={"CSS"} />
          <ItemSuggestion title={"JavaScript"} />
          <ItemSuggestion title={"Typescript"} />
        </details>

        <details className="historic">
          <summary>Histórico</summary>
          <button>Java</button>
          <button>PHP</button>
        </details>


      </div> 
      </div>
     
)}


const TextBox: React.FC = () => {
  
  return (
    <>
     {/* <div className="content">
           <div className="box-home">
          <span>Olá, esse é o</span>
          <h1>teach<span>.me</span></h1>
          <p>
            Estou aqui para te ajudar nos seus estudos. Selecione um dos tópicos sugeridos ao lado, ou digite um tópico que deseja estudar para começarmos.
          </p>
        </div> */}


        <div className = "box-input">
          <textarea placeholder="Insira o texto que deseja estudar..." />

          <button>Enviar Pergunta</button>
        </div>
      </>
)}


const BoxChat: React.FC = () => {

    return (
      <>
        <div className="box-chat">
          <h1>Você está estudando sobre <span>HTML</span></h1>

          <div className="question">
            <img src="./assets/question-icon.svg"/>Pergunta
            <p>Claro! Aqui está a pergunta simulada: "Como você descreveria o seu conhecimento e experiência com HTML? Você poderia fornecer um exemplo de um projeto em que utilizou HTML e como isso impactou positivamente o resultado final?" Aguardo a sua resposta para poder fornecer feedback!</p>
          </div>

          <div className="answer">
            <h2>Sua resposta</h2>
            <p>Tenho um conhecimento sólido em HTML. Já construí vários sites.</p>
          </div>

          <div className="feedback">
            <h2>Feedback teach<span>.me</span></h2>
            <p>Ótimo! Parece que você tem uma boa experiência com HTML e construiu vários sites. É importante sempre destacar a prática e os projetos realizados durante uma entrevista de emprego. No entanto, vale ressaltar que seria interessante fornecer um exemplo específico de um projeto em que você utilizou HTML e como suas habilidades impactaram positivamente o resultado final. Isso pode ajudar a destacar suas habilidades de forma mais concreta e transmitir confiança ao entrevistador. Espero que esse feedback seja útil e esteja 25 à disposição para mais perguntas ou informações adicionais.</p>
            <div className="actions">
              <button>Estudar novo tópico</button>
            </div>
          </div>

        </div>
  
  </>
)}


const Footer: React.FC = () => {
  
  return(
    <>
        <div>

          <footer className="box-footer">
            <p>Teach<span>.me</span></p>
          </footer>

        </div>
    </>
  )}

const App: React.FC = () => (
  <div className="app-container">
    <Sidebar />
    <div className="main-content">
      <BoxChat />
      <TextBox />
      <Footer />
    </div>
  </div>
);

export default App;
  
{/* export { Sidebar, TextBox, BoxChat, Footer}; */}

