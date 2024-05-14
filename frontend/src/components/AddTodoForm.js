import React, { useState } from 'react';
import axios from 'axios';

const AddTodoForm = () => {
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('/api/todos', {
                title,
                deadline,
            });
            console.log('Todo created:', response.data);
            // Aquí podrías actualizar la lista de tareas después de agregar una nueva
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    };

    return (
        <div>
            <h2>Add Todo</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                <label>Deadline:</label>
                <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} required />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodoForm;
