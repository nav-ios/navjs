import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import useMemo from "../img/usememo.jpg"
import vpn from "../img/vpn.png"
import cloud from "../img/cloud.png"
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Nav",
    lastName: "Rana",
    initials: "navJS", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'powered by pods & npm'
        },
        {
            emoji: '🧑🏻‍💻',
            text: 'worked on 30+ apps and websites'
        },
        {
            emoji: '🌎',
            text: 'based in 🇮🇳🇨🇦'
        },
        {
            emoji: "🐈",
            text: "Dad to a wonderful daughter and 22 stray cats"
        },
        {
            emoji: "📧",
            text: "hi@navjs.co"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/nav.rana",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/navi.rana1015",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/nav-ios/mobile-coding-challenge",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/navrana/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.youtube.com/@NavJS-zo9hy",
            icon: "fa fa-youtube",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: `Hello! I'm Navdeep, a dedicated full-stack web developer and native iOS app developer with over 8 years of experience with a strong passion for JavaScript libraries. My expertise spans across front-end and back-end development, enabling me to build seamless and efficient applications. I love fiddling around with my 24 Core dual x99 home lab setup in my free time`,
    skills:
        {
            proficientWith: ['javascript', 'swift', 'react', 'git', 'github', 'bootstrap', 'tailwind', 'nodejs', 'seo', 'hypervisors', 'deployment', 'hosting', 'homelab'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "TrueNAS VPN Setup using Docker",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: vpn
        },
        {
            title: "Setting up Cloudflared on TrueNAS scale for global access",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: cloud
        },
        {
            title: "useMemo React Hook: With easy to understand example",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: useMemo
        }
    ]
}