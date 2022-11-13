import {getProjectHtmlString} from './app.js';


export const projects = [
    {
        name: "Diner App",
        link: "https://bensdinerapp.netlify.app/",
        github: "test",
        image: "istockphoto-956025576-612x612.jpg"
    },
    {
        name: "Password Generator",
        link: "https://getpasswordbyben.netlify.app/",
        github: "",
        image: "expressvpn-password-guide-two.jpg"
    },
    {
        name: "RGB Color Generator",
        link: "https://benallington-rba-generator.netlify.app",
        github: "test",
        image: "html-color-codes-color-wheel-analogous-thumb.png"
    },
    {
        name: "To Do List",
        link: "https://benallington-rba-generator.netlify.app",
        github: "test",
        image: "twitterlists-TA.webp"
    },
    {
        name: "Unit Converter",
        link: "https://benunitconverter.netlify.app",
        github: "test",
        image: "istockphoto-533838860-612x612.jpg"
    }
]


export const array = [
{
    id: 0,
    category: 'about',
    htmlString: `
    <div class="section-info">
    <h2 class="section-h2">About</h2>
    <p class="section-p">Hi, i'm Ben, an aspiring Front-End Web Developer based in the UK.</p>
    <p class="section-p">I began to code in 2021 and started with languages such as HTML, CSS and Javascript. Since learning to code, I have always enjoyed the process of problem solving and the feeling of achievement when you manage to solve the outcome you were working towards.</p>
    <p class="section-p">Looking back prior to when I started to code, I believe having the experience of creating formulas within Excel and coding VBA Macros gave myself a better understanding of what is required to learn Javascript etc.</p>                      
    <p class="section-p">I am currently working towards a certificate of completion from Scrimba.com. This site covers all sections towards being a Front-End Web Developer by teaching HTML,CSS,Javascript and React.</p>   
    <p class="section-p">Feel free to head over to the Projects section to see the sites I have made so far!</p>   
    </div>`
},
{
    id: 1,
    category: 'contact',
    htmlString: `
    <div class="section-info">
        <div class="contact-items">

            <a href="mailto:benallington1995@gmail.com"><i class="fa-solid fa-envelope contact"></i></a>
            <a href="" target="_blank"><i class="fa-brands fa-linkedin contact"></i></a>
            <a href="https://twitter.com/benallington" target="_blank"><i class="fa-brands fa-twitter contact"></i></a>
            <a href="https://discordapp.com/users/Ben#0462/" target="_blank"><i class="fa-brands fa-discord contact"></i></a>
            <a href="https://github.com/BenAllington95/BenAllington95" target="_blank"><i class="fa-brands fa-github contact"></i></a>
        
        </div>

        
    </div>`
},
{
    id: 2,
    category: 'projects',
    htmlString: `
    <div class="section-info">
        <div class="project-items">
            ${getProjectHtmlString()}
        </div>
    </div>`
}]