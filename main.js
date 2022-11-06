const MOVIE_API_KEY =  `ae8115887a332015cc3739c9ecb9b70d`;
const API_URL = `https://api.themoviedb.org/3/movie/popular?`;
const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;

let movieContaier = document.querySelector('.movie-container');

let modelContainer = document.querySelector('.model-containers');
let close = document.querySelector('.close');
let model = document.querySelector('.model');
let movieTitle = document.querySelector('.movie-title');
let movieDetail = document.querySelector('.movie-detail');

close.addEventListener('click', () => {
    modelContainer.classList = 'model-containers hide';
})


modelContainer.addEventListener('click', () => {
    modelContainer.classList = 'model-containers hide';
})

model.addEventListener('click', () => {
    modelContainer.classList = 'model-containers show';
})


movieContaier.addEventListener('click', (e) => {
    if (e.target.classList[0] == "movie-img") {

    movieDetail.innerHTML = e.target.parentElement.children[0].value;

    movieTitle.innerHTML = e.target.parentElement.children[2].children[0].textContent;

        modelContainer.classList = 'model-containers show';
    }
}) 

const buildTheDom = (results)  => {

    results.forEach( movie => {

        movieContaier.innerHTML += `

        <div class="movie">
        <input type="hidden" value="${movie.overview}">

        <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">

        <div class="info">
            <span class="movie-title">${movie.original_title}</span>
            <div class="counts">
                <div class="vote-average">
                    <span>${movie.vote_average}</span>
                </div>
                <div class="release-date">
                    <span>${movie.release_date}</span>
                </div>
            </div>
        </div>
       </div>

        `

    } )
}

const getMostPopularMovies = async () => {

    const request = await fetch(`${API_URL}api_key=${MOVIE_API_KEY}&page=1`);

    const {results} = await request.json();

    buildTheDom(results);

}

getMostPopularMovies();


