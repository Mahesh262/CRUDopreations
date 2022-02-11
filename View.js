import React from 'react'

const View = (props) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = React.useState(initialFormState)
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    return (
        <>
            <form onSubmit={event => {
                event.preventDefault();
                if (!user.name || !user.username) return
                props.adduser(user)
                setUser(initialFormState)
                console.log(user)
            }}>
                <label>Name</label>
                <input className="form-control" type="text" name="name" onChange={handleInputChange} required />
                <label>Username</label>
                <input type="text" className='form-control' name="username" onChange={handleInputChange} required />
                <button className='btn btn-primary'>Add New  user </button>
            </form>

        </>
    )
}

export default View