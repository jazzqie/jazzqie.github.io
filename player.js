document.addEventListener('DOMContentLoaded', function() {});
    // База даних треків
    const tracks = [
    {
        id: 1,
        title: "HUMBLE.",
        artist: "Kendrick Lamar",
        cover: "covers/humble_kendrick.jpg",
        audio: "tracks/Kendrick.mp3",
        plays: "1,245,678",
        category: "weekly",
        album: "DAMN."
    },
    {
        id: 2,
        title: "505",
        artist: "Arctic Monkeys",
        cover: "covers/505_ArcticMonkeys.jpg",
        audio: "tracks/Arctic.mp3",
        plays: "2,345,678",
        category: "weekly",
        album: "Humbug"
    },
    {
        id: 3,
        title: "Fly me to the Moon",
        artist: "Frank Sinatra",
        cover: "covers/flymetothemoon_Sinatra.jpg",
        audio: "tracks/Sinatra.mp3",
        plays: "3,456,789",
        category: "weekly",
        album: "Fly Me to the Moon"
    },
    {
        id: 4,
        title: "Bad",
        artist: "Michael Jackson",
        cover: "covers/i'mbad_Jackson.jpg",
        audio: "tracks/Jackson.mp3",
        plays: "1,567,890",
        category: "Monthly",
        album: "Bad"
    },
    {
        id: 5,
        title: "Enter Sandman",
        artist: "metallica",
        cover: "covers/entersandman_metallica.jpg",
        audio: "tracks/Metallica.mp3",
        plays: "4,567,890",
        category: "Monthly",
        album: " Metallica"
    },
    {
        id: 6,
        title: "The great gig in the sky",
        artist: "Pink Floyd",
        cover: "covers/thegreatgig_pinkfloyd.jpg",
        audio: "tracks/PinkFLoyd.mp3",
        plays: "5,678,901",
        category: "Monthly",
        album: "The Dark Side of the Moon"
    },
  
    {
        id: 7,
        title: "Sonne",
        artist: "Rammstein",
        cover: "covers/sonne.jpg",
        audio: "tracks/Sonne.mp3",
        category: "",
        album: "Mutter"
    },
    {
        id: 8,
        title: "Freak On A Leash",
        artist: "Korn",
        cover: "covers/freak.jpg",
        audio: "tracks/Korn - Freak On A Leash.mp3",
        category: "",
        album: "Follow The Leader"
    },
    {
        id: 9,
        title: "Feel Good Inc.",
        artist: "Gorillaz",
        cover: "covers/feelgood.jpg",
        audio: "tracks/Gorillaz - Feel Good Inc.mp3",
        category: "",
        album: "Demon Days"
    },
    {
        id: 10,
        title: "Chamber Of Reflection",
        artist: "Mac DeMarco",
        cover: "covers/chamber.jpg",
        audio: "tracks/Mac DeMarco - Chamber Of Reflection.mp3",
        category: "",
        album: "Salad Days"
    },
    {
        id: 11,
        title: "Cotton Eyed Joe",
        artist: "Rednex",
        cover: "covers/roflnagget.jpg",
        audio: "tracks/Rednex - Cotton Eyed Joe.mp3",
        category: "",
        album: "The Best of Rednex"
    },
    {
        id: 12,
        title: "Floods",
        artist: "Pantera",
        cover: "covers/floods.jpg",
        audio: "tracks/Pantera - Floods.mp3",
        category: "",
        album: "The Great Southern Trendkill"
    },
    {
        id: 13,
        title: "FE!N",
        artist: "Travis Scott",
        cover: "covers/fein.png",
        audio: "tracks/Travis Scott Fe!n.mp3",
        category: "",
        album: "Utopia"
    },
    {
        id: 14,
        title: "Make It Bun Dem",
        artist: "Skrillex & Damian Marley",
        cover: "covers/farcrytrava.jpg",
        audio: "tracks/Skrillex & Damian Marley - Make It Bun Dem.mp3",
        category: "",
        album: "Make It Bun Dem"
    },
    {
        id: 15,
        title: "Let It Happen",
        artist: "Tame Impala",
        cover: "covers/letithappen.jpg",
        audio: "tracks/Tame Impala - Let It Happen.mp3",
        category: "",
        album: "Currents"
    },
    {
        id: 16,
        title: "Creep",
        artist: "Radiohead",
        cover: "covers/creep.jpg",
        audio: "tracks/Radiohead - Creep.mp3",
        category: "",
        album: "Pablo Honey"
    },
    {
        id: 17,
        title: "Flashing Lights",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "tracks/Kanye West feat. Dwele - Flash Lights.mp3",
        category: "",
        album: "Graduation"
    },
    {
        id: 18,
        title: "Big Iron",
        artist: "Marty Robbins",
        cover: "covers/bigiron.jpg",
        audio: "tracks/Marty Robbins - Big Iron.mp3",
        category: "",
        album: "Gunfighter Ballads and Trail Songs"
    },
    {
        id: 19,
        title: "Thunderstruck",
        artist: "AC/DC",
        cover: "covers/acdc.jpg",
        audio: "tracks/AC-DC - Thunderstruck.mp3",
        category: "",
        album: "Back in Black"
    },
    {
        id: 20,
        title: "Heart Shaped Box",
        artist: "Nirvana",
        cover: "covers/patriotlisten.jpg",
        audio: "tracks/Nirvana - Heart Shaped Box .mp3",
        category: "",
        album: "In Utero"
    },
    {
        id: 21,
        title: "Paranoid",
        artist: "Black Sabbath",
        cover: "covers/sabbath.png",
        audio: "tracks/Black Sabbath - Paranoid.mp3",
        category: "",
        album: "Paranoid"
    },
    {
        id: 22,
        title: "BLOOD.",
        artist: "Kendrick Lamar",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/BLOOD..mp3",
        album: "DAMN."
    },
    {
        id: 23,
        title: "DNA",
        artist: "Kendrick Lamar",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/DNA - Kendrick Lamar (AUDIO).mp3",
        album: "DAMN."
    },
    {
        id: 24,
        title: "YAH.",
        artist: "Kendrick Lamar",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/YAH..mp3",
        album: "DAMN."
    },
    {
        id: 25,
        title: "ELEMENT.",
        artist: "Kendrick Lamar",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/ELEMENT..mp3",
        album: "DAMN."
    },
    {
        id: 26,
        title: "FEEL.",
        artist: "Kendrick Lamar",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/FEEL..mp3",
        album: "DAMN."
    },
    {
        id: 27,
        title: "LOYALTY.",
        artist: "Kendrick Lamar ft. Rihanna",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/LOYALTY..mp3",
        album: "DAMN."
    },
    {
        id: 28,
        title: "PRIDE.",
        artist: "Kendrick Lamar",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/PRIDE..mp3",
        album: "DAMN."
    }, {
        id: 29,
        title: "LUST.",
        artist: "Kendrick Lamar",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/LUST..mp3",
        album: "DAMN."
    },
    {
        id: 30,
        title: "LOVE.",
        artist: "Kendrick Lamar ft. Zacari",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/LOVE..mp3",
        album: "DAMN."
    },
    {
        id: 31,
        title: "XXX.",
        artist: "Kendrick Lamar ft. U2",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/XXX..mp3",
        album: "DAMN."
    },
    {
        id: 32,
        title: "FEAR.",
        artist: "Kendrick Lamar",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/FEAR..mp3",
        album: "DAMN."
    },
    {
        id: 33,
        title: "GOD.",
        artist: "Kendrick Lamar",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/GOD..mp3",
        album: "DAMN."
    },
    {
        id: 34,
        title: "DUCKWORTH.",
        artist: "Kendrick Lamar",
        cover: "covers/humble_kendrick.jpg",
        audio: "albums/DAMN/DUCKWORTH..mp3",
        album: "DAMN."
    },
    {
        id: 35,
        title: "War Pigs",
        artist: "Black Sabbath",
        cover: "covers/sabbath.png",
        audio: "albums/Paranoid/Black Sabbath - War Pigs.mp3",
        album: "Paranoid"
    },
    {
        id: 36,
        title: "Paranoid",
        artist: "Black Sabbath",
        cover: "covers/sabbath.png",
        audio: "albums/Paranoid/Black Sabbath - Paranoid.mp3",
        album: "Paranoid"
    },
    {
        id: 37,
        title: "Planet Caravan",
        artist: "Black Sabbath",
        cover: "covers/sabbath.png",
        audio: "albums/Paranoid/Planet Caravan - Black Sabbath.mp3",
        album: "Paranoid"
    },
    {
        id: 38,
        title: "Iron Man",
        artist: "Black Sabbath",
        cover: "covers/sabbath.png",
        audio: "albums/Paranoid/Black Sabbath - Iron Man.mp3",
        album: "Paranoid"
    },
    {
        id: 39,
        title: "Electric Funeral",
        artist: "Black Sabbath",
        cover: "covers/sabbath.png",
        audio: "albums/Paranoid/Black Sabbath - Electric Funeral.mp3",
        album: "Paranoid"
    },
    {
        id: 40,
        title: "Hand of Doom",
        artist: "Black Sabbath",
        cover: "covers/sabbath.png",
        audio: "albums/Paranoid/Black Sabbath - Hand of Doom.mp3",
        album: "Paranoid"
    },
    {
        id: 41,
        title: "Rat Salad",
        artist: "Black Sabbath",
        cover: "covers/sabbath.png",
        audio: "albums/Paranoid/Black Sabbath - Rat Salad.mp3",
        album: "Paranoid"
    },
    {
        id: 42,
        title: "Fairies Wear Boots",
        artist: "Black Sabbath",
        cover: "covers/sabbath.png",
        audio: "albums/Paranoid/Black Sabbath - Fairies Wear Boots.mp3",
        album: "Paranoid"
    },
    {
        id: 43,
        title: "The Less I Know The Better",
        artist: "Tame Impala",
        cover: "covers/letithappen.jpg",
        audio: "albums/Currents/Tame Impala - The Less I Know The Better (Audio).mp3",
        album: "Currents"
    },
    {
        id: 44,
        title: "Eventually",
        artist: "Tame Impala",
        cover: "covers/letithappen.jpg",
        audio: "albums/Currents/Tame Impala - Eventually (Audio).mp3",
        album: "Currents"
    },
    {
        id: 45,
        title: "Gossip",
        artist: "Tame Impala",
        cover: "covers/letithappen.jpg",
        audio: "albums/Currents/Tame Impala - Gossip (Audio).mp3",
        album: "Currents"
    },
    {
        id: 46,
        title: "Cause I'm a Man",
        artist: "Tame Impala",
        cover: "covers/letithappen.jpg",
        audio: "albums/Currents/Tame Impala - Cause Im A Man (Official Video).mp3",
        album: "Currents"
    },
    {
        id: 47,
        title: "The Moment",
        artist: "Tame Impala",
        cover: "covers/letithappen.jpg",
        audio: "albums/Currents/Tame Impala - The Moment (Audio).mp3",
        album: "Currents"
    },
    {   id: 48,
        title: "Yes I'm Changing",
        artist: "Tame Impala",
        cover: "covers/letithappen.jpg",
        audio: "albums/Currents/Tame Impala - Yes Im Changing (Audio).mp3",
        album: "Currents"
    },
    {
        id: 49,
        title: "Past Life",
        artist: "Tame Impala",
        cover: "covers/letithappen.jpg",
        audio: "albums/Currents/Tame Impala - Past Life (Audio).mp3",
        album: "Currents"
    },
    {
        id: 50,
        title: "Disciples",
        artist: "Tame Impala",
        cover: "covers/letithappen.jpg",
        audio: "albums/Currents/Tame Impala - Disciples (Audio).mp3",
        album: "Currents"
    },
    {        id: 51,
        title: "Nangs",
        artist: "Tame Impala",
        cover: "covers/letithappen.jpg",
        audio: "albums/Currents/Tame Impala - Nangs (Audio).mp3",
        album: "Currents"
    },
    {
        id: 52,
        title: "New Person, Same Old Mistakes",
        artist: "Tame Impala",
        cover: "covers/letithappen.jpg",
        audio: "albums/Currents/Tame Impala - New Person, Same Old Mistakes (Audio).mp3",
        album: "Currents"
    },
    {id: 53,
        title: "Barry Bonds",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "albums/Graduation/Barry Bonds.mp3",
        album: "Graduation"
    },
    {
        id: 54,
        title: "Champion",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "albums/Graduation/Champion.mp3",
        album: "Graduation"
    },
    {
        id: 55,
        title: "Good Morning",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "albums/Graduation/Kanye West - Good Morning.mp3",
        album: "Graduation"
    },
    {
        id: 56,
        title: "I Wonder",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "albums/Graduation/I Wonder.mp3",
        album: "Graduation"
    },
    {
        id: 57,
        title: "Stronger",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "albums/Graduation/Stronger.mp3",
        album: "Graduation"
    },
    {
        id: 58,
        title: "Good Life",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "albums/Graduation/Good Life.mp3",
        album: "Graduation"
    },
    {
        id: 59,
        title: "Can't Tell Me Nothing",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "albums/Graduation/Cant Tell Me Nothing.mp3",
        album: "Graduation"
    },
    {
        id: 60,
        title: "Everything I Am",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "albums/Graduation/Everything I Am.mp3",
        album: "Graduation"
    },
    {
        id: 61,
        title: "The Glory",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "albums/Graduation/The Glory.mp3",
        album: "Graduation"
    },
    {
        id: 62,
        title: "Homecoming",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "albums/Graduation/Homecoming.mp3",
        album: "Graduation"
    },
    {
        id: 63,
        title: "Big Brother",
        artist: "Kanye West",
        cover: "covers/flashlights.jpg",
        audio: "albums/Graduation/Big Brother.mp3",
        album: "Graduation"
    }


]

    // Функція для пошуку треків
    function searchTracks(query) {
        const normalizedQuery = query.toLowerCase().trim();
        if (!normalizedQuery) return [];
        
        return tracks.filter(track => 
            track.title.toLowerCase().includes(normalizedQuery) || 
            track.artist.toLowerCase().includes(normalizedQuery) || 
            track.album.toLowerCase().includes(normalizedQuery)
        );
    }

    // Обробник пошуку
    const searchForm = document.querySelector('#search form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = document.getElementById('search-input');
            const searchResults = document.getElementById('search-results');
            
            const results = searchTracks(searchInput.value);
            
            if (results.length > 0) {
                searchResults.innerHTML = results.map(track => `
                    <div class="search-result" onclick="playTrack('${track.audio}')">
                        <img src="${track.cover}" height = 120px; width = 120px; alt="${track.title}" width="50">
                        <span>${track.title} - ${track.artist}</span>
                    </div>
                `).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<p>Нічого не знайдено</p>';
                searchResults.style.display = 'block';
            }
        });
    }
// Функція для відтворення треку
function playTrack(trackPath) {
  const audioPlayer = document.querySelector('#player audio');
  audioPlayer.src = trackPath;
  audioPlayer.play();
}


