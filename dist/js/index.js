console.log("connected to JavaScript"),document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".video-list")[0],t=new DOMParser;fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC167j-qCguSgHu20raA211w&maxResults=20&key=AIzaSyBzxoCuk92CeHdMPW08fwVwt8iPmRwpMkE").then(e=>e.json()).then(e=>{const t=[...e.items];return console.log("videos",t),t}).then(i=>{i.forEach(e=>{t.parseFromString(`<li id=${currentVideo.snippet.title}><p>${e.snippet.title}</p>\n                                    <p>Level: ${e.snippet.description}</p>\n                                    <div class="img-container" ><div><img alt="image missing" src=${e.snippet.thumbnails.default.url} />\n                                    </div></div></li>`,"text/html")}),e.appendChild(videoLi.body.firstChild)})});