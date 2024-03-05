import React, { useState } from 'react'
import { Task } from '../components/Task'
import "../App.css";

export const Completed = () => {
  let [listCompleted, setListCompleted] = useState([
    {
      taskID: 1,
      taskName: "anime",
      checked: true
    },
    {
      taskID: 2,
      taskName: "anime",
      checked: true
    }
  ])
  const handleChecked = (data) => {
    listCompleted = listCompleted.map(item => {
      if (item.taskId == data.taskId) {
        return {
          ...item,
          checked: !item.checked
        };
      }
      return item
    })
    setListCompleted([...listCompleted])
  }
  return (
    <div className="list-task">
      {listCompleted.map((data) => {
        return (
          <div className="task">
            <Task item={data} key={data.taskID} onChecked={handleChecked} />
            <button>Del</button>
          </div>)
      })}
      <div className="delete-all">
        <button>Delete all</button>
      </div>
    </div>
  )
}
