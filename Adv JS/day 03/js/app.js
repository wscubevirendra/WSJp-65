const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const parent = document.querySelector(".parent");
const inp = document.querySelector("#inp")


const getMovies = async (url) => {
    const responce = await fetch(url);
    const data = await responce.json();
    showMovies(data.results)
}

getMovies(APIURL)


const showMovies = (result) => {
    parent.innerHTML = ""
    result.forEach(
        (data, index) => {
            let poster = data.poster_path == null ?   "dummy.jpg" : IMGPATH + data.poster_path 
            const box = document.createElement('div');
            box.classList.add('card');
            box.innerHTML = `
             <img src="${poster}" alt="">
                <div class="overlay">
                    <h2>${data.title}</h2>
                    <span>${data.vote_average}/10</span>
                    <span>Overview:</span>
                    <p>
                       ${data.overview}
                    </p>
                </div>
            `

            parent.appendChild(box)

        }
    );
}



inp.addEventListener(
    'keyup',
    (event) => {
        if (event.target.value != "") {
            getMovies(SEARCHAPI + event.target.value)
        } else {
            getMovies(APIURL)

        }
    }
)
