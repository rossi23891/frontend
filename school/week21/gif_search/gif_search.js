let apiKey = "xlew7rWJpF9rQ2uwjfy4Nqre5t7mXyUS";
const limit = 5;

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("search").addEventListener("click", event => {
        let galleryContent = '';
        event.preventDefault(); //не сабмитим по кнопке
        let searchKey = document.getElementById("key-word").value.trim();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${searchKey}&offset=0&rating=g&lang=en`;
        fetch(url)
            .then(response => response.json())
            .then(pic => {
                for (let i = 0; i < limit; i++) {
                    let img_src = pic.data[i].images.downsized.url;
                    let img_title = pic.data[i].title;
                    galleryContent += `
                    <div class="item col-2 offset-3 my-3">
                        <img class="gif-img" src=${img_src} alt=${img_title}></img>
                        <div>${img_title}</div>
                        <div></div>
                        </div>`;
                }
                document.querySelector(".results").innerHTML = galleryContent;
                document.querySelector("#key-word").value = "";
            })
            .catch(err => {
                console.error(err);
            });
    });
});
