import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Search = ({ item, ...props }) => {
    const [formData, setFormData] = useState({
        taskId: uuidv4(),
        taskName: "",
        checked: false
    })
    const handleChange = (e) => {
        const { taskName, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                taskName: value
            }
        });
    }
    const handleSubmit = (item) => {
        item.preventDefault();
        if (formData.taskName !== "") {
            props.addTask(formData);
            setFormData({
                taskId: uuidv4(),
                taskName: "",
                checked: false
            })
        } else {
            alert("Không để trống!")
        }
    }
    return (
        <form>
            <div className="search">
                <input type="text" placeholder='Add details' className='search-input' onChange={handleChange} value={formData.taskName}/>
                <button type='submit' className='search-button' onClick={handleSubmit} >Add</button>
            </div>
        </form>
    )
}
