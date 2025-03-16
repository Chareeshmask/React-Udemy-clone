
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";




function Recommended(){
  return(
    <div className="recommended">
        <h1 className="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="recommended__container">

            <div className="course-card">
            <img src={image1} />
                <h3>2024 python learning</h3>
                <p>col steele</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>1100 <del>1500</del></p>
            </div>
            <div className="course-card">
            <img src={image2} />
                <h3>2024 Artificial intelligence</h3>
                <p>col steele</p>
                <p>3.5⭐⭐⭐</p>
                <p>890 <del>990</del></p>
            </div>
            <div className="course-card">
            <img src={image3} />
                <h3>2024 MySQL</h3>
                <p>col steele</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>550 <del>770</del></p>
            </div>
            <div className="course-card">
            <img src={image4} />
                <h3>2024 JavaScript</h3>
                <p>col steele</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>890 <del>990</del></p>
            </div>
        </div>
    </div>
  )
}



export default Recommended