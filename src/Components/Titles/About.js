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
            <p>Join us for an old school adventure through a haunted mansion! Find your way through and see what secrets are hidden here.... Will you survive or will it drive you mad?</p>
            <br/>
            <p>This game is a group project built by General Assembly students to demonstrate technical skills in React and MongoDB. It also served to show effective teamwork!</p>

            <h3>Meet the Team</h3>

        <div>
            <h5>Stasys Meclazcke</h5>
            <img src='https://media-exp1.licdn.com/dms/image/C5635AQExDzxXAPF_VA/profile-framedphoto-shrink_200_200/0?e=1604098800&v=beta&t=UeSyfe22oHU7hotIIm_RpffvNgKm9jXhLSh-oAcUyZk' />
            <p>Full stack developer with a passion in creating applications, cars, and games. Prior experience including multiple games on Windows store. Created the front end structure and read/wrote data to/from the backend</p>
        </div>
        <div>
            <h5>Woodrow Thompson</h5>
            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQGJYRGcfxyTFg/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=VmiuA1JIERsaTKCkJNewVWWmEfVmogiyDkGAzp0krsQ' />
            <p>Web Designer with multiple years of experience in both digital and traditional arts. Years of experience with Adobe Creative Suite and Graphic Design. Responsible for scripts, providing visual assets, and structuring user interface and layout for gaming elements.</p>
        </div>
        <div>
            <h5>Zane Griffin</h5>
            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFmYaZs6x0PLw/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=NysmMPJgymAiI6cqlsf7wFkTlYS0bctarbnN9uKuXZs' />
            <p>An aspiring software engineer dedicated to full responsive design. Prior experience is in art and design with Adobe Creative Suite. She was responsible for the backend server and assisting with frontend logic. </p>
            <button onClick={() => handleClick()}>Back</button>
        </div>
        </div>
    )
};
