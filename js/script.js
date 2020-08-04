"use script";



const personalMovieDb = {
count: 0,
movies: {},
actors: {},
genres : [],
privat : false,
start: function() {
    personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?','');
 
    while( personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count )) {
     personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
 },
 showMyDb : function (hidden){
    if (!hidden){
        console.log(personalMovieDb);
    }
},
writeYourGenres: function(){
    for(let i= 1; i<=3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`,'');
        personalMovieDb.genres[i-1] = genre;
    }
},
    rememberMyFilms: function (){
        for(let i=0 ; i<2; i++){
            const a = prompt('Сколько фильмов вы уже посмотрели?',''),
                  b = prompt('На сколько оцените его?','');
                  personalMovieDb.movies[a] = b;
        
            if( a != null && b !=null && a !='' && b !='' && a.length <50) {
                personalMovieDb.movies[a] = b;
            }else {
                i--;
            }
        }
    },
    detectPersonalLevel:function (){
        if (personalMovieDb.count < 10){
            console.log('Просмотренно довольно мало фильмов','');
        
        }else if (personalMovieDb.count >= 10 && personalMovieDb.count <30 ){
            console.log('Вы классический зритель','');
        
        }else if(personalMovieDb.count >= 30){
            console.log('Вы киноман','');
        
        }else{
            console.log('Произошла ошибка','');
        }
    }

    
};





