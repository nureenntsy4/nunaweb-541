document.getElementById("songForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const songLang = document.getElementById("song_lang").value;
    const songTitle = document.getElementById("song_title").value;
    const artist = document.getElementById("artist").value;
    const genre = document.getElementById("genre").value;
    const recommend = document.querySelector('input[name="recommend"]:checked').value;
    const description = document.getElementById("description").value;

    const popUpContent = `
        <div class="popup-content">
            <h2>Thank you for sharing !</h2>
            <p><strong>Song Language : </strong> ${songLang}</p>
            <p><strong>Song Title : </strong> ${songTitle}</p>
            <p><strong>Artist : </strong> ${artist}</p>
            <p><strong>Genre : </strong> ${genre}</p>
            <p><strong>Recommendation : </strong> ${recommend}</p>
            <p><strong>Description : </strong> ${description}</p>
			<div class="icon-row">
				<i class="fas fa-play"></i>
				<i class="fas fa-pause"></i>
				<i class="far fa-heart"></i>
			</div>
            <button onclick="location.href='main.html';">Home</button>
        </div>
    `;

    const popUpBox = document.createElement("div");
    popUpBox.classList.add("popup-box");
    popUpBox.innerHTML = popUpContent;

    document.body.appendChild(popUpBox);
});
