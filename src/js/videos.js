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
            const videos = [...responseJSON.items.splice(2)];
            console.log("videos", videos);
            return videos;
        })
        .then((videos) => {
            videos.forEach((currentVideos) => {
                console.log("current videos", currentVideos);
                const videoLi = parser.parseFromString(
                    `<li id=${currentVideos.snippet.title}><p>${currentVideos.snippet.title}</p>
                                    <p>${currentVideos.snippet.description}</p>
                                    <div class="img-container" ><div><a href="https://youtu.be/${currentVideos.id.videoId}" class="vid-link"><img alt="image missing" src=${currentVideos.snippet.thumbnails.default.url} />
                                    <a/></div></div></li>`,
                    "text/html"
                );
                videoList.appendChild(videoLi.body.firstChild);
            });
        });
});