document.addEventListener("DOMContentLoaded", function() {
const schedule = [
    {
        image: "/F1/MEDIA/tracks/Australia_Circuit.png",
        date: "2025-03-16",
        race: "Australian Grand Prix",
        time: "05:00",
        location: "Melbourne",
        Numberlaps: "58",
        LapRecord: "1:20.260"
    },
    {
        image: "/F1/MEDIA/tracks/circuit chine.png",
        date: "2025-03-23",
        race: "Chinese Grand Prix",
        time: "08:00",
        location: "Shanghai",
        Numberlaps: "56",
        LapRecord: "1:32.238"
    },
    {
        image: "/F1/MEDIA/tracks/japon.png",
        date: "2025-04-06",
        race: "Japanese Grand Prix",
        time: "07:00",
        location: "Suzuka",
        Numberlaps: "53",
        LapRecord: "1:30.983"
    },
    {
        image: "/F1/MEDIA/tracks/Bahrain.png",
        date: "2025-04-13",
        race: "Bahrain Grand Prix",
        time: "17:00",
        location: "Sakhir",
        Numberlaps: "57",
        LapRecord: "1:31.447"
    },
    {
        image: "/F1/MEDIA/tracks/arabie.png",
        date: "2025-04-20",
        race: "Saudi Arabian Grand Prix",
        time: "19:00",
        location: "Jeddah",
        Numberlaps: "50",
        LapRecord: "1:30.734"
    },
    {
        image: "/F1/MEDIA/tracks/Miami_Circuit.png",
        date: "2025-05-04",
        race: "Miami Grand Prix",
        time: "22:00",
        location: "Miami",
        Numberlaps: "57",
        LapRecord: "1:29.708"
    },
    {
        image: "/F1/MEDIA/tracks/Emilia_Romagna_Circuit.avif",
        date: "2025-05-18",
        race: "Emilia Romagna Grand Prix",
        time: "15:00",
        location: "Imola",
        Numberlaps: "63",
        LapRecord: "1:15.484"
    },
    {
        image: "/F1/MEDIA/tracks/Monaco_Circuit.avif",
        date: "2025-05-25",
        race: "Monaco Grand Prix",
        time: "15:00",
        location: "Monaco",
        Numberlaps: "78",
        LapRecord: "1:12.909"
    },
    {
        image: "/F1/MEDIA/tracks/espgp.png",
        date: "2025-06-01",
        race: "Spanish Grand Prix",
        time: "15:00",
        location: "Barcelone",
        Numberlaps: "66",
        LapRecord: "1:18.149"
    },
    {
        image: "/F1/MEDIA/tracks/canagp.png",
        date: "2025-06-15",
        race: "Canadian Grand Prix",
        time: "20:00",
        location: "Montréal",
        Numberlaps: "70",
        LapRecord: "1:13.078"
    },
    {
        image: "/F1/MEDIA/tracks/redbukkrung.png",
        date: "2025-06-29",
        race: "Austrian Grand Prix",
        time: "15:00",
        location: "Spielberg",
        Numberlaps: "71",
        LapRecord: "1:05.619"
    },
    {
        image: "/F1/MEDIA/tracks/grandebretagne.png",
        date: "2025-07-06",
        race: "British Grand Prix",
        time: "16:00",
        location: "Silverstone",
        Numberlaps: "52",
        LapRecord: "1:27.097"
    },
    {
        image: "/F1/MEDIA/tracks/spacircuit24.png",
        date: "2025-07-27",
        race: "Belgian Grand Prix",
        time: "15:00",
        location: "Spa-Francorchamps",
        Numberlaps: "44",
        LapRecord: "1:46.286"
    },
    {
        image: "/F1/MEDIA/tracks/hungarycirc24.png",
        date: "2025-08-03",
        race: "Hungarian Grand Prix",
        time: "15:00",
        location: "Budapest",
        Numberlaps: "70",
        LapRecord: "1:16.627"
    },
    {
        image: "/F1/MEDIA/tracks/gppbcircuit24.png",
        date: "2025-08-31",
        race: "Dutch Grand Prix",
        time: "15:00",
        location: "Zandvoort",
        Numberlaps: "72",
        LapRecord: "1:11.097"
    },
    {
        image: "/F1/MEDIA/tracks/Italy_Circuit-1.png",
        date: "2025-09-07",
        race: "Italian Grand Prix",
        time: "15:00",
        location: "Monza",
        Numberlaps: "53",
        LapRecord: "1:21.046"
    },
    {
        image: "/F1/MEDIA/tracks/azerbaidjan.png",
        date: "2025-09-21",
        race: "Azerbaijan Grand Prix",
        time: "13:00",
        location: "Bakou",
        Numberlaps: "51",
        LapRecord: "1:43.009"
    },
    {
        image: "/F1/MEDIA/tracks/Marina Bay Layout.png",
        date: "2025-10-05",
        race: "Singapore Grand Prix",
        time: "14:00",
        location: "Singapour",
        Numberlaps: "61",
        LapRecord: "1:41.905"
    },
    {
        image: "/F1/MEDIA/tracks/gpusatracé24.png",
        date: "2025-10-19",
        race: "United States Grand Prix",
        time: "21:00",
        location: "Austin",
        Numberlaps: "56",
        LapRecord: "1:36.169"
    },
    {
        image: "/F1/MEDIA/tracks/mexique.png",
        date: "2025-10-26",
        race: "Mexican Grand Prix",
        time: "21:00",
        location: "Mexico",
        Numberlaps: "71",
        LapRecord: "1:17.774"
    },
    {
        image: "/F1/MEDIA/tracks/gpbracircuit24.png",
        date: "2025-11-09",
        race: "Brazilian Grand Prix",
        time: "18:00",
        location: "São Paulo",
        Numberlaps: "71",
        LapRecord: "1:10.540"
    },
    {
        image: "/F1/MEDIA/tracks/lasvegas.png",
        date: "2025-11-23",
        race: "Las Vegas Grand Prix",
        time: "05:00",
        location: "Las Vegas",
        Numberlaps: "50",
        LapRecord: "1:34.524"
    },
    {
        image: "/F1/MEDIA/tracks/Qatar_Circuit.png",
        date: "2025-11-30",
        race: "Qatar Grand Prix",
        time: "17:00",
        location: "Losail",
        Numberlaps: "57",
        LapRecord: "1:23.196"
    },
    {
        image: "/F1/MEDIA/tracks/aboudhabi.png",
        date: "2025-12-07",
        race: "Abu Dhabi Grand Prix",
        time: "14:00",
        location: "Abu Dhabi",
        Numberlaps: "58",
        LapRecord: "1:26.103"
    }
];



    const scheduleContainer = document.getElementById("schedule");
    schedule.forEach(event => {
        const eventElement = document.createElement("div");
        eventElement.className = "tracks";
        eventElement.innerHTML = `
            <h2>${event.race}</h2>
            <div class="imginfo">
                <img src="${event.image}" alt="${event.race} Image">
                <div class="info">
                    <p>Date: ${event.date}</p>
                    <p>Time: ${event.time}</p>
                    <p>Location: ${event.location}</p>
                    <p>Number of Laps: ${event.Numberlaps || "N/A"}</p>
                    <p>Lap Record: ${event.LapRecord || "N/A"}</p>
                </div>
            </div>
        `;
        scheduleContainer.appendChild(eventElement);
    });
});
