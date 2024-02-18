import React, { useState } from 'react'

function Conditional() {

    const [logged, setLogged] = useState(false)
    const [button,setButton]=useState('Log in')

    const handleLogin = () => {
        setLogged(!logged);
        setButton(button==='Log in'?'LogOut':'Log in')
    }
    
    return (
        <div>
            {logged ?
                <div>Welcome user</div> :
                <div>Please log in</div>
            }
            <button onClick={handleLogin}>{button}</button>
        </div>
    )
}

export default Conditional
