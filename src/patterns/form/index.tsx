import * as Dialog from "@radix-ui/react-dialog"
import { Check, GameController } from "phosphor-react"
import LabelInput from "../../components/labelInput"
import * as Checkbox from "@radix-ui/react-checkbox"
import { useEffect, useState } from 'react';

interface Game {
    id: string;
    title: string;
}

export default function Forms() {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/games')
            .then(response => response.json())
            .then(data => {
                setGames(data)
            })
    }, [])

    return (
        <form className="mt-8">
            <select
                id='game'
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 "
            >
                <option disabled selected value='' >Selecione o game que deseja jogar</option>
                {games.map(game => {
                    return <option key={game.id} value={game.id}>{game.title}</option>
                })}
            </select>


            <LabelInput
                key='name'
                id="name"
                type="text"
                text="Seu nome (ou nickname)"
                placeholder="como te chamam dentro do game?"
            />

            <div className="grid grid-cols-2 gap-6">
                <LabelInput
                    key='yearsPlaying'
                    id="yearsPlaying"
                    type="number"
                    text="Jogo há quantos anos?"
                    placeholder="Tudo bem ser ZERO"
                />
                <LabelInput
                    key='discord'
                    id="discord"
                    type="text"
                    text="Qual seu Discord?"
                    placeholder="Usuario#0000"
                />
            </div>
            <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                    <label
                        className="mt-4"
                        htmlFor="weekDays">
                        Quando costuma jogar?
                    </label>

                    <div className="grid grid-cols-4 gap-3">
                        <button
                            className="w-8 h-8 rounded bg-zinc-900"
                            title="Domingo">
                            D
                        </button>
                        <button
                            className="w-8 h-8 rounded bg-zinc-900"
                            title="Segunda">
                            S
                        </button>
                        <button
                            className="w-8 h-8 rounded bg-zinc-900"
                            title="Terca">
                            T
                        </button>
                        <button
                            className="w-8 h-8 rounded bg-zinc-900"
                            title="Quarta">
                            Q
                        </button>
                        <button
                            className="w-8 h-8 rounded bg-zinc-900"
                            title="Quinta">
                            Q
                        </button>
                        <button
                            className="w-8 h-8 rounded bg-zinc-900"
                            title="Sexta">
                            S
                        </button>
                        <button
                            className="w-8 h-8 rounded bg-zinc-900"
                            title="Sabado">
                            S
                        </button>
                    </div>

                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <label
                        className="mt-4"
                        htmlFor="hourStart">
                        Qual horário do dia?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        <input
                            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                            type="time"
                            id="hourStart"
                            placeholder='De'
                        />
                        <input
                            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                            type="time"
                            id='hourEnd'
                            placeholder='Até'
                        />
                    </div>
                </div>
            </div>


            <div className="mt-4 flex iten gap-2 text-sm ">

                <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
                    <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-emerald-400" />
                    </Checkbox.Indicator>
                </Checkbox.Root>

                Costumo me conectar ao chat de voz
            </div>

            <footer className="mt-4 flex justify-between">
                <Dialog.Close type="button" className="bg-zinc-500 px-5 h-12 rounded-md hover:bg-zinc-600">
                    Cancelar
                </Dialog.Close>
                <button
                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                    type="submit">
                    <GameController size={24} />
                    Encontrar duo
                </button>
            </footer>
        </form>
    )
}