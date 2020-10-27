import React, {useState} from 'react';

export const Start = (props) => {
    const [formData, setFormData] = useState(props.character);
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(formData);
        props.history.push('/game/');
    }
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
	return (
        <div className='start'>
            <h1>Dunwich Manor</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={FormData.username} onChange={handleChange} placeholder="Enter username" />
                <br />
                <input type='submit' value='Start' />
            </form>
        </div>
    )
};
