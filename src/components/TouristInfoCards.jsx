import React from "react";

const TouristInfoCards = () => {
  const cities = [
    {
      city: "Glasgow",
      image:
        "https://th.bing.com/th/id/OIP.i4RVpAe-j7X3ntfKc20k2AHaEr?pid=ImgDet&rs=1",
      description: "Glasgow City",
      url: "https://peoplemakeglasgow.com/"
    },
    {
      city: "Manchester",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Manchester_Town_Hall_by_night_from_Renaissance_Hotel.JPG",
      description: "Manchester City",
      url: "https://www.visitmanchester.com/"
    },
    {
      city: "London",
      image:
        "https://th.bing.com/th/id/R.3b835f25c035327c5d459414837a924b?rik=TMgyGT6Coc545Q&pid=ImgRaw&r=0",
      description: "London City",
      url: "https://visitlondon.com/"
    }
  ];

  return (
    <div className="d-flex m-3 justify-content-center">
      {cities.map(({ city, image, description, url }, index) => {
        return (
          <div key={index} className="card m-3">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{city}</h5>
              <p className="card-text">{description}</p>
              <a href={url} className="btn btn-primary">
                Go {city}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
