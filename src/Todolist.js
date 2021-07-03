import React from 'react';

const Todolist = (props) => {

    return (
        <>
            <div className="todo_style"  >
                <li  >{props.text}</li>
                <button className="btn1" onClick={() => {
                    props.onSelect(props.id);
                }} >Del</button>

               </div>
        </>
    )
}

export default Todolist;