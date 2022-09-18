import * as Dialog from "@radix-ui/react-dialog"
import { Check, GameController } from "phosphor-react"
import LabelInput from "../../components/labelInput"
import * as Checkbox from "@radix-ui/react-checkbox"
import { FormEvent, useEffect, useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import axios from "axios";

interface Game {
    id: string;
    title: string;
}

export default function Forms() {
    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)

    useEffect(() => {
        axios('http://localhost:3333/games').then(response => {
            setGames(response.data)
        })
    }, [])

    async function handleCreateAd(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        try {
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                "name": data.name,
                "yearsPlaying": Number(data.yearsPlaying),
                "discord": data.discord,
                "weekDays": weekDays.map(Number),
                "hourStart": data.hourStart,
                "hourEnd": data.hourEnd,
                "useVoiceChannel": useVoiceChannel
            })
            alert('Anúncio criado com sucesso!')
        } catch (err) {
            console.log(err)
            alert('Erro ao criar o anúncio!')
        }
    }

    return (
        <form onSubmit={handleCreateAd} className="mt-8">
            <select
                defaultValue=""
                id='game'
                name="game"
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 "
            >
                <option disabled value='' >Selecione o game que deseja jogar</option>
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
                    <ToggleGroup.Root
                        value={weekDays}
                        onValueChange={setWeekDays}
                        className="grid grid-cols-4 gap-3"
                        type="multiple">
                        <ToggleGroup.Item
                            value="0"
                            className={`w-8 h-8 rounded  ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title="Domingo">
                            D
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="1"
                            className={`w-8 h-8 rounded  ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title="Segunda">
                            S
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="2"
                            className={`w-8 h-8 rounded  ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title="Terca">
                            T
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="3"
                            className={`w-8 h-8 rounded  ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title="Quarta">
                            Q
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="4"
                            className={`w-8 h-8 rounded  ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title="Quinta">
                            Q
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="5"
                            className={`w-8 h-8 rounded  ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title="Sexta">
                            S
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="6"
                            className={`w-8 h-8 rounded  ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title="Sabado">
                            S
                        </ToggleGroup.Item>
                    </ToggleGroup.Root>

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
                            name="hourStart"
                            placeholder='De'
                        />
                        <input
                            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                            type="time"
                            id='hourEnd'
                            name="hourEnd"
                            placeholder='Até'
                        />
                    </div>
                </div>
            </div>


            <label className="mt-4 flex iten gap-2 text-sm ">

                <Checkbox.Root
                    checked={useVoiceChannel}
                    onCheckedChange={(checked) => {
                        checked ? setUseVoiceChannel(true) :
                            setUseVoiceChannel(false)
                    }}
                    className="w-6 h-6 p-1 rounded bg-zinc-900">
                    <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-emerald-400" />
                    </Checkbox.Indicator>
                </Checkbox.Root>

                Costumo me conectar ao chat de voz
            </label>

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