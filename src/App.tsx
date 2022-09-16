import { useEffect, useState } from 'react';
import CardGame from './components/cardGame';
import CreateAdBaner from './components/CreateAdBanner';
import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src="img/Logo.svg" alt="logo do site" />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-clip-text bg-nlw-gradient">duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <CardGame
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title} adsCount={game._count.ads} />
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBaner />
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

          <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-whit top-1/2 left-1/2 '>
            <Dialog.Title>Publique um anúncio</Dialog.Title>
            <Dialog.Content>

            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
