let cardArray = document.querySelectorAll(".game_card");

function handleClickingCard(url){
    const rerouteOnClick = () => {
        window.location.href = url;
    }
    return rerouteOnClick;
}

// URL must be received from the Database
// const url = "";
const rerouteToXYZ = handleClickingCard("/game");

cardArray.forEach((card) => {
    //console.log("Added Event Listener");
    card.addEventListener("click", () => { rerouteToXYZ();});
});