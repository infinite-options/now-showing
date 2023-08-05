import React from "react";
import MenuItem from "./MenuItem";
import "./Display.css";

function Menu({data}) {
    return (
        <div>
            <div className="display"></div>
            {data.length > 0 ? (
                data.map((movie) =>(
                    <MenuItem
                        key={movie.id}
                        movie={movie}

                    />
                ))
            ) : (
                <p> No Movies Available.</p>
            )}
        </div>
    )
}

export default Menu;