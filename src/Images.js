import React from "react"


function Images(){
    const teamMembers = [
        { name: 'CEO Abdallah', image: 'Images/Hand of Reflection.jpg' },
        { name: 'CEO Abdallah', image: 'Images/simon-lee-ynmPY1MLwMs-unsplash.jpg' }
    ];
  
    const uploadImg = teamMembers.map((member,index) =>{
      return(
            <div className="grid-1" key={index}>
            <img className="img" src={member.image} alt={member.name} />
            <p className="name">{member.name}</p>
          
        </div>
      )
    })
    const ceoKattech = [
      { name: 'CFO Bature', image: 'Images/This is the future of Meta verse.jpg' },
      { name: 'CFO Bature', image: 'Images/download.jpg' }
    ]
    const uploadImg2 = ceoKattech.map((member,index)=>{
      return(
        <div className="grid-1" key={index}>
        <img className="img" src={member.image} alt={member.name} />
        <p  className="name">{member.name}</p>
    </div>
      )
    })
    console.log();
  return(
    <div className="photo">
    <div>{uploadImg}</div>
    <div>{uploadImg2}</div>
    
    {/* <Images 
      image1 = 'Images/Hand of Reflection.jpg'
      image2 = 'Images/simon-lee-ynmPY1MLwMs-unsplash.jpg'
     />
     <Images 
      image1 = "Images/This is the future of Meta verse.jpg"
      image2 = "Images/download.jpg"
     /> */}
     {/* <div className="images">
    <div className="grid-1">
    <img className="img " src={props.image1}/>
    <span id="name">Abdallah</span>
    </div>
<div className="grid-1">
<img className="img" src={props.image2}/>
<span id="name2">Abdallah</span>
</div> */}

    {/* <img className="img grid-3" src=""/>
    <img className="img grid-4" src=""/> */}
   </div>
    // </div>
   
  )

}
export default Images