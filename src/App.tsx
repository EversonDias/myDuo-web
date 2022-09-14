import './styles/main.css';
import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src="img/Logo.svg" alt="logo do site" />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-clip-text bg-nlw-gradient">duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">

          <img src="img/test1.png" alt="card do jogo" />

          <div className="w-full pt-16 pb-4 px-4 bg-card-shadow absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Nome do Jogo</strong>
            <span className="text-zinc-300 text-sm block" >anúncios</span>
          </div>

        </a>
      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
          <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
            <div>
              <strong className="text-2xl text-white font-black block">Não encontrou seu dou?</strong>
              <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
            </div>
            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={24} />
              Publicar anúncio
            </button>
          </div>
        </div>
    </div>
  )
}

export default App
