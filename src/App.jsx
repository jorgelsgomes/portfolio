import './App.css'
import fotoPerfil from "./imagens/perfil.png"

function App() {
  return (
    <>
    <header className='header'>
      <h3>Home</h3>
      <h3>Sobre</h3>
      <h3>Contato</h3>
    </header>
      <section className='sobre'>
        <img width="200" height="200" src={ fotoPerfil } alt="foto perfil" />
        <p>
          Atualmente estou reciclando meus conhecimentos em analise de sistemas e desenvolvimento web por meio da Trybe.
          Tenho experiencia em designer gráfico desde jovem, criando artes, montagens e edições de vídeos.
          Dessa forma esses trabalhos e o trato com ferramentas computacionais é algo natural para mim.
        </p>
      </section>
      <h1>Projetos</h1>
      <section className='project'>
        <div>
          Pixel Arte
        </div>
        <div>
          Site Receitas
        </div>
        <div>
          Trunfo
        </div>
        <div>
          React Native(Em breve)
        </div>
      </section>
      <h1>Habilidades</h1>
      <section className='skills'>
        <div className='imagem-container'>
          <img  width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
          HTML5
        </div>
        <div className='imagem-container'>
          <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" />
          CSS3
        </div>
        <div className='imagem-container'>
          <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
          JavaScript
        </div>
        <div className='imagem-container'>
          <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />
          React
        </div>
        <div className='imagem-container'>
          <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/color/48/redux.png" alt="redux" />
          Redux
        </div>
        <div className='imagem-container'>
          <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js" />
          Node.js
        </div>
        <div className='imagem-container'>
          <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git" />
          Git
        </div>
      </section>
    </>
  )
}

export default App
