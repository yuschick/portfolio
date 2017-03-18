import React, {Component} from 'react';
import Icon from './Icon';
import '../styles/home.css';
import classroom from '../images/home-classroom.jpg';
import chocolate from '../images/icon-chocolate.png';
import pizza from '../images/icon-pizza.png';
import metal from '../images/icon-metal.png';
import developer from '../images/icon-developer.png';
import instructor from '../images/icon-instructor.png';
import ghost from '../images/icon-ghost.png';
import dog from '../images/icon-dog.png';
import basketball from '../images/icon-basketball.png';
import drummer from '../images/icon-drummer.png';

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
                    <Icon image={pizza} alt="All the Pizza" title="All the Pizza"/>
                    <Icon image={drummer} alt="Drummer" title="Drummer"/>
                </section>
            </section>
        )
    }
}

export default Home;
