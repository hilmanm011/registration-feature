
const Basic = () => {

    const text = 'Hello text'
    const number = 123
    const array = ['test1', 'test2', 'test3', 'test4']
    const arrOfObj = [
        {
            id: 1,
            name: 'Muhamad'
        },
        {
            id: 2,
            name: 'Hilman'
        },
        {
            id: 3,
            name: 'Namaku'
        },
        {
            id: 4,
            name: 'Namamu'
        }
    ]
    const isChecked = true
    const valueIsNull = null

    return <>
        This Text : {text}
        <br/>
        This Number : {number}
        <br />
        {array.map((v, idx) => (
            <div key={idx}>
                <div>{v}</div>
            </div>
        ))}

        <br />
        This arrOfObj :
        {arrOfObj.map((value, idx)=>(
            
            <div>
                <div key={value.id}></div>
                <div>{value.id}</div>
                <div>{value.name}</div>
                
            </div>

        ))}

        <br />
        This Ternary Condition:
        {isChecked ? <input/> : null}
        <br />
        This value not show: {valueIsNull}

        
        </>
  }
  
  export default Basic