
function Navebar(){
    return(
        
        <div className="Navebar">
    <div className="Navebar__s1">
        <h1 className="Navebar__s1-title">Udemy</h1>

    </div>
    <div className="Navebar__s2">
         <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="search for anything bussiness etc"></input>
    </div>
    <div className="Navebar__s3">
        <p className="Navebar__s3-desc"> Courses</p>
       
         <div className="Mylearning">
          <p> My Learning</p>
           <div className="Mylearning__popup">
            <p>you did not purchase anything yet</p>
           </div>
         </div>
        <i className="fa-solid fa-cart-shopping" style={{color:"#0c0f12"}}></i>
        <i className="fa-solid fa-bell"style={{color: "#0f1114"}}></i>
        <i className="fa-solid fa-user" style={{color: "#212121"}}></i>

    
    </div>
    <div className="Navebar__s4">
        <i className="fa-solid fa-bars"></i>
    </div>

</div>

    )
}
export default Navebar