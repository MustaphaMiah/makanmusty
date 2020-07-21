console.log("connected to JavaScript");
document.addEventListener("DOMContentLoaded", function() {
    const youtubeApiKey = "AIzaSyBzxoCuk92CeHdMPW08fwVwt8iPmRwpMkE";
    const apiURL = "https://www.googleapis.com/youtube/v3";
    const makanMustyId = "UC167j-qCguSgHu20raA211w";
    const videoList = document.querySelectorAll(".video-list")[0];
    const parser = new DOMParser(); // DOMParser is a built in JS functionality. //keyword "new" creates a new object!
    fetch(
            `${apiURL}/search?part=snippet&channelId=${makanMustyId}&maxResults=20&key=${youtubeApiKey}`
        )
        .then((response) => {
            return response.json();
        })
        .then((responseJSON) => {
            const videos = [...responseJSON.items];
            console.log("videos", videos);
            return videos;
        })
        .then((videos) => {
            videos.forEach((currentVideos) => {
                const videoLi = parser.parseFromString(
                    `<li id=${currentVideo.snippet.title}><p>${currentVideos.snippet.title}</p>
                                    <p>Level: ${currentVideos.snippet.description}</p>
                                    <div class="img-container" ><div><img alt="image missing" src=${currentVideos.snippet.thumbnails.default.url} />
                                    </div></div></li>`,
                    "text/html"
                );
            });
            videoList.appendChild(videoLi.body.firstChild);
        });
});

// .then((digimon) => {
//     digimon.forEach((currentDigimon) => {Î
//       const digimonLi = parser.parseFromString(
//         //. dot notation is happeningggg. parseFromString turns text into HTML
//         `<li id=${currentDigimon.name}><p>${currentDigimon.name}</p><p>Level: ${currentDigimon.level}</p><div class="img-container" ><div><img alt="image missing" src=${currentDigimon.img} /></div></div></li>`,
//         "text/html"
//       );
//       digimonList.appendChild(digimonLi.body.firstChild);
//     });