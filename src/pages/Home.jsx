import React from 'react';
import '../App.css';
import Header from '../Components/Header.jsx';
import fotoPerfil from "../imagens/perfil.png";
import ProjetoPixelArte from "../imagens/pixelArt.png";
import ProjetoTrunfo from "../imagens/trunfo.png";
import ProjetoVendas from "../imagens/sitedevendas.png"
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <Header/>
            <div>
                <section className='sobre'>
                    <div className='img-sobre'>
                    <img src={fotoPerfil} alt="foto perfil" />
                    </div>
                    <div className='text-sobre'>
                    <p>
                        Atualmente estou reciclando meus conhecimentos em analise de sistemas e desenvolvimento web por meio da Trybe.
                        Tenho experiencia em designer gráfico desde jovem, criando artes, montagens e edições de vídeos.
                        Dessa forma esses trabalhos e o trato com ferramentas computacionais é algo natural para mim.
                    </p>
                    </div>
                </section>
                <h1>Projetos</h1>
                <section className='project'>
                    <div className='project-container'>
                        <img width="350" src={ProjetoPixelArte} alt="imagem do projeto pixels Arte" />
                        <div>
                        <Link to='https://github.com/jorgelsgomes/pixelsArt' >Pixels Arte</Link>
                        </div>
                    </div>
                    <div className='project-container'>
                        <img width="350" src={ProjetoVendas} alt="imagem do projeto site de vendas" />
                        <div>
                            <Link to='https://site-de-vendas.vercel.app/'>Site de Vendas</Link>
                        </div>
                    </div>
                    <div className='project-container'>
                        <img width="350" src={ProjetoTrunfo} alt="imagem do projeto trunfo" />
                        <div>
                        <Link to='https://github.com/jorgelsgomes/Trunfo' >Trunfo </Link>
                        </div>
                    </div>
                </section>
                <h1>Habilidades</h1>
                <section className='skills'>
                    <div className='imagem-container'>
                        <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
                        <div>
                            HTML5
                        </div>
                    </div>
                    <div className='imagem-container'>
                        <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" />
                        <div>
                            CSS3
                        </div>
                    </div>
                    <div className='imagem-container'>
                        <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
                        <div>
                            JavaScript
                        </div>
                    </div>
                    <div className='imagem-container'>
                        <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />
                        <div>
                            React
                        </div>
                    </div>
                    <div className='imagem-container'>
                        <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/color/48/redux.png" alt="redux" />
                        <div>
                            Redux
                        </div>
                    </div>
                    <div className='imagem-container'>
                        <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js" />
                        <div>
                            Node.js
                        </div>
                    </div>
                    <div className='imagem-container'>
                        <img className='imagem-container' width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git" />
                        <div>
                            Git
                        </div>
                    </div>
                </section>
            </div >
        </>
    );
}

export default Home;