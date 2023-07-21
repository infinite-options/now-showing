function Header ({ title }) {

    const top = title.split(' ')[0];
    const bottom = title.split(' ')[1];

    return (
        <div className='Header'>
            <div>{top}</div>
            <div>{bottom}</div>
        </div>
    );
}

export default Header;