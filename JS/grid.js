document.addEventListener("DOMContentLoaded", function () {
const Drivers = [
    {
        imagedriver: "/F1/MEDIA/drivers/lewham01.png",
        imagehelmet: "/F1/MEDIA/drivers/hamilton.png",
        name: "Lewis Hamilton",
        wordchampion: "7", 
        numberraces: "335",
        Wins: "103",
        Podiums: "197",
        number: "44",
        team: "Ferrari",
        description: "Lewis Hamilton is a British racing driver currently driving for Scuderia Ferrari. He is a seven-time Formula 1 World Champion and holds the records for the most wins and pole positions in the sport."
    },
    {
        imagedriver: "/F1/MEDIA/drivers/chalec01.png",
        imagehelmet: "/F1/MEDIA/drivers/leclerc.png",
        name: "Charles Leclerc",
        wordchampion: "0",
        numberraces: "134",
        Wins: "5",
        Podiums: "34",
        number: "16",
        team: "Ferrari",
        description: "Charles Leclerc is a Monégasque Formula 1 driver for Scuderia Ferrari, known for his qualifying pace and aggressive driving. Despite no world title yet, he remains one of the top contenders."
    },
    {
        imagedriver: "/F1/MEDIA/drivers/maxver01.png",
        imagehelmet: "/F1/MEDIA/drivers/verstappen.png",
        name: "Max Verstappen",
        wordchampion: "3",
        numberraces: "183",
        Wins: "61",
        Podiums: "96",
        number: "1",
        team: "Red Bull Racing",
        description: "Max Verstappen is a Dutch racing driver and three-time Formula 1 World Champion. Known for his dominance with Red Bull, he has become one of the most successful drivers in the modern era."
    }
];


    const container = document.getElementById("Drivers");

    Drivers.forEach(driver => {
        const eventElement = document.createElement("div");
        eventElement.className = "driver";
        eventElement.innerHTML = `
            <div class="driver-profile">
                <h1>${driver.name}</h1>
                <div class="driver-layout">
                    <div class="helmet">
                        <img src="${driver.imagehelmet}" alt="Helmet of ${driver.name}">
                    </div>
                    <div class="driver-info">
                        <p><strong>World Championships:</strong> ${driver.wordchampion}</p>
                        <p><strong>Number:</strong> ${driver.number}</p>
                        <p><strong>Team:</strong> ${driver.team}</p>
                        <p><strong>Wins:</strong> ${driver.Wins}</p>
                        <p><strong>Podiums:</strong> ${driver.Podiums}</p>
                        <p><strong>${driver.description}</strong></p>
                    </div>
                    <div class="portrait">
                        <img src="${driver.imagedriver}" alt="${driver.name}">
                    </div>
                </div>
            </div>
        `;
        container.appendChild(eventElement);
    });
});
