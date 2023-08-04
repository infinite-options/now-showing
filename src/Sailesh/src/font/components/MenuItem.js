import React from "react";

function MenuItem({
    movie: {
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        vote_average,
    },
}) {
    return (
        <div
            style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "8px",
                display: "flex",
                paddingInline: "5px",
                flexDirection: "column",
                fontSize:"25px",
                justifyContent: "space-between",
                color:"white",
            }}
        >
            <div>
                <h3>{original_title}</h3>
                <p>{overview}</p>
                <p>popularity: {popularity}</p>
                <img height={300} width={300} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={original_title}/>
                <p>Release Date: {release_date}</p>
                <p>Vote Average: {vote_average}</p>
            </div>
            
        </div>
    );
}
export default MenuItem;