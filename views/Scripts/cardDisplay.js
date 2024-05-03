cardArray.forEach(
    (card, idx, arr) => {
        card.innerHTML = `<p>${gamesInfo[idx%gamesInfo.length].title}</p>`;
    }
);