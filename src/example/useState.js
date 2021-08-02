import { useState } from "react";

const VolumeAir = () => {
    const [gelas, setIsiGelas] = useState(0) //dalam liter

    const costumHook = () => {
        setIsiGelas(prev => prev + 1)
        alert('Ditambahkan')
    }
    return (
        <div className='Name'>
            Isi gelas {gelas} liter
            <br />
            <button onClick={() =>costumHook()}>
                Ubah isi volume
            </button>
        </div>
    )
}
export default VolumeAir