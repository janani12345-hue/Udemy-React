import course5 from "./assets/images01/c11.jpg";
import course6 from "./assets/images01/c12.jpg";
import course7 from "./assets/images01/c13.jpg";
import course8 from "./assets/images01/c14.jpg";
import course9 from "./assets/images01/c15.jpg";
import course10 from "./assets/images01/c16.jpg";
import course11 from "./assets/images01/c17.jpg";
import course12 from "./assets/images01/c18.jpg";


function Popular(){
    return(
        
<div className="popular">
    <h1 className="popular__title">Most Popular</h1>
    <p className="popular__subtitle">pik out best fit</p>
<div className="popular__container">
    <div className="course-card">
        <img src={course5} alt="course1"></img>
        <h3>The Data Science Course:Complete Data Science Bootcamp</h3>
        <p>Yasir Ahmed,MBA</p>
        <p>4.6 ⭐⭐⭐⭐</p>
        <p>$499 <del>$3,099</del></p>
    </div>
    <div className="course-card">
        <img src={course6} alt="course1"></img>
        <h3>PHP for Begineers-Become a PHP Master-CMS Project</h3>
        <p>Yasir Ahmed,MBA</p>
        <p>4.6 ⭐⭐⭐⭐</p>
        <p>$499 <del>$3,099</del></p>
    </div>
    <div className="course-card">
        <img src={course7} alt="course1"></img>
        <h3>AI Essentials: Introduction to Artifical Intelligence</h3>
        <p>Yasir Ahmed,MBA</p>
        <p>4.6 ⭐⭐⭐⭐</p>
        <p>$499 <del>$3,099</del></p>
    </div>
    <div className="course-card">
        <img src={course8} alt="course1"></img>
        <h3>Digital Marketing Strategist.Unlock your carrer growth</h3>
        <p>Yasir Ahmed,MBA</p>
        <p>4.6 ⭐⭐⭐⭐</p>
        <p>$499 <del>$3,099</del></p>
    </div>
    <div className="course-card">
        <img src={course9} alt="course1"></img>
        <h3>DevOps Beginners to Advanced with Project</h3>
        <p>Yasir Ahmed,MBA</p>
        <p>4.6 ⭐⭐⭐⭐</p>
        <p>$499 <del>$3,099</del></p>
    </div>
    <div className="course-card">
        <img src={course10} alt="course1"></img>
        <h3>Build Websites from Scratch with HTML&CSS</h3>
        <p>Yasir Ahmed,MBA</p>
        <p>4.6 ⭐⭐⭐⭐</p>
        <p>$499 <del>$3,099</del></p>
    </div>
    <div className="course-card">
        <img src={course11} alt="course1"></img>
        <h3>The Complete Cyber Security Course: Hackers Exposed!</h3>
        <p>Yasir Ahmed,MBA</p>
        <p>4.6 ⭐⭐⭐⭐</p>
        <p>$499 <del>$3,099</del></p>
    </div>
    <div className="course-card">
        <img src={course12} alt="course1"></img>
        <h3>Internet and Wen Development Fundamentals</h3>
        <p>Yasir Ahmed,MBA</p>
        <p>4.6 ⭐⭐⭐⭐</p>
        <p>$499 <del>$3,099</del></p>
    </div>

</div>
</div>

    )
}
export default Popular