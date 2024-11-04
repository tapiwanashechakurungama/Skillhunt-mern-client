import {  useState } from "react";
import Banner from "./Banner";
import DailyInformation from "./DailyInformation";
import Jobs from "./Jobs";
import Sliders from "./Sliders";
import axios from "axios";



const Postjob = () => {
  const [message , setMessage] = useState("")
  const [title,setTitle] = useState("")
  const [company,setCompany] = useState("")
  const [location,setLocation] = useState("")
  const [type,setType] = useState("")
  const [description, setDescription] = useState("");
  const [maxApplications, setMaxApplications] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("https://api-mern-kuto.onrender.com/jobs/create", {maxApplications,company,description,location,title,type})
    .then(res =>{
      if(res.data.company == company){
        setTitle("")
        setCompany("")
        setLocation("")
        setType("")
        setDescription("Thanks the job post have been submitted our team will contact you as soon as possible to verify you are not wasting our time")
        setMaxApplications("")
        setMessage("Job post successfully created")
      }
    })
    .catch(error =>{
      console.log(error.response.data);
      setMessage(error.response.data);
    })
  }

  return (
    <>
      <Banner />
      <Sliders />
      <div className="pc-jobs">
        <div className="padding">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7">
              <form className="job-posting-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  required={true}
                  placeholder="Enter Job title eg Web Developer"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  name="company"
                  required={true}
                  placeholder="Enter Job company eg jobhub"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <input
                  type="text"
                  name="location"
                  required={true}
                  placeholder="Enter Job location eg Harare"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <input
                  type="text"
                  name="type"
                  required={true}
                  placeholder="Enter Job type eg Remote"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="write a description which will showcase which person do u need"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <input
                  type="number"
                  name="maxApplications"
                  required={true}
                  placeholder="maxApplications"
                  value={maxApplications}
                  onChange={(e) => setMaxApplications(e.target.value)}
                />
                <p>{message}</p>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="col-12 col-md-5 col-lg-5">
              <div className="padding2">
                <div className="first">
                  <h4>Contact Info</h4>
                  <p>Address</p>
                  <p>203 Fake St. Mountain View, San</p>
                  <p>Francisco, California, USA</p>
                </div>
                <div className="first">
                  <h4>Phone</h4>
                  <p>+263714157852</p>
                  <p>+263785350784</p>
                </div>
                <div className="first">
                  <h4>Email Address</h4>
                  <p>nashy@gmail.com</p>
                  <p>chakurungamatapiwanashe@gmail.com</p>
                </div>
                <div className="first">
                  <h4>More info</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita debitis, pariatur natus quasi rem doloribus labore
                    quaerat incidunt illum a.
                  </p>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Jobs />
      <DailyInformation />
    </>
  );
}

export default Postjob