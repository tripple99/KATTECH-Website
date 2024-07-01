import React from "react"
import Text from "./Text"
import data from "./data"

function Services(props){
console.log(props.pics);

  return(
    <div className="web">
 
    <Text 
    header = "Web Development"
    info = " Our skilled developers craft custom websites and applications tailored to your specific needs. Leveraging cutting-edge technologies, we ensure your platform is secure, scalable, and delivers exceptional performance. Whether you need an e-commerce store, a business website, or a complex web app, we'll bring your vision to life."
   />
   <div></div>
    <img className="pics" src={props.pic1}/>
   
   <Text 
   header = "UI/UX Design"
    info = "But it's not just about the build; we believe beautiful design should be functional too. Our UI/UX design experts create user interfaces that are not only aesthetically pleasing but also intuitive and user-friendly. We prioritize a seamless user journey by ensuring your website or app is easy to navigate."
   />
       <div></div>
    <img className="pics" src={props.pic2}/>

   <Text 
   header = "Tutoring"
    info = "Want to upskill your workforce or empower yourself with in-demand tech skills? Our expert tutors offer personalized instruction tailored to your specific needs and learning pace. We offer a variety of tutoring options, from learning basic coding languages to mastering advanced software applications."
   />
     <div></div>
   <img className="pics" src={props.pic3}/>
 
   <Text 
   header = "Consulting"
    info = "Feeling overwhelmed by the ever-changing tech landscape? Our seasoned consultants offer strategic guidance on everything from choosing the right technology solutions to implementing effective digital strategies. Don't let the tech world leave you behind! Let's discuss how our services can help your business flourish and individuals excel in the exciting world of technology."
   />
   <div></div>
    <img className="pics" src={props.pic4}/>
    </div>
 
  )
}

export default Services