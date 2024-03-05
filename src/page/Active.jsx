import React, { useState } from 'react'
import "../App.css";
import { Task } from '../components/Task';

export const Active = () => {
    let [listActive, setListActive] = useState(
        [{
            taskId: 1,
            taskName: "Do coding challenge",
            checked: false
        },
        {
            taskId: 2,
            taskName: "Do coding challenge",
            checked: true
        }]
    )
    const handleChange = () => {
        setListActive([...listActive]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form>
            <div className="search">
                <input type="text" placeholder='Add details' className='search-input' />
                <button type='submit' className='search-button' onClick={handleSubmit}>Add</button>
            </div>
            <div className="list-task">
                {listActive.map((data) => {
                    return <Task item={data} key={data.taskId} onChange={handleChange} />
                })}
            </div>
        </form>
    )
}
