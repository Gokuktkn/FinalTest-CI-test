import React, { useState } from 'react'
import "../App.css";
import { Task } from '../components/Task';
import { Search } from '../components/Search';

export const All = () => {
    let [listTask, setListTask] = useState([])
    const handleAddTask = (item) => {
        listTask.unshift(item);
        setListTask([...listTask]);
    }
    const handleChecked = (data) => {
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
        <div>
            <Search addTask={handleAddTask} />
            <div className="list-task">
                {listTask.map((data) => {
                    return <Task item={data} key={data.taskId} onChecked={handleChecked} />
                })}
            </div>
        </div>
    )
}
