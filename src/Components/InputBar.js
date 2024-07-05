function InputBar({Label}){
    return(
        <div className="InputBar">
            <input placeholder={Label} style={
                {backgroundColor: 'rgba(141, 170, 200, 22%)', border: 'none', width: '292px', borderRadius: '100px', padding: '10px', color: 'rgba(255, 255,255, .38)'}
                }></input>
        </div>
    )
}

export default InputBar;