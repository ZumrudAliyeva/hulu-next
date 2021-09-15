const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en=US`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMysteryMovies: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFiMovies: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWesternMovies: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimationMovies: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTVMovies: {
        title: 'TV Movie',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchTopRatedMovies: {
        title: 'TopRated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },

}