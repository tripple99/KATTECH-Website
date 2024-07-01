import React,{useRef,useState}  from "react"


function App() {
  const [nav,setNav] = useState(false)

  // function checkNav(){
  //   setNav(n =>!n  ? toogleMenu('.show'):toogleMenu('.hide'))
  // }
 
  const action = useRef(null)
  function toogleMenu(){
    // const menu = document.querySelector("fa-bars")
    action.current.classList.toggle('show')
  }
  return (
    <nav className="navbar">
      <div className="navlogo">
      {/* <img className="logo" src="Images/KATTECH (3).png"/> */}
      <h1 className="logo">KATTECH💡</h1>
      <span onClick={toogleMenu} ><i class="fas fa-bars"></i>
</span>
      </div>
      <div className="navlist" ref={action}>
        <ul>
          <li><a>Home</a></li>
          <li><a>About us</a></li>
          <li><a>Services</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default App;
