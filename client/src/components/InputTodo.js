import React, { Fragment, useState } from 'react'

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
                await fetch('/todos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                })
                setDescription('')
                // window.location = '/'
            } catch (err) {
                console.log(err.message)
            }
            setIsSending(false)
        }
    }

    return (
        <Fragment>
            <form className='d-flex gap-3 mt-4' onSubmit={onSubmit}>
                <input
                    className='form-control '
                    type='text'
                    value={description}
                    onChange={handleChange}
                    autoFocus
                />
                <button className='btn btn-success' onClick={onSubmit}>
                    {isSending ? 'Adding...' : 'Add'}
                </button>
            </form>
        </Fragment>
    )
}

export default InputTodo
