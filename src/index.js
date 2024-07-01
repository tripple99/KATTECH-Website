import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Comp from './Comp';
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';
import Taskbar from './Taskbar';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <section className='main'>
  <App />
  <Comp />
  </section>
  <div className='info'>
  <h1 className='header'>About Us</h1>
  <Aboutus />
  </div>
  <section className="services">
  <h1 className='header1'>Services</h1>
   <Services 
    pics = "Services/Sending Messages.jpg"
    pic1 = "Images/3d Website developer working on laptop illustration.jpg"
    pic2 = "Services/Ui UX design concept 3D illustration.jpg"
    pic3 = "Services/Coder Dojo.jpg"
    pic4 = "Services/crafting fun.jpg"
   />
  </section>
  <Contact />
  <Taskbar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
