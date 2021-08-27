import React from "react";
import "./FlightData.css";
const FlightData = () => {
  return (
    <div className="container">
      <div className="SearchContainer">
        <h2>Flight Search Engine</h2>
        <hr />
        <div className="containerdata">
          <div className="leftContainer">
            <div className="LeftDataEntryContainer">
              <div>
                <input placeholder="Enter Origin City" />
                <input placeholder="Enter Destination City"/>
                <select name="departure date" id="departure date">
                  <option>Departure date</option>
                  <option>d</option>
                </select>
                <br />
                <select name="Return date" id="Return date">
                  <option>Return date</option>
                  <option>d</option>
                </select>
                <br />
                <select name="Passengers" id="Passengers">
                  <option>Passengers</option>
                  <option>d</option>
                </select>
                <div>
                  <button>Search</button>
                </div>
              </div>
            </div>
            <div className="LeftCostSliderContainer">
                <p>Refine Flight Search</p>

            </div>
          </div>
          <div className="rightContainer">
            <div className="CitynameContainer">
              <div>
                <h2>Lucknow Pune Lucknow</h2>
              </div>
              <div>
                <p>Departue: 1st jan 2021</p>
                <p>Return: 10th jan 2021</p>
              </div>
            </div>
            <hr />
            <div className="flightDetails">
              <div className="flightCard">
                <div className="leftCardData">
                  <div className="Amount">Rs. 9500</div>
                  <div className="journeyDetails">
                    <div className="journeyDetailsLeft">
                      <p>AI-202</p>
                    </div>
                    <div className="journeyDetailsRight">
                      <p>AI-203</p>
                    </div>
                  </div>
                </div>
                <div className="rightCardData">
                  <div>
                    <img
                      width="130px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFHysVV88xLFOFNYFzIweXfhTW_wr0EkKvg&usqp=CAU"
                      alt="FlightImage"
                    />
                    <p></p>
                    <button>Book this flight</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightData;
