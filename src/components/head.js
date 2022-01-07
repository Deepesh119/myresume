import React from 'react';
import "../App.css";




const Head = () => {
   
    return (
        <>  
            <div>
            <nav className="navbar navbar-light bg-light ">
                <div className="container " >
                       <h4 className='navbartext'>Deepesh Giri</h4>
                </div>
            </nav>
            </div>
             <div className='Headgrid'>
              <div id='fontstyletwo'>
              <h6 className='text-center '><b>Name:</b>Deepesh Giri</h6> 
              <h6 className='text-center '><b>Github Account:</b> <a src="https://github.com/Deepesh119">https://github.com/Deepesh119</a></h6>
              <h6 className='text-center '><b>Linkdin:</b><a src="https://www.linkedin.com/in/deepesh-giri-9330aa1a5/">https://www.linkedin.com/in/deepesh-giri-9330aa1a5/</a></h6>
              <h6 className='text-center '><b>Contact:</b> deepeshgiri119@gmail.com</h6>
              <img src="https://www.w3schools.com/w3images/lights.jpg"  width="300" height="200" id="imagemargin"  />
              <h6 className='text-center '><b>Profile Picture</b></h6>
              </div>
              <div><h3 className='text-center'> About</h3>
                  <p className='text-center' id='fontstyle'> 

                                 I am a B-Tech Graduate from Birla Institute of Applied Science <br/>
                                 in Electronic and Communication Engineering.My Hobbies Includes<br/> 
                                 Treking, Swimming,Running,Reading books.I am a selfmotivated <br/>
                                 who constantly works hard and I am skilled in FrontEnd which incl-<br/>
                                 udes React,Javascript,HTML,CSS,Bootstrap,Material-UI,TailwindCSS<br/><br/>

                                 I was one of the founding member of startup my My Piggy Wallet which has <br/>
                                 has over 100k + downloads on playstore. Also I was the founding member <br/>
                                 of another startup Merenearby which has over 1k + downloads on <br/>
                                 playstore<br/><br/>
                                 
                                I have attended SSB,AFSB,NSB interview of defence services <br/>
                                14 times in a row.Also appeared in front of UPSC pannel 2 times <br/>
                                in a row.I am 90 percentiler in CAT 2020<br/>
                  </p>
              </div>
            </div>
            
        </>
    )
}

export default Head
