function SharePopcorn () {
    return (
        <div className='Share'>
            Thanks for supporting our efforts!
            <br />
            <br />
            <div className='Share-Popcorn'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    src={require('../assets/img/popcorn-tub-sm.png')}
                                    alt='Small Popcorn' />
                            </td>
                            <td>
                                <img
                                    src={require('../assets/img/popcorn-tub-md.png')}
                                    alt='Small Popcorn' />
                            </td>
                            <td>
                                <img
                                    src={require('../assets/img/popcorn-tub-lg.png')}
                                    alt='Small Popcorn' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                $2
                            </td>
                            <td>
                                $5
                            </td>
                            <td>
                                $10
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button>Donate</button>
            </div>
        </div>
    );
}

export default SharePopcorn;