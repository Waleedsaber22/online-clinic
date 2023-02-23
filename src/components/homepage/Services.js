import React from "react";
import service1 from "../../images/service-icon-1.png";
import service2 from "../../images/service-icon-2.png";
import service3 from "../../images/service-icon-3.png";
import service4 from "../../images/service-icon-4.png";

function Services() {
  return (
    <div className="services-main-container">
      <div className="section-head">
        <h2 className="text-black text-center text-2xl font-bold">
          The Best Doctor gives the least medicines
        </h2>
        <p className="text-center">
          A perfect way to show your hospital services
        </p>
      </div>

      {/* main services part */}
      <div className="services-secondary-container">
        <article className="service-item">
          <div className="icon">
            <img src={service1} className="m-auto" />
          </div>
          <h3 className="text-black text-lg text-center font-semibold">
            Cardio Monitoring
          </h3>
          <p className="text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis possimus doloribus facilis velit, assumenda tempora
            quas mollitia quos voluptatibus consequatur!
          </p>
        </article>

        <article className="service-item">
          <div className="icon">
            <img src={service2} className="m-auto" />
          </div>
          <h3 className="text-black text-lg text-center font-semibold">
            Medical Treatment
          </h3>
          <p className="text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis possimus doloribus facilis velit, assumenda tempora
            quas mollitia quos voluptatibus consequatur!
          </p>
        </article>

        <article className="service-item">
          <div className="icon">
            <img src={service3} className="m-auto" />
          </div>
          <h3 className="text-black text-lg text-center font-semibold">
            Emergency Help
          </h3>
          <p className="text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis possimus doloribus facilis velit, assumenda tempora
            quas mollitia quos voluptatibus consequatur!
          </p>
        </article>

        <article className="service-item">
          <div className="icon">
            <img src={service4} className="m-auto" />
          </div>
          <h3 className="text-black text-lg text-center font-semibold">
            First Aid
          </h3>
          <p className="text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis possimus doloribus facilis velit, assumenda tempora
            quas mollitia quos voluptatibus consequatur!
          </p>
        </article>
      </div>
    </div>
  );
}

export default Services;
