import React, { useState } from 'react'
import "../App.css";
import { Task } from '../components/Task';
import { Search } from '../components/Search';

export const Active = () => {
    let [listActive, setListActive] = useState([]);
    const handleAddTask = (item) => {
        listActive.unshift(item);
        setListActive([...listActive]);
    }
    const handleChecked = (data) => {
        listActive = listActive.map(item => {
            if (item.taskId == data.taskId) {
                return {
                    ...item,
                    checked: !item.checked
                };
            }
            return item
        })
        setListActive([...listActive])
    }
    return (
        <div>
            <Search addTask={handleAddTask} />
            <div className="list-task">
                {listActive.map((data) => {
                    return <Task item={data} key={data.taskId} onChecked={handleChecked} />
                })}
            </div>
        </div>
    )
}
