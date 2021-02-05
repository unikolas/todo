import React, { Fragment, useState } from 'react'
import Button from './Button'
import Input from './Input'

const InputTodo = () => {
    const [description, setDescription] = useState('')
    const [isSending, setIsSending] = useState(false)

    const handleChange = (e) => setDescription(e.target.value)

    const onSubmit = async (e) => {
        e.preventDefault()
        if (description !== '') {
            try {
                const body = { description }
                setIsSending(true)
                await fetch('/api/todos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                })
                setDescription('')
                window.location = '/'
            } catch (err) {
                console.log(err.message)
            }
            setIsSending(false)
        }
    }

    return (
        <Fragment>
            <form className='d-flex gap-3 mt-4' onSubmit={onSubmit}>
                <Input
                    type='text'
                    value={description}
                    onChange={handleChange}
                    placeholder="What's on?"
                    autoFocus
                />
                <Button onClick={onSubmit}>Add</Button>
            </form>
        </Fragment>
    )
}

export default InputTodo
