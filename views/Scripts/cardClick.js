let cardArray = document.querySelectorAll(".game_card");

function handleClickingCard(url){
    const rerouteOnClick = () => {
        window.location.href = url;
    }
    return rerouteOnClick;
}

cardArray.forEach((card) => {
    //console.log("Added Event Listener");
    card.addEventListener("click", () => { 
        // URL must be received from the Database
        // const url = "";
        const name = card.children[0].getAttribute("alt");
        const rerouteToNAME = handleClickingCard(`/game?gamename=${name}`);
        rerouteToNAME();
    });
});