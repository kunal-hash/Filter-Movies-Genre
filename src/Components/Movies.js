import React from 'react'

export default function Movies({movies}) {
  return (
    <div id='table-div'>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {
          movies.map((movie)=>
          <tr>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
          </tr>)
            }
        </tbody>
      </table>
    </div>
  )
}
