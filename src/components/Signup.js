function Signup ({ flag }) {
    return (
        <div>
            <div className='Signup'>
                {flag ? (
                    <><button>Login</button><br /></>
                ) : (<></>)
                }
                <button>Sign Up for Free!</button>
            </div>
            <div>
                <ul className='Signup-List'>
                    <span className='Signup-List-Title'>Why Sign Up?</span>
                    <li>&nbsp; Save your Lists</li>
                    <li>&nbsp; Save your Movie Ratings</li>
                    <li>&nbsp; Find Movies by Genre, Actor or Style</li>
                    <li>&nbsp; Share Lists with Friends</li>
                </ul>
            </div>
        </div>
    );
}

export default Signup;