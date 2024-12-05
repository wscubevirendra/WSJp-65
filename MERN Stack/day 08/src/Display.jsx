import React from 'react'

export default function Display({ movies }) {

    return (
        <div className="container-xl mt-4">
            <div className="row">
                {
                    movies.map((data, index) => {
                       
                        return (
                            <div key={index} className="card  col-3">
                                <img style={{height:"250px"}} src={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`} className="card-img-top " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}
