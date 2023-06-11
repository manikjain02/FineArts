import React from 'react'

export default function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="/assets/about1.png" alt="About" className='w-75 mt-5'/>
                </div>
                <div className="col-md-6">
                    <h3 className="fs-5 mb-0">About Us</h3>
                    <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                    <hr className='w-50'/>
                    <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempora, enim nihil cumque sit exercitationem tenetur perspiciatis saepe, repudiandae esse ratione aliquam totam odio itaque dicta, non laboriosam. Odio impedit necessitatibus commodi ea mollitia iusto aliquid consectetur consequatur, odit est modi autem a, id omnis esse. Dignissimos dolorum molestias temporibus?</p>
                    <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
