const games = [

    {
        name: "Minecraft",
        genre: "Survival",
        platform: "PC / Console",
        players: "1-4+",
        difficulty: 3,
        goal: "Survive, explore, build and defeat powerful enemies.",
        recommendation: "Perfect if you want freedom and endless exploration!"
    },

    {
        name: "Terraria",
        genre: "Adventure",
        platform: "PC / Console",
        players: "1-8",
        difficulty: 4,
        goal: "Explore the world, collect resources and defeat bosses.",
        recommendation: "Great for players who love exploration and boss fights!"
    },

    {
        name: "Pokémon",
        genre: "RPG",
        platform: "Nintendo Switch",
        players: "1-2",
        difficulty: 2,
        goal: "Catch Pokémon, build a team and become the champion.",
        recommendation: "A great choice for a relaxing RPG adventure!"
    },

    {
        name: "Hades",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Fight through the Underworld and escape.",
        recommendation: "Choose this if you want fast combat and challenging runs!"
    },

    {
        name: "Civilization VI",
        genre: "Strategy",
        platform: "PC / Console",
        players: "1-12",
        difficulty: 5,
        goal: "Build an empire and lead your civilization to victory.",
        recommendation: "Perfect for strategic thinkers who like long games!"
    },

    {
        name: "Stardew Valley",
        genre: "RPG",
        platform: "PC / Console",
        players: "1-4",
        difficulty: 2,
        goal: "Build your farm, meet villagers and explore the valley.",
        recommendation: "A relaxing game when you just want to chill."
    },

    {
        name: "Fortnite",
        genre: "Action",
        platform: "PC / Console",
        players: "1-100",
        difficulty: 4,
        goal: "Fight other players and become the last player standing.",
        recommendation: "Good choice if you want competitive multiplayer action!"
    },

    {
        name: "Subnautica",
        genre: "Survival",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Explore an alien ocean and survive on an unknown planet.",
        recommendation: "Perfect if mysterious exploration sounds fun!"
    },

    {
        name: "Resident Evil",
        genre: "Horror",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Survive terrifying enemies and uncover the mystery.",
        recommendation: "Only choose this if you're brave enough... 👻"
    },

    {
        name: "The Legend of Zelda",
        genre: "Adventure",
        platform: "Nintendo Switch",
        players: "1",
        difficulty: 3,
        goal: "Explore a huge world, solve puzzles and defeat enemies.",
        recommendation: "A fantastic choice for exploration and adventure!"
    },

    {
        name: "League of Legends",
        genre: "Strategy",
        platform: "PC",
        players: "5v5",
        difficulty: 5,
        goal: "Work with your team and destroy the enemy Nexus.",
        recommendation: "Great if you enjoy competitive team games!"
    },

    {
        name: "Among Us",
        genre: "Strategy",
        platform: "PC / Mobile",
        players: "4-15",
        difficulty: 2,
        goal: "Complete tasks while figuring out who the impostors are.",
        recommendation: "Best played with friends and maximum chaos!"
    },

    {
        name: "Dark Souls",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 5,
        goal: "Explore a dangerous world and defeat extremely difficult enemies.",
        recommendation: "Prepare yourself. This one does not forgive mistakes."
    },

    {
        name: "Roblox",
        genre: "Adventure",
        platform: "PC / Mobile / Console",
        players: "1+",
        difficulty: 2,
        goal: "Explore thousands of different user-created games.",
        recommendation: "Perfect when you don't know exactly what you want to play!"
    },

    {
        name: "Don't Starve",
        genre: "Survival",
        platform: "PC / Console",
        players: "1-6",
        difficulty: 5,
        goal: "Gather resources and survive in a strange dangerous world.",
        recommendation: "A great challenge for survival game fans!"
    },

    {
        name: "Persona 5",
        genre: "RPG",
        platform: "Console / PC",
        players: "1",
        difficulty: 3,
        goal: "Live as a student while fighting supernatural enemies.",
        recommendation: "Excellent if you like story-heavy RPGs!"
    },

    {
        name: "Dead by Daylight",
        genre: "Horror",
        platform: "PC / Console",
        players: "4v1",
        difficulty: 4,
        goal: "Survive the killer or hunt down the survivors.",
        recommendation: "Great for multiplayer horror and unpredictable matches!"
    }

];


const generateButton = document.getElementById("generateButton");

const genreSelect = document.getElementById("genre");

const result = document.getElementById("result");


generateButton.addEventListener("click", function() {

    const selectedGenre = genreSelect.value;

    let availableGames;


    if (selectedGenre === "Random") {

        availableGames = games;

    } else {

        availableGames = games.filter(function(game) {

            return game.genre === selectedGenre;

        });

    }


    const randomIndex = Math.floor(Math.random() * availableGames.length);

    const game = availableGames[randomIndex];


    const stars = "⭐".repeat(game.difficulty);


    result.innerHTML = `

        <h2>🎮 Your Game</h2>

        <div class="game-name">
            ${game.name}
        </div>

        <div class="info">

            <div class="info-box">
                🎯 Genre<br>
                <strong>${game.genre}</strong>
            </div>

            <div class="info-box">
                💻 Platform<br>
                <strong>${game.platform}</strong>
            </div>

            <div class="info-box">
                👥 Players<br>
                <strong>${game.players}</strong>
            </div>

            <div class="info-box">
                🔥 Difficulty<br>
                <strong>${stars}</strong>
            </div>

        </div>

        <div class="info-box" style="margin-top: 12px;">
            🏆 Goal<br>
            <strong>${game.goal}</strong>
        </div>

        <div class="recommendation">
            💡 ${game.recommendation}
        </div>

    `;

});