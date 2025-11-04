// Importação dos estilos e imagens
import "./App.css";
import fotoPerfil from "./assets/Bruno.jpeg";
import imgProjeto1 from "./assets/Projeto1.png";
import imgProjeto2 from "./assets/Projeto2.png";
import imgProjeto3 from "./assets/Projeto3.png";
import imgProjeto4 from "./assets/Projeto4.png";

// Importação de ícones e hooks
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function App() {
  // Estados para armazenar o nome e a mensagem do formulário de contato
  const [nome, setNome] = useState();
  const [mensagem, setMensagem] = useState();

  // Captura o valor digitado no campo "Nome"
  const ValorName = (event) => {
    setNome(event.target.value);
  };

  // Captura o valor digitado no campo "Mensagem"
  const ValorTexto = (event) => {
    setMensagem(event.target.value);
  };

  // Envia mensagem via WhatsApp utilizando o nome e a mensagem fornecidos
  const enviarWhats = (event) => {
    event.preventDefault;

    const telefone = "5548998410706";
    const texto = `Olá! meu nome é ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, "_blank");
  };

  // Abre o projeto correspondente conforme o ID informado
  const entrarProjetos = (idProjeto) => {
    if (idProjeto == 1) {
      const url = `https://usu-rios-cadastrados.vercel.app/`;
      window.open(url, "_blank");
    } else if (idProjeto == 2) {
      const url = `https://landing-page-ag-ncia-de-viagens.vercel.app/`;
      window.open(url, "_blank");
    } else if (idProjeto == 3) {
      const url = `https://lista-de-tarefas.vercel.app/`;
      window.open(url, "_blank");
    } else if (idProjeto == 4) {
      const url = `https://website-de-cat-logo-automotivo.vercel.app/`;
      window.open(url, "_blank");
    }
  };

  // Realiza o scroll suave até a seção informada
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Estrutura do componente principal
  return (
    <div className="container">
      {/* Seção de perfil */}
      <div className="profile">
        <img src={fotoPerfil} alt="" />
        <h1>Bruno dos Santos Pereira</h1>
        <h2>Desenvolvedor Front End</h2>
        <p>
          Front-end Developer focado em performance e <br />
          experiência do usuário
        </p>

        {/* Navegação principal com scroll suave */}
        <nav className="navegar-links">
          <li>
            <button
              onClick={() => scrollToSection("sobre")}
              className="menu-link"
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projetos")}
              className="menu-link"
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contatos")}
              className="menu-link"
            >
              Contatos
            </button>
          </li>
        </nav>

        {/* Links para redes sociais */}
        <div className="social-links">
          <a
            href="https://github.com/BrunoDevFront-end"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/devbrunosantos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="mailto:brunodsp.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>

      {/* Seção "Sobre mim" */}
      <div id="sobre" className="conteudo">
        <h2>Sobre mim </h2>
        <p>
          Sou Desenvolvedor Front-End, cursando o último semestre de Análise e
          Desenvolvimento de Sistemas. Tenho experiência na criação de
          interfaces modernas, responsivas e funcionais, sempre com foco em
          usabilidade, performance e boas práticas de desenvolvimento. Projetos
          em destaque: Sistema Full Stack de cadastro de usuários, desenvolvido
          com <span className="destaque">React</span>,{" "}
          <span className="destaque">Node.js</span> e MongoDB, com integração
          entre front-end (Vercel) e back-end (Render). Aplicativo de tarefas
          moderno e intuitivo, feito com React,{" "}
          <span className="destaque">Vite</span>,{" "}
          <span className="destaque">Bootstrap</span>,{" "}
          <span className="destaque">JavaScript</span>,{" "}
          <span className="destaque">HTML</span> e{" "}
          <span className="destaque">CSS</span>, priorizando praticidade e
          design responsivo. Landing page interativa construída com HTML5, CSS3
          e JavaScript, aplicando conceitos de responsividade e experiência do
          usuário. Website de catálogo de carros, desenvolvido com foco em{" "}
          <span className="destaque">UX/UI</span>, design adaptativo e
          implementação de boas práticas de front-end.
        </p>
        <p>
          Esses projetos autônomos me proporcionaram uma evolução significativa
          tanto técnica quanto profissional. Aprendi a lidar com desafios reais
          de desenvolvimento, desde a estruturação de aplicações completas até a
          otimização da experiência do usuário. Trabalhar de forma independente
          me fez aprimorar a capacidade de análise, resolução de problemas e
          organização de código, além de consolidar o domínio das principais
          tecnologias do ecossistema front-end. Essas experiências ampliaram
          minha visão sobre o ciclo de desenvolvimento e me prepararam para
          contribuir de forma eficiente e criativa em novos projetos e equipes.
        </p>
        <br />
      </div>

      {/* Seção de Projetos */}
      <section id="projetos" className="projetos">
        <h1>Projetos</h1>
        <div className="caixa-projetos">
          {/* Projeto 1 */}
          <div
            className="projetos-card"
            onClick={() => {
              entrarProjetos(1);
            }}
          >
            <img src={imgProjeto1} alt="Projeto1" className="img-Projeto1" />
            <div>
              <h3>Cadastro de Usuários</h3>
              <p>
                Projeto Full Stack de cadastro de usuários desenvolvido com
                React, Node.js e MongoDB. Front-end hospedado na Vercel e
                back-end no Render, totalmente integrados.
              </p>
            </div>
          </div>

          {/* Projeto 2 */}
          <div
            className="projetos-card"
            onClick={() => {
              entrarProjetos(2);
            }}
          >
            <img src={imgProjeto2} alt="Projeto2" className="img-Projeto1" />
            <div>
              <h3>Landing Page</h3>
              <p>
                landing page moderna e atrativa. utilizei HTML5 e CSS3 para
                estruturar e estilizar o conteúdo, garantindo um design moderno
                e responsivo. Apliquei JavaScript para adicionar interatividade
                e melhorar a experiência do usuário.
              </p>
            </div>
          </div>

          {/* Projeto 3 */}
          <div
            className="projetos-card"
            onClick={() => {
              entrarProjetos(3);
            }}
          >
            <img src={imgProjeto3} alt="Projeto3" className="img-Projeto1" />
            <div>
              <h3>Lista de Tarefas</h3>
              <p>
                Tecnologias: React, JavaScript, HTML, CSS, Bootstrap,
                LocalStorage. Desenvolvimento de uma aplicação interativa para
                gerenciamento de tarefas, com foco em usabilidade e organização.
              </p>
            </div>
          </div>

          {/* Projeto 4 */}
          <div
            className="projetos-card"
            onClick={() => {
              entrarProjetos(4);
            }}
          >
            <img src={imgProjeto4} alt="Projeto4" className="img-Projeto1" />
            <div>
              <h3>Catalogo de Carros</h3>
              <p>
                website de catálogo de carros, permitindo aos usuários explorar
                modelos, visualizar detalhes. Projeto focado em experiência do
                usuário, design responsivo e implementação de boas práticas de
                front-end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contatos" className="contatos">
        <h2 className="contato-titulo">Entre em Contato</h2>
        <form className="formulario-contato" onSubmit={enviarWhats}>
          <div className="grupo-form">
            <input
              placeholder="Nome"
              className="campo-form"
              onChange={ValorName}
            />
          </div>
          <div className="grupo-form">
            <textarea
              className="campo-form"
              onChange={ValorTexto}
              rows={4}
              placeholder="Diggite sua Mensagem"
            ></textarea>
          </div>
          <button type="submit" className="botao-form">
            Enviar Whatssap
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
