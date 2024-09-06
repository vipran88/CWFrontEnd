import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import FirstImg from "../../assets/images/construction1.jpg";
import SecondImg from "../../assets/images/construction2.jpg";
import ThirdImg from "../../assets/images/construction3.jpg";
import FourthImg from "../../assets/images/construction4.jpg";

import FifthImg from "../../assets/images/construction5.jpg";
import SixthImg from "../../assets/images/construction6.jpg";
import SeventhImg from "../../assets/images/construction7.jpg";
import EighthImg from "../../assets/images/construction8.jpg";


import Service from "../common/Service";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Constructions</span>
                <h1>
                  Crafting dreams with
                  <br /> precision and excellence
                </h1>
                <p>
                  We excel at transforming visions into reality through
                  outstandings craftsman and precise <br /> attention to detail.
                  With years of experience and a dedication to quality
                </p>
                <div className="mt-4">
                  <a className="btn btn-primary">Contact Now</a>
                  <a className="btn btn-secondary ms-2">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-2 py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <img src={AboutImg} className="w-100" />
              </div>
              <div className="col-md-6">
                <span>About Us</span>
                <h2>Crafting Structures that last a lifetime</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  eligendi, facere sed quidem eaque ullam officiis at modi,
                  dolorum, harum eveniet nobis a. Doloremque, officia tempora.
                  Officiis eius eum ipsam.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptas vero, eos doloremque optio quisquam officia? Tempore
                  sint corrupti recusandae perferendis similique necessitatibus
                  facilis laboriosam facere, eveniet, excepturi voluptatem
                  doloribus veritatis?{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services*/}
        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5 ">
            <div className="section-header text-center">
              <span>Our Services</span>
              <h2>Our Construction services</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                eveniet dolor vel aliquid quo laboriosam iste
              </p>
            </div>

            <div className="row pt-4">
              <Service nameTag="1st Placeholder" imagePath={FirstImg} />
              <Service nameTag="2nd Placeholder" imagePath={SecondImg} />
              <Service nameTag="3rd Placeholder" imagePath={ThirdImg} />
              <Service nameTag="4th Placeholder" imagePath={FourthImg} />
            </div>
          </div>
        </section>
        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5 ">
            <div className="section-header text-center">
              <span>Our Projects</span>
              <h2>Discover our range of Projects</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                eveniet dolor vel aliquid quo laboriosam iste
              </p>
            </div>

            <div className="row pt-4">
              <Service nameTag="1st Placeholder" imagePath={FifthImg} />
              <Service nameTag="2nd Placeholder" imagePath={SixthImg} />
              <Service nameTag="3rd Placeholder" imagePath={SeventhImg} />
              <Service nameTag="4th Placeholder" imagePath={EighthImg} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
