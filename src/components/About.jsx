import React, {Component} from 'react';
import headshot from '../images/about-headshot.jpg';
import resume from '../files/danyuschick-resume.pdf';

class About extends Component {
    render() {
        return (
            <div>
                <div className="headshot-container">
                    <img src={headshot} alt="Dan Yuschick"/>
                    <a className="download-link" href={resume} target="_blank"><img src="https://freeiconshop.com/wp-content/uploads/edd/pdf-flat.png" alt="Download Resume"/></a>
                </div>
                <article className="about-section">
                    <header className="is-block-header">
                        <h2>About Me</h2>
                    </header>
                    <p>My passion for front‐end development began with design which has served as a beneficial compliment to my skillset as I began working with more front‐end technologies. With a continued inspiration to learn, I stay active with personal projects and in various Meetup groups by presenting on a range of topics. This interest in speaking and sharing with the development community lead me to teaching where I can continue growing not only as a developer but as a leader that is able to utilize the extent of my background.</p>
                    <p>Outside of development and design though, I love keeping up with other interests such as playing basketball, trying to wear out my dog, Abbie, playing video games, drumming, reading, and sampling local breweries. I'm also fairly certain I've seen that horror movie you can't quite recall and can finish that Archer quote that had you in tears.</p>
                </article>
                <article className="about-section">
                    <header className="is-block-header">
                        <h2>Experience</h2>
                    </header>
                    <p>My journey into the world of development began through design. Growing up playing in bands, I found my interest in the field when I took it upon myself to design logos and merchandise which then segwayed into designing and building our own websites. This was before Myspace, Facebook, and Soundcloud kind of removed the need for a custom site. However, this self-taught experience landed me various freelance opportunities and with this background I made the move from Pennsylvania to Raleigh in 2009.</p>
                    <p>Upon becoming another Yankee transplant in the area, I worked several contract and entry-level development positions which allowed me to further my skillset to include more JavaScript, jQuery, and an appreciation for accessibility. Ultimately, after a few years with the company, I was promoted to Lead Developer with DeusM where I was primarily tasked with building a custom responsive framework to replace their existing but dated structure. Additionally, this role allowed me to work closely with the design team, train onboarding developers, and build additional internal tools. But all good things must come to an end and after four years, I decided to leave my work-from-home position and lieu of a fast-paced digital agency.</p>
                    <p>My time spent working at Centerline in their agency setting was exciting. I found that I preferred the faster pace of work and the dynamic range of project technologies. In this role I was able to further my use of JavaScript by digging into numerous libraries and packages and also delve into the design-driven side of SVG animation. This is where my SVG library,
                        <a href="https://github.com/yuschick/SnapFoo" target="_blank">SnapFoo</a>, was born. I gained valuable experience not only with front-end development but with soft skills of working in larger teams, interacting with clients, and developing within an agile environment.</p>
                    <p>I later spent some time working in the insurance and financial industries where I found were not the most compatible environments with my working style or personality. But during these and all of my previous roles, I was an active member in the local Meetup community by attending and speaking at various events. This interest in working with others is what ultimately led me to probably my biggest risk since moving in 2009 - becoming the Front-End Engineering Instructor at The Iron Yard. But with great risk comes great reward and that is what I have found in this role. It serves as a consistent, personal challenge with great satisfaction in working with and getting to know each class. I have found a good balance in this role between the opportunities to work with new technologies and revisit fundamentals to become a better rounded developer.</p>
                    <p>I don’t know where this will all lead me next but if there’s one thing I’ve learned it’s that my willingness to step outside of my comfort zone has yielded some of my most amazing experiences.</p>
                </article>
                <article className="about-section">
                    <header className="is-block-header">
                        <h2>Goals</h2>
                    </header>
                    <p>Professionally, my goals have remained relatively unchanged over the years. I look for opportunities that will allow me to grow, learn, and be around other smart and driven people. However, an element of this that I have grown to focus more heavily on is the importance of actually using vacation time and separating from my work once in awhile. I can easily become invested in a project and sacrifice life outside of work so I aim to create a better balance. I had a previous goal of becoming more involved with the development community and speaking more at area events so the move to become a Front-End Engineering Instructor has fallen nicely into that and has been amazing experience.</p>
                    <p>Personally, to follow up on the work/life balance goal from above, I have a love for traveling and plan on doing much more of that in the coming year. For about 12+ years, I have been fascinated by the Scandinavian region and in 2017 I hope to finally take my dream vacation hopping from country to beautiful country. I have had the chance to visit Helsinki and fell in love so I am eagerly anticipating the chance to visit again and interested in hearing about any opportunity that would allow me to relocate to the city. On a smaller scale, I would like to visit a few new NBA arenas this season and continue learning more about the world of watchmaking. And as always, I aim to continue keeping my dog, Abbie, active enough to remain happy and healthy.</p>
                </article>
            </div>
        )
    }
}

export default About;
