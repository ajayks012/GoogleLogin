import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'


function Login() {

    const [login, setLogin] = useState('')

    const handleResposnse =
        response => {
            if ('tokenId' in response) {
                if (response && response.tokenId) {
                    localStorage.setItem('_Gresponse', JSON.stringify(response))
                    const IdToken =
                        response && response.tokenObj && response.tokenObj.id_token
                    setLogin(IdToken)
                }
            }
        }
        console.log(login)

    return (
        <>
            <GoogleLogin
                clientId="64987491940-fajdoagc1n7k1s0m4f0f7krjgfduepd5.apps.googleusercontent.com"
                buttonText="Login using Google"
                onSuccess={handleResposnse}
                onFailure={handleResposnse}
                cookiePolicy='single_host_origin'
            />
        </>
    )
}

export default Login
