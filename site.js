/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/
const vue_app = Vue.createApp({
    created() {
        // When the app is created, fetch the movies from movies.json
        fetch('movies.json')
            .then(response => response.json()) // Converts response to JSON
            .then(json => {
                // Add a posterindex property to each movie so we know which poster to show first
                this.movies = json.map(movie => ({ ...movie, posterindex: 0 }));
            });
    },
    data() {
        return {
            movies: [], // Array to store movies from JSON
            title: "2000's Chick Flick Diaries", 
            owner: "Shaili Patel", 
            github: "https://github.com/Shaili-Patel/Movie-Poster" // Link to GitHub
        };
    },
    methods: {
        likeMovie(index) {
            // Increase likes for the movie 
            this.movies[index].likes++;
        },
        dislikeMovie(index) {
            // Increase dislikes for the movie 
            this.movies[index].dislikes++;
        },
        nextPoster(movie) {
            // Move to the next poster for a movie
            movie.posterindex++;
            // If we've reached the last poster, go back to the first
            if (movie.posterindex >= movie.posters.length) {
                movie.posterindex = 0;
            }
        }
    }
});

// Mount the Vue app to the HTML element with id "vue_app"
vue_app.mount("#vue_app");
