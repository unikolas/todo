const todo = {}

todo.getAll = async () => {
    try {
        const response = await fetch('/api/todos')
        const jsonData = await response.json()
        return jsonData
    } catch (err) {
        console.log(err.message)
    }
}

todo.delete = async (todo) => {
    try {
        await fetch(`/api/todos/${todo.id}`, {
            method: 'DELETE',
        })
    } catch (err) {
        console.log(err.message)
    }
}

todo.updateStatus = async (todo) => {
    const status = todo.status === 'todo' ? 'completed' : 'todo'
    try {
        const body = { status }
        await fetch(`/api/todos/${todo.id}/update-status`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
    } catch (err) {
        console.log(err.message)
    }
}

export default todo
