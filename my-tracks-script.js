document.addEventListener('DOMContentLoaded', function() {
    const myTracksList = document.getElementById('my-tracks-list');
    const uploadForm = document.getElementById('upload-form');
    const trackNameInput = document.getElementById('track-name');
    const trackFileInput = document.getElementById('track-file');
    const uploadMessage = document.getElementById('upload-message');
    const audioPlayer = document.querySelector('#player audio');

    // Функція для додавання треку до списку
    function addTrackToList(name, src) {
        const trackItem = document.createElement('div');
        trackItem.classList.add('track-item');
        trackItem.dataset.src = src;

        trackItem.innerHTML = `
            <div class="track-info">
                <span class="track-title">${name}</span>
                <span class="track-artist"></span>
            </div>
            <button class="play-button">▶</button>
        `;

        myTracksList.appendChild(trackItem);

        // Додаємо слухача подій до кнопки відтворення нового треку
        const playButton = trackItem.querySelector('.play-button');
        playButton.addEventListener('click', function() {
            playTrack(trackItem.dataset.src);
        });
    }

    // Обробка відправки форми завантаження
    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const trackName = trackNameInput.value.trim();
        const trackFile = trackFileInput.files[0];

        if (trackName && trackFile) {
            if (!trackFile.type.startsWith('audio/')) {
                uploadMessage.textContent = 'Будь ласка, завантажте аудіофайл.';
                uploadMessage.style.color = 'red';
                uploadMessage.style.display = 'block';
                return;
            }

            const audioUrl = URL.createObjectURL(trackFile);
            addTrackToList(trackName, audioUrl);

            trackNameInput.value = '';
            trackFileInput.value = '';
            uploadMessage.textContent = 'Трек успішно завантажено (тимчасово)!';
            uploadMessage.style.color = 'green';
            uploadMessage.style.display = 'block';

            setTimeout(() => {
                uploadMessage.style.display = 'none';
            }, 3000);

        } else {
            uploadMessage.textContent = 'Будь ласка, заповніть усі поля.';
            uploadMessage.style.color = 'red';
            uploadMessage.style.display = 'block';
        }
    });


        window.playTrack = function(trackSrc) {
            audioPlayer.src = trackSrc;
            audioPlayer.play();
            console.log("Playing:", trackSrc);
        };
    });