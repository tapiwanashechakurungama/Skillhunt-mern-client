import { Link } from "react-router-dom";
import first from "./../../public/job-pos-banner1.png"
import sec from "./../../public/job-pos-banner2.png"

const PostandFindJob = () => {
  return (
    <section className="job-post  pt-top section-bg2">
      <div className="padding">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="single-features mb-40 pt-60">
              <div className="job-post-banner">
                <img src={first} alt="" />
              </div>
              <div className="features-caption">
                <h3>Post a job</h3>
                <p>
                  The automated process starts as soon as your clothes go into.
                </p>
                <Link  className="border-btn">
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="single-features  single-features2 mb-40 pt-60">
              <div className="job-post-banner">
                <img src={sec} alt="" />
              </div>
              <div className="features-caption">
                <h3>Browse for job</h3>
                <p>
                  The automated process starts as soon as your clothes go into.
                </p>
                <Link  className="border-btn">
                  Browse Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostandFindJob