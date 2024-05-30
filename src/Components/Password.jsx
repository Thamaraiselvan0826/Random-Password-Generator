import { useState } from 'react'
import './Password.css'
const Password = () => {



    const [length, setLength] = useState(8);
    const [upperCase, setUpperCase] = useState(true);
    const [lowerCase, setLowerCase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymnols] = useState(true);
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)


    const generatePassword = () => {
        let char = "";
        if (upperCase) char += "ABCDEFCHIJKLMNOPQRSTUVWXYZ";
        if (lowerCase) char += "abcdefghijklnopqrstuvwxyz";
        if (numbers) char += "1234567890";
        if (symbols) char += "!@#$%^&*()_+<>?";

        let generatePassword = "";
        for (let i = 0; i < length; i++) {
            const random = Math.floor(Math.random() * char.length);
            generatePassword += char[random]
        }
        setPassword(generatePassword);
        setError(null);
    }

    const clipbord = () => {
        setError(navigator.clipboard.writeText(password))
    }

    const onKeyDown =(e)=>{
        if(e.key === "Enter"){
            generatePassword()
        }
        console.log(onKeyDown);
    }
    
    return (
        <>
            <div className="container">
                <div className="text">
                    <h1>Random Password Generatorx</h1>
                </div>
                <div className="inputs">
                    <div className="input-box">
                        <label htmlFor="number">Password Length</label>  <br />
                        <input type="number" id="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
                    </div>
                    <div className="check-box">
                        <input type="checkbox" id="upper" checked={upperCase} onChange={(e) => setUpperCase(e.target.checked)} />
                        <label htmlFor="upper">Include Uppercase</label>
                    </div>
                    <div className="check-box">
                        <input type="checkbox" id="lower" checked={lowerCase} onChange={(e) => setLowerCase(e.target.checked)} />
                        <label htmlFor="lower">Include Lowercase</label>
                    </div>
                    <div className="check-box">
                        <input type="checkbox" id="num" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} />
                        <label htmlFor="num">Include Numbers</label>
                    </div>
                    <div className="check-box">
                        <input type="checkbox" id="symbols" checked={symbols} onChange={(e) => setSymnols(e.target.checked)} />
                        <label htmlFor="symbols">Include Symbols</label>
                    </div>
                    <div className='generate'>
                    <button onClick={generatePassword} onKeyDown={onKeyDown}>Generate Password</button>
                    </div>
                </div>
                <div className="buttons">
                    <input type="text" id="" value={password} />
                    <button type="button" onClick={clipbord}>Copy</button>
                </div>

                {
                    error !== null && (
                        <div className="copied">
                            <span >Password is copied</span>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Password

