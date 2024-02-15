function initializeDeck(suits, ranks) 
{

    const deck = []

    suits.forEach(suit => 
        {

        ranks.forEach(rank => 
            {

            deck.push(`${rank}${suit}`)
        })
    })
    return deck
}
module.exports = initializeDeck;