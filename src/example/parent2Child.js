// import Child from './child2Parent'

const Parent = () => {
    const hello = 'Hello from parent'
    return (
        <div className='Name'>
            <Child hay={hello} dua= {'nilai dua'} />
        </div>
    )
}

const Child = ({hay, dua}) => {
    <div className='Child'>
        Parents say {hay} and {dua}
    </div>
}

export default Parent