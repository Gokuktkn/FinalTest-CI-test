import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Search = ({ item, ...props }) => {
    const [formData, setFormData] = useState({
        taskId: uuidv4(),
        taskName: "",
        checked: false
    })
    const handleChange = (e) => {
        formData.taskName = e.target.value;
        setFormData(formData);
        console.log(formData);
    }
    const handleSubmit = (item) => {
        item.preventDefault();
        if (!item.target.value) {
            alert("Không để trống")
        } else{
            props.addTask(formData);
            setFormData({
                taskId: uuidv4(),
                taskName: "",
                checked: false
            })
        }
    }
    return (
        <form>
            <div className="search">
                <input type="text" placeholder='Add details' className='search-input' onChange={handleChange}/>
                <button type='submit' className='search-button' onClick={handleSubmit} >Add</button>
            </div>
        </form>
    )
}
