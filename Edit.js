import React from 'react'

const Edit = (props) => {
    const [user, SetUser] = React.useState(props.currentUser)
    React.useEffect(
        () => {
            SetUser(props.currentvalue)

        },
        [props]
    )
    const handleINputChange = event => {
        const { name, value } = event.target
        SetUser({ ...user, [name]: value })
    }
    return (
        <form onSubmit={event => {
            event.preventDefault();
            props.updateUser(user.id, user)
        }}>
            <label>Name</label>
            <input className="form-control" type="text" name="name" onChange={handleINputChange} />
            <label>userName</label>
            <input className="form-control" type="text" name="username" onChange={handleINputChange} />
            <button className='btn btn-success'>Update</button>
            <button onClick={() => props.setEditing(false)} className="btn btn-muted">Cancel</button>
        </form>

    )
}

export default Edit