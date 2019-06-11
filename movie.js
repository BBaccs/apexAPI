const ui = new UI();
const omd = new Omdbapi();
const search = document.querySelector('#searchMovie');

search.addEventListener('keydown', function(){
    ui.movieDisplay();
    const movieTitle = search.value;
    omd.getMovie(movieTitle)
    .then(function(movies){
     console.log(movies.Search);
        for (let i = 0; i < movies.Search.length; i++) {
            const movie = movies.Search[i];
            ui.displayMovies(movie);
        } 
    })
    .catch(err => console.log(err));
})

