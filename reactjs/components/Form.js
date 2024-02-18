import React, { useState } from 'react';

function Form() {
    const [username, setUsername] = useState({
        name: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsername(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [logged, setLogged] = useState(false);
    const [button, setButton] = useState('Log in');

    const handleLogin = () => {
        setLogged(!logged);
        setButton(logged ? 'Log in' : 'Log out');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username.name);
        console.log('Password:', username.password);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input type="text" name="name" value={username.name} onChange={handleChange} />
                </div>
                <div>
                    Password: <input type="password" name="password" value={username.password} onChange={handleChange} />
                </div>
                <div>
                    {logged ?
                        <div>Welcome user</div> :
                        <div>Please log in</div>
                    }
                    <button onClick={handleLogin} type={logged ? 'submit' : 'button'}>{button}</button>
                </div>
            </form>
        </div>
    );
}
 
export default Form;
