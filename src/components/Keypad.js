function Keypad(props) {
    function handleChange(){
        console.log('Entering password...')
    }
    
    return(
    
        <input
        type= "password"
        name= "password"
        onChange= {handleChange}
        placeholder="Enter Password..."
        />
    

    )}

    export default Keypad