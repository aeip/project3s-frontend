import React from 'react';
import '../Styles/Titles/About.scss'

export const About = (props) => {
    const handleClick = () => {
        props.history.push('/');
    }
	return (
        <div className='death'>
            <h1>About Dunwich Manor</h1>

            <h3>Summary</h3>
            <p>stuff about the project</p>

            <h3>Meet the Team</h3>

            <h5>Stasys Meclazcke</h5>
            <img src='https://media-exp1.licdn.com/dms/image/C5635AQExDzxXAPF_VA/profile-framedphoto-shrink_200_200/0?e=1604098800&v=beta&t=UeSyfe22oHU7hotIIm_RpffvNgKm9jXhLSh-oAcUyZk' />
            <p>about you and contributions</p>

            <h5>Woodrow Thompson</h5>
            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQGJYRGcfxyTFg/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=VmiuA1JIERsaTKCkJNewVWWmEfVmogiyDkGAzp0krsQ' />
            <p>Web Designer with multiple years of experience in both digital and traditional arts. Years of experience with Adobe Creative Suite and Graphic Design. Responsible for scripts, providing visual assets, and structuring user interface and layout for gaming elements.</p>
            <h5>Zane Griffin</h5>
            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFmYaZs6x0PLw/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=NysmMPJgymAiI6cqlsf7wFkTlYS0bctarbnN9uKuXZs' />
            <p>about you and contributions</p>
            <button onClick={() => handleClick()}>Back</button>
        </div>
    )
};
