import React from 'react'

 function GenreList({movies,genreFilter,sett}) {
  let arr =  movies.map((movie)=>movie.genre)
  let set = new Set(arr)
  let genreArray = [...set]
  console.log(genreArray)

  function updateGenre(e){
    genreFilter(e.target.value)
  }

  function updateall(value){
    sett(value)
  }
  return (
    <div>
      {
        genreArray.map((genre)=><button id='btn' onClick={updateGenre} value={genre}
        >{genre}</button>)
      }
      <button id='all' value={'all'} onClick={updateall}>All</button>
    </div>
  )
}
export default GenreList
