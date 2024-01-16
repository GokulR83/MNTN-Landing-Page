import { clock,  hike, mountain } from '../assets/images';

export const navLinks = [
    {href:"#", label:"Equipment"},
    {href:"#", label:"About Us"},
    {href:"#", label:"Blog"}
]

export const Hiker = {
    number:'01' ,
    lineTitle:"GET STARTED",
    title:"What level of  hiker are you?",
    para:"Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
    imgURL:hike,
    label:'hike',
    }

    export const hikingGear = {
    number:'02' ,
    lineTitle:"HIKING ESSENTIALS", 
    title:"Picking the right Hiking Gear!",
    para:"The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
    imgURL:mountain,
    label:'Mountain',
    }

    export const yourMap = {
    number:'03' , 
    lineTitle:"WHERE YOU GO IS THE KEY ",
    title:"Understand Your Map & Timing",
    para:"To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
    imgURL:clock,
    label:'Clock',
    }

export const footerLinks = [
    {
        title:"More On Blog",
        links:[
            { name:"About MMTN" , link:'/' },
            { name:"Contributors & Writers" , link:'/' },
            { name:"Write For Us" , link:'/' },
            { name:"Contact Us" , link:'/' },
            { name:"Privacy Policy" , link:'/' },
        ],
    },
    {
        title:"More On MMTN",
        links:[
            { name:"The Team" , link:'/' },
            { name:"Jobs" , link:'/' },
            { name:"Press" , link:'/' },
        ]
    }

]