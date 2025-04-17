# Framer motion Tutorial
`npm i motion`

## To animate a div to need to make it motion element
like `div` -> `motion.div`
then in that motion div you need to add attributes like animate and transition to make animations
like:
<pre>
initial={{
    x: 200 // initial yahan pe h element
}}
animate={{
    x:100, // x me 100px pe chala ja
    rotate: 360, //rotate hota hua jaa
}}
transition={{
    duration: 3, // 3 sec me jaana
    delay:1,    // 1 sec baad jaana jab load ho to
    repeat: Infinity // infinite baar chalega 1/2 baar bhi chala skte h
    ease:'anticipate' // cartoon ki tarah piche jaaki phir aage jaega
}}
</pre>
**Also we can make arrays to make keyframes to move objects wherever we want like:**
<pre>
animate={{
    x:[0,800,800,0,0],
    y:[0,0,200,200,0],
    rotate: [0,360,0,-360,0],
}}
</pre>

**DRAG**
<p>To drag any element</p>
<pre>
drag // pakad ke kahin bhi fek do
whileDrag={{
    rotate:45
}}
dragConstraints={{
    left:0,
    top:0,
    right:1000,
    bottom:500
}}
// dragDirectionLock={true} //ek hi direction me jaega
</pre>

**ScrollAnimation** <br>
`import { motion, useScroll } from "motion/react" `
<br>
`  const scrollYProgress = useScroll().scrollYProgress;
`
<br>
<pre>
style={{
    scaleX: scrollYProgress
}}
</pre>

