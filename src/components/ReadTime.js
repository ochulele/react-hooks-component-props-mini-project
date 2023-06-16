import React from 'react';

function ReadTime ({ minutes }) {

    const coffee = Math.ceil( minutes / 5)
    const bentoBox = Math.ceil( minutes / 5)
    const coffeeEmoji = '☕️'
    const bentoBoxEmoji = '🍱'

    let emoji= ''
    let button = ''

    if (minutes < 30) {
        emoji = coffeeEmoji.repeat(coffee)
        button = `${emoji} ${minutes} min read.`
    } else {
        emoji = bentoBoxEmoji.repeat(bentoBox)
        button = `${emoji} ${minutes} min read.`
    }

    return (
        <span>{button}</span>
    )
}

export default ReadTime