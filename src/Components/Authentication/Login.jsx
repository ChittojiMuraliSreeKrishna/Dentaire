import React, { useState } from 'react'

const Login = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [signup, setSignup] = useState(false);

    return (
        <div className="appoint-container">
            <section>
                <div className='appoint-header'>
                    <h3 className="">{signup ? "Signup" : "Login"}</h3>
                    <button className='mt-5 btn_cross' onClick={() => props.onClose(false)}>x</button>
                </div>

                <div className="appoint-body">
                    <div className='appoint-body-inpts'>
                        {signup ? <>
                            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required />
                            <input type="number" maxLength={10} placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            <input type="email" placeholder="Email { someone@example.com }" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="text" placeholder="Password" value={password} minLength={4} onChange={(e) => setPassword(e.target.value)} required />
                            <input type="text" placeholder="Confirm Password" value={cPassword} minLength={4} onChange={(e) => setCPassword(e.target.value)} required />
                        </>
                            :
                            <>
                                <input type="email" placeholder="Email { someone@example.com }" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <input type="text" placeholder="Password" value={password} minLength={4} onChange={(e) => setPassword(e.target.value)} required />
                            </>}
                        <button className='theme-btn btn-fill form-btn mt-5'>{signup ? "Signup" : "Login"}</button>
                    </div>
                    <div className='appoint-body-info'>
                        <div>
                            <h3>We are more than just a company</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="appoint-footer">
                    <p>{signup ? "Already A User ?" : "Not An User ?"}
                        <button onClick={() => setSignup(!signup)}>
                            {signup ? "Login" : "Signup"}
                        </button>
                    </p>
                </div>
            </section >
        </div >
    )
}

export default Login