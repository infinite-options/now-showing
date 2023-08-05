import React, { useState, useEffect } from "react";
import Menu from "./font/components/Menu.js";


function Test() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=916893c3e71b0b37e324a142b99253f0&primary_release_year=1972&with_original_language=en&with_origin_country=US&with_text_query=the+godfather", {
            headers: {
                "content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson.results);
            });
    };



    return (
        <div>
            <button onClick={getData}>Add</button>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                allignItems: "center",
                position: "relative",
            }}>

                <br />
                <Menu data={data} />
            </div>
        </div>


    );
}

export default Test;