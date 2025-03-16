function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__s1">
        <h1 className="navbar__s1__title">Udemy</h1>
      </div>

      <div className="navbar__s2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search for anything: tech, business, art..." />
      </div>

      <div className="navbar__s3">
        <p>Courses</p>
        <div className="my-learning">
          <p>My Learning</p>
          <div className="my-learning__popup">
            <p>You have not purchased anything yet</p>
          </div>
        </div>
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-user"></i>
      </div>

      <div className="navbar__s4">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar