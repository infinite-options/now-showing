import React, {useState}from "react";

function Test2() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch("api.json")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json)
            });
};

return(
    <div style={{color:"white"}}>
        <button onClick={getData}>Add</button>
        <br/>
        {/*<pre>{JSON.stringify(data,null,2)}</pre> */}

        <div>
            <ul>
                {data.map((item) => (
                    <li>{item.title}</li>
                    ))}
            </ul>
        </div>
    </div>
);
}

export default Test2;