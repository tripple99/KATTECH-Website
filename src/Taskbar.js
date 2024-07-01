import React from "react";


function Taskbar(){
  return(
    <footer className="taskbar">
    {/* <h1>Our Information</h1> */}
    <div className="icon-section">
       <span><a><i className=" fab fa-facebook  black"></i></a></span>
       <span><a><i className=" fab fa-instagram black"></i></a></span>
       <span><a><i className=" fab fa-twitter   black"></i></a></span>
       <span><a><i className=" fab fa-discord   black"></i></a></span>
      </div>
      <ul className="footer-list">
        <li>Home</li>
        <li>News</li>
        <li>About</li>
        <li>ContactUs</li>
        <li>Our Team</li>
      </ul>
      <div className="copy-right">Copyright ©️2024 Designed by KATTECH</div>
    </footer>
  )
}

export default Taskbar