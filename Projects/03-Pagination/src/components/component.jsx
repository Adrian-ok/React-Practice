import React, { } from 'react'
import { useGetCharacter } from '../hook/useGetCharacter'

export function Pagination() {

    const { character, page, setPage } = useGetCharacter()

    return (
        <div className="inline-flex justify-center gap-1">
            <button
                onClick={() => setPage(page - 1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
                {'<'}
            </button>

            <div>
                <p className="h-8 w-12 rounded border border-gray-100 bg-white text-center font-medium text-gray-900">{page}</p>
            </div>

            <button
                onClick={() => setPage(page + 1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
                {'>'}
            </button>
        </div>
    )
}
