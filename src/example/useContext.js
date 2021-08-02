import { createContext, useContext, useState } from 'react';
const helloContext = createContext('')

const Parent = () => {
    const hello = 'hello from parent'
    const [value, setValue] = useState('')
    return (
        <div>
            <helloContext.Provider value={{ hello, value, setValue }}>
                <ChildA hay={hello}/>
            </helloContext.Provider>
        </div>
    )
}

const ChildA = ({ hay }) => {
    const { hello } = useContext(helloContext)
    return (
        <div>
            this parent {hello}
            <br />
            
            <ChildB />
        </div>
    )
}

const ChildB = () => {
    const { hello, value, setValue } = useContext(helloContext)
    return (
        <div className='Child'>
            this from child B, Parent say {hello}
            <br />
            value = {value}
            <br/>
            <input value ={value} onChange={(e)=> setValue(e.target.value)} />
        </div>
    )
}

export default Parent