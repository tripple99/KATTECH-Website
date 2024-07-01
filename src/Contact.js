import React from "react";


function Contact(){
  function submit(e){
    e.preventDefault(); 
    alert("prevented defualt") 
  }
  return(
    <section className="contact-us">
    <div className="div-sect">
    <h1>Contact Us</h1>
    <div className="line"></div>
    <p>At Kattech, we're passionate about driving innovation in technology. Whether you have a question, need support, or want to collaborate, we're here to help. Reach out to us through any of the following channels</p>
  
      <form className="form">
       <input className="input" placeholder="Name" />
       <input className="input" placeholder="Email"/>
       <input className="input btn" type="Submit" value='Subscribe' onClick={submit}/>
      </form>  
    </div>
    
    </section>

  )
}

export default Contact