import { createContext, useContext, useState, useEffect } from "react"



const StudyCase = ({email, password}) => {


    const [inputEmail, setEmail] = useState('')
    const [inputPassword, setPassword] = useState('')
    const [countwrongPass, setCountWrong] = useState(0)
    const [isBlocked, setBlocked] = useState(false)
    
    console.log(inputEmail, inputPassword);
    const handleSubmit = () => {

        if (inputPassword === password && inputEmail === email) return alert ('login success')

        if (inputEmail !== email) return alert('email salah')

        if (inputEmail === email && inputPassword !== password && countwrongPass < 3) {
            setCountWrong(prev => prev + 1)
            alert(`Password salah sebanyak ${countwrongPass + 1}`)
        }
        // alert('oke')
    }


    useEffect(() => {
        if (countwrongPass === 3) {
            //akun ke blokir
            setBlocked(true)
            return alert('Password salah 3x, akun anda terblokir')
        }
    }, [countwrongPass])

    
    return (
        <>
            {isBlocked ? <div style={{backgroundColor:"red"}}>
                <h1>Akun ditangguhkan</h1>
            </div> : <div>
                    Email: <input value={inputEmail} onChange={(e) => setEmail(e.target.value)} />
                    
            <br/>
                
            Password: <input value={inputPassword} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button onClick={()=>handleSubmit()}>Hit Me</button>
            </div>
            }
            
            
        </>
                
            
        
        
    )
}

export default StudyCase