import React from 'react'

export function Character({ characters }) {
    return (
        <div>
            <ul>
                {characters.map((character) => {
                    return (
                        <li key={character.id}>{character.nombre} - {character.especie}</li>
                    )
                })}
            </ul>
        </div>
    )
}
