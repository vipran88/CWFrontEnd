import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="container py-5">
        <div className="row">
            <div className="col-md-3">
                <h3>UrbanEdge Constructions</h3>
                <div className="pe-3">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias nesciunt nisi id quae accusamus eveniet </p>
                </div>
               
            </div>

            <div className="col-md-3">
                <h3 className='mb-3'>Our Services</h3>
                <ul>
                    <li><a href="">Speciality Construction</a></li>
                    <li><a href="">Civil Construction</a></li>
                    <li><a href="">Residential Construction</a></li>
                    <li><a href="">Corporate Construction</a></li>
                    <li><a href="">Building Construction</a></li>
                    <li><a href="">Industrail Construction</a></li>

                </ul>
            </div>
            <div className="col-md-3">
                <h3 className='mb-3'>Quick Links</h3>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">Contact Us</a></li>

                </ul>
            </div>
            <div className="col-md-3">
                <h3 className='mb-3'>Contact Us</h3>
                <ul>
                    <li><a href="">(888-000-0000)</a></li>
                    <li><a href="">info@example.com</a></li>
                    <li><a href="">B-18X, Rajaji Puram</a></li>
                    <li><a href="">Lucknow,Uttar Pradesh,226017</a></li>
                    <li><a href="">0522400XXXX</a></li>

                </ul>
            </div>
            <hr/>
            <div className="text-center pt-4">Copyright 2024 UrbanEdge Constructions. All Rights Deserved</div>
            
        </div>
    </div>
</footer>
  )
}

export default Footer