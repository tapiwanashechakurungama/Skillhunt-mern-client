

const DailyInformation = () => {
  return (
    <div className="bsckground">
      <div className="padding overlay content-daily">
        <h2>Get job information daily</h2>
        <p>Subscribe to our newsletter and get a coupon code!</p>
        <form className="flexitems">
          <input type="text" placeholder="Enter your email here" required={true}/>
          <button>
            Subscibe now
          </button>
        </form>
      </div>
    </div>
  );
}

export default DailyInformation