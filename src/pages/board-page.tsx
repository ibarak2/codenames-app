import { useState, useEffect } from "react"
import { getWords } from "../services/words-service"

type TeamTurn = 'red' | 'blue'
interface Word {
    word: string
    isShown: boolean
    color: string
}

export const BoardPage = () => {
    const [teamTurn, setTeamTurn] = useState<TeamTurn>('red')
    const [words, setWords] = useState<Word[]>([])

    useEffect(() => {
        setWords(getWords())
    },[])


    return (
        <div className="board-page">
            <h1 className="text-center">CODENAMES</h1>
            <div className="board-status flex space-between align-center">
                <h2><span className="red-text">9</span> - <span className="blue-text">8</span></h2>
                <h2 className={(teamTurn === 'red') ? 'red-text' : 'blue-text'}>{teamTurn}'s turn</h2>
                <button className="end-turn-btn">End {teamTurn}'s Turn</button>
            </div>
            <div className="board-words">
                {words.map((word, idx) => {
                    return <div className="word-item" key={idx}><h3>{word.word}</h3></div>
                })}
            </div>
            <div className="board-options flex">
                <p>join room: ASDF</p>
                <div className="board-options-btns">
                    <button>Players</button>
                    <button>Spy-master</button>
                    <button>Next Game</button>
                </div>
            </div>
        </div>
    )
}

