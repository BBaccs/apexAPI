class Omdbapi {
    constructor(){
        this.api_key = 'thewdb';
    }

    async getMovie(movieTitle) {
        const moviesResponse = await fetch(`http://www.omdbapi.com/?S=${movieTitle}&apikey=${this.api_key}`);
        const movies = await moviesResponse.json();
        return movies;
    }
}

