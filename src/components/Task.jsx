import React from 'react'

export const Task = (props) => {
    const handleChecked =  () => {
        props.onChecked(props.item);
    }
  return (
    <div>
        <input type='checkbox' checked={props.item.checked} onChange={handleChecked} id={props.item.taskId}/>
        <label htmlFor={props.item.taskId} >{props.item.taskName}</label>
    </div>
  )
}
