
const BASE_URL = import.meta.env.BASE_URL;

export const projects = [
    {
        title: "Full Snack",
        description: "An AI-powered meal inspiration app that helps users generate meal ideas based on their pantry ingredients, preferences, or even a simple text prompt. The project grew into a full-stack solution that also lets users save meals and manage grocery lists directly within the app.",
        imgs: [`${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_1.jpeg`, `${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_2.jpeg`, `${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_3.jpeg`, `${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_4.jpeg`, `${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_5.jpeg`, `${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_6.jpeg`],
        stack: ["html", "js", "tailwind", "node", "react"],
        link: "https://full-snack-client.onrender.com",
        mobile: true
    },
    {
        title: "The Hummingbird Pub",
        description: "Website for a local business built with Tailwind CSS. Integrated a custom Google Apps Script that syncs the site with a Google Sheet, allowing the client to update menu items and hours without touching the code.",
        imgs: [`${BASE_URL}img/Hummingbird_Screenshots/Hummingbird_pub_screenshot.jpg`, `${BASE_URL}img/Hummingbird_Screenshots/Hummingbird_pub_screenshot_2_small.jpg`, `${BASE_URL}img/Hummingbird_Screenshots/Hummingbird_pub_screenshot_3_small.jpg`],
        stack:["html", "js", "tailwind"],
        link: "https://hummingbirdpub.com",
        mobile: false
    },
    {
        title: "Do Date",
        description: "A reminder app using aws services such as Cognito, Dynamo, EventBridge, and Lambda. SMS messaging is handled by Twilio. This project allowed me to flex my full stack development skills while also learning Typescript on the fly.",
        imgs: [`${BASE_URL}img/do_date_screenshots/do_date_screenshot_1.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_2.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_3.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_4.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_5.jpeg`],
        stack: ["html", "js", "typescript", "tailwind", "node", "react"],
        link: "https://do-date.vercel.app/",
        mobile: true
    },
    {
        title: "Max & Moritz",
        description: "Website for a food truck near the ferry terminal on Galiano Island, BC. Built with HTML, JavaScript, and Tailwind CSS, using a minimal design and image assets sourced from the client's Facebook page and my own photography.",
        imgs: [`${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Moritz_screenshot_1.jpg`, `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_moritz_screenshot_2.jpg`, `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_moritz_screenshot_3.jpg`],
        stack:["html", "js", "tailwind"],
        link: "https://maxandmoritz.netlify.app",
        mobile: false
    },
    {
        title: "Ixchel",
        description: "A static website for a local artisan shop. Built entirely with images sourced from the client's Facebook page so they could have a professional online presence with no extra setup. This was my first live project for a real client.",
        imgs: [`${BASE_URL}img/Ixchel_Screenshots/Ixchel_screenshot_1.jpg`, `${BASE_URL}img/Ixchel_Screenshots/ixchel_screenshot_2.jpg`, `${BASE_URL}img/Ixchel_Screenshots/ixchel_screenshot_3.jpg`],
        stack: ["html", "js", "css"],
        link: "https://ixchel-galiano.netlify.app",
        mobile: false
    },
]

export const techLogos = {
    html: `${BASE_URL}img/logos/html_5_logo.png`,
    js: `${BASE_URL}img/logos/JavaScript-logo.png`,
    tailwind: `${BASE_URL}img/logos/tailwind_css_logo.png`,
    css: `${BASE_URL}img/logos/CSS3_logo.svg.png`,
    react: `${BASE_URL}img/logos/React-icon.svg.png`,
    typescript: `${BASE_URL}img/logos/Typescript.logo.png`,
    node: `${BASE_URL}img/logos/nodejs_logo.png`
}
    
