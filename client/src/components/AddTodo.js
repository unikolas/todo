import React, { useState } from 'react'
import Input from './Input'

const AddTodo = (props) => {
    const [description, setDescription] = useState('')

    const handleChange = (e) => setDescription(e.target.value)

    const onSubmit = async (e) => {
        e.preventDefault()
        if (description !== '') {
            try {
                const body = { description }
                await fetch('/api/todos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                })
                setDescription('')
                props.getTodos()
            } catch (err) {
                console.log(err.message)
            }
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input
                    type='text'
                    enterKeyHint='done'
                    value={description}
                    placeholder="What's on?"
                    style={{ marginBottom: 8 }}
                    onChange={handleChange}
                    autoFocus
                />
            </form>
        </div>
    )
}

export default AddTodo
