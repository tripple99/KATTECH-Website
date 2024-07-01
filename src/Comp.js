import React from "react"


function Comp(){

  return(
    <main className="aboutus">
    <div className="details">
    <h1>KATTECH Innovating Today, Tomorrow</h1>
      <p>"Empowering Nigeria with Scalable, Disruptive Innovation - KATTECH"</p>
      </div>
      <button className="btn"><i class="fas fa-user-plus"></i>Join us</button>
      <button className="btn"><i class="fas fa-calendar-alt"></i>shedule a Tour</button>
      {/* <div className="icon-section">
       <span><a><i className="fab fa-facebook"></i></a></span>
       <span><a><i className="fab fa-instagram"></i></a></span>
       <span><a><i className="fab fa-twitter"></i></a></span>
       <span><a><i className="fab fa-discord"></i></a></span>
      </div> */}
    </main>
  )
}

export default Comp