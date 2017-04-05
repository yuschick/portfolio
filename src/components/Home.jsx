import React, {Component} from 'react';
import Icon from './Icon';
import '../styles/home.css';
import classroom from '../images/home-classroom.jpg';
import chocolate from '../images/svgs/icon-chocolate.svg';
import metal from '../images/svgs/icon-metal.svg';
import developer from '../images/svgs/icon-developer.svg';
import instructor from '../images/svgs/icon-instructor.svg';
import ghost from '../images/svgs/icon-ghost.svg';
import dog from '../images/svgs/icon-dog.svg';
import basketball from '../images/svgs/icon-basketball.svg';
import drummer from '../images/svgs/icon-drummer.svg';

class Home extends Component {
    render() {
        return (
            <section className="home-container">
                <div className="headshot-container">
                    <img src={classroom} alt="Dan Yuschick | Front-End Engineering Instructor"/>
                    <div className="slogan-bar">
                        <span>Why do I love what I do?</span>
                        <span>Creativity, Challenge & Change.</span>
                    </div>
                </div>
                <section className="icons-container">
                    <Icon image={instructor} alt="Front-End Engineering Instructor" title="Instructor"/>
                    <Icon image={developer} alt="Front-End Developer" title="Developer"/>
                    <Icon image={dog} alt="Dog Owner" title="Dog Owner"/>
                    <Icon image={ghost} alt="Horror Buff" title="Horror Buff"/>
                    <Icon image={metal} alt="Metalhead" title="Metalhead"/>
                    <Icon image={basketball} alt="Basketball Fan" title="Basketball Fan"/>
                    <Icon image={chocolate} alt="Chocolate Lover" title="Chocolate 💕"/>
                    <Icon image={drummer} alt="Drummer" title="Drummer"/>
                </section>
            </section>
        )
    }
}

export default Home;
