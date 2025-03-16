
import saleImage from "../assets/images/sale-img.png"; // Correct import


function Categories() {
  return (
    <div>
      {/* Categories Section */}
      <div className="categories">
        <p>Development</p>
        <p>Business</p>
        <p>IT & Software</p>
        <p>Personal Development</p>
        <p>Design</p>
        <p>Marketing</p>
      </div>

      {/* Sale Image Section */}
      <div className="sale-image">
        <img src={saleImage} alt="Sale Image" />
        <div className="sale-image__offer">
          <h2>Udemy Flash Sale! 24 Hours to Save</h2>
          <p>Get the top courses for just ₹499. One day to save, but a lifetime to learn!</p>
        </div>
      </div>
    </div>
  );
}


export default Categories
