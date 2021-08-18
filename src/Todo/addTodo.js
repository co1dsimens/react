import React, {useState} from 'react'
import PropTypes from 'prop-types'

const style = {
    btn: {
        padding : '5px',
        margin : '0 20px',
        background: 'rgba(47, 121, 111, 0.652)',
        borderRadius: '10px',
    },
    input: {
        borderRadius: '5px',   
        display: 'block',
        background: '#6780ad',
        width: '80%',
        height: '25px',
        color: '#fff'
    }
}

function useInputValue(defaultValue = ' ') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(' '),
        value: () => value
    }
    
}

function AddTodo({ onCreate }) {
    const input = useInputValue(' ')
    
    function submuitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }
    
    return(
        <form style={{ display:'flex', margin : ' 10px'}} onSubmit={submuitHandler}>
            <input  {...input.bind}  />
            <button type='submit'style = {style.btn} >Add Todo</button>
        </form>
    )

}
AddTodo.propTypes ={
    onCreate: PropTypes.func.isRequired
}

export default AddTodo