let movies = require ('./movies.js') 


let moviesDH= {
        
    
    listMovies: function (movies){
    movies.map(movie =>console.log(movie.title))
    },
    
    searchMovie: function (dato){
        
        dato >= 0 ?
        let detalle = movies.filter(function (dato){
            return dato == movies.id;
        })
        :
        let detalle = movies.filter(function (dato){
            return dato == movies.titulo;
        })
    }
}

console.log(moviesDH.listMovies(movies));

console.log(moviesDH.searchMovie('Titanic'));