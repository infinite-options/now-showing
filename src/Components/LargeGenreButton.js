import './LargeGenreButton.css'
function LargeGenreButton({Name}){
    return(
        <div>
            <button className="Large-Genre-Button">
                {Name}
            </button>
        </div>
    )
}

export default LargeGenreButton;