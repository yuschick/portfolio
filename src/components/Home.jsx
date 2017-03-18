import React, {Component} from 'react';
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
                    <div className="icon">
                        <img src={instructor} alt="Front-End Engineering Instructor"/>
                        <span>Instructor</span>
                    </div>
                    <div className="icon">
                        <img src={developer} alt="Front-End Developer"/>
                        <span>Developer</span>
                    </div>
                    <div className="icon">
                        <img src={dog} alt="Dog Owner"/>
                        <span>Dog Owner</span>
                    </div>
                    <div className="icon">
                        <img src={ghost} alt="Horror Buff"/>
                        <span>Horror Buff</span>
                    </div>
                    <div className="icon">
                        <img src={metal} alt="Metalhead"/>
                        <span>Metalhead</span>
                    </div>
                    <div className="icon">
                        <img src={basketball} alt="Basketball Fan"/>
                        <span>Basketball Fan</span>
                    </div>
                    <div className="icon">
                        <img src={chocolate} alt="Lover of Chocolate"/>
                        <span>Chocolate 💕</span>
                    </div>
                    <div className="icon">
                        <img src={pizza} alt="All the Pizza"/>
                        <span>All the Pizza</span>
                    </div>
                    <div className="icon">
                        <img src={drummer} alt="Drummer"/>
                        <span>Drummer</span>
                    </div>
                </section>
            </section>
        )
    }
}

export default Home;
