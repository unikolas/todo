import React, { Fragment, useState } from 'react'

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description)

    const updateTodo = async (e) => {
        e.preventDefault()
        if (description !== '') {
            try {
                const body = { description }
                await fetch(`/api/todos/${todo.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                })
                // setDescription('')
                window.location = '/'
            } catch (err) {
                console.log(err.message)
            }
        }
    }

    return (
        <Fragment>
            <button
                className='btn btn-sm btn-outline-secondary'
                type='button'
                data-bs-toggle='modal'
                data-bs-target={`#id${todo.id}`}
            >
                Edit
            </button>

            <div
                className='modal fade'
                id={`id${todo.id}`}
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
                // onClick={() => setDescription(todo.description)}
                // style={{ 'pointer-events': 'none !IMPORTANT' }}
            >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>
                                Edit todo ID: {todo.id}
                            </h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                                onClick={() => setDescription(todo.description)}
                            ></button>
                        </div>
                        <div className='modal-body'>
                            <input
                                type='text'
                                className='form-control'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                data-bs-dismiss='modal'
                                onClick={() => setDescription(todo.description)}
                            >
                                Close
                            </button>
                            <button
                                type='button'
                                className='btn btn-primary'
                                onClick={(e) => updateTodo(e)}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo
