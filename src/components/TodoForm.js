import React from 'react';

const Form = (props) => {
    return (
        <form>
            <input 
                id='newtask'
                name='task'
                type='text'
                placeholder='Add a new task to the list'
                onChange={props.onInputChange}
            />
            <p>
                <button id='submit' onClick={props.onSubmit}>
                    Add a Task
                </button>
            </p>
            <p>
                <button id='clear' onClick={props.onClear}>
                    Clear completed task
                </button>
            </p>
        </form>
    )
}

export default Form;