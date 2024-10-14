import course1 from "./assets/images01/c1.jpg"
import course2 from "./assets/images01/c2.jpg"
import course3 from "./assets/images01/c3.jpg"
import course4 from "./assets/images01/c5.jfif"


function Recommendation(){
    return(
        
<div className="recommendation">
<h1 className="recommendation__title">Recommended for you</h1>
<p>pick out best fit</p>
<div className="recommendation__container">
<div className="course-card">
    <img src={course1} alt="course1"></img>
    <h3>Artificial Intelligence A-Z 2024:Build 7 AI+LLM & ChatGpt</h3>
    <p>Hedelin de Ponteves</p>
    <p>4.5 ⭐⭐⭐⭐⭐</p>
    <p>$549 <del>$3,699</del></p>

</div>
<div className="course-card">
    <img src={course2} alt="course1"></img>
    <h3>Digital Marketing Strategist.Unlock your carrer growth</h3>
    <p>Yasir Ahmed,MBA</p>
    <p>4.6 ⭐⭐⭐⭐</p>
    <p>$499 <del>$3,099</del></p>
</div>


<div className="course-card">
    <img src={course3} alt="course1"></img>
    <h3>Python Programming-From Basis to Advanced level Masterclass</h3>
    <p>EdYoda for Business</p>
    <p>4.5 ⭐⭐⭐⭐⭐</p>
    <p>$549 <del>$2,699</del></p>
</div>

<div class="course-card">
    <img src={course4}alt="course1"></img>
    <h3>Web Development Masterclass Online Certification Course</h3>
    <p>YouAccal Percival</p>
    <p>4.5 ⭐⭐⭐⭐⭐</p>
    <p>$649 <del>$4,699</del></p>
</div>
</div>
</div>


    )
}
export default Recommendation