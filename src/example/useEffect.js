import { useState, useEffect } from "react"

const VolumeAirEffect = () => {

    const [gelas, setIsiGelas] = useState(0) //dalam Liter
    // const [piring, setState] = useState(0) //dalam Liter
    const [perubahan, setItungPerubahan] = useState(null)


    useEffect(() => {
        setItungPerubahan(prevState => prevState + 1)
    }, [gelas])

    return (
        <div className='Name'>
            Isi gelas {gelas} liter
            <br></br>
            <button onClick={() => setIsiGelas(6)}>ubah jadi 6</button>
            
            <button onClick={() => setIsiGelas(12)}>ubah jadi 12</button>
            <br/>
            Isi gelas berubah sebanyak {perubahan - 1}
            <br/>
            react merender sebanyak {perubahan}

        </div>
    )
}

export default VolumeAirEffect