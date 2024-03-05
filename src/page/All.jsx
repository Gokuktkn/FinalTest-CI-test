import React, { useState } from 'react'
import "../App.css";
import { Task } from '../components/Task';
import { Search } from '../components/Search';

export const All = () => {
    let [listTask, setListTask] = useState([{
        taskId: 1,
        taskName: "Do coding challenge",
        checked: false
    },
    {
        taskId: 2,
        taskName: "Do coding challenge",
        checked: true
    }])
    const handleAddTask = (item) => {
        listTask.unshift(item);
        setListTask([...listTask]);
    }
    const handleChecked = (data) => {
        console.log(data)
        listTask = listTask.map(item => {
            if (item.taskId == data.taskId) {
                return {
                    ...item,
                    checked: !item.checked
                };
            }
            return item
        })
        setListTask([...listTask])
    }
    return (
        <>
            <Search addTask={handleAddTask} />
            <div className="list-task">
                {listTask.map((data) => {
                    return <Task item={data} key={data.taskId} onChecked={handleChecked} />
                })}
            </div>
        </>
    )
}
