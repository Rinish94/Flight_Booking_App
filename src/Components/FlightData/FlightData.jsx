import React, { useState, useEffect } from "react";
import "./FlightData.css";
import FlightInputData from "../DataInput/FlightInputData";
import axios from "axios";
const FlightData = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);
  const [singleway, setSingleway] = useState(true);
  const [passenger, setPassenger] = useState(0);
  const [rangeval, setRangeval] = useState(null);
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getData();
  }, [data]);

  const getData = () => {
    // console.log(data)
    axios
      .get(
        `https://search-flight-data.herokuapp.com/flightDetails?DepartureDate=${data?.start_date}&OriginCity=${data?.origin_city}&DestinationCity=${data?.destination_city}`
      )
      .then((resp) => {
        // console.log(resp.data)
        const data_req = resp.data;
        setCardData(data_req);
        // console.log(cardData)
      })
      .catch((err) => {
        const failure_req = err;
        console.log(failure_req);
      });
  };

  const getDataReturn = (data) => {
    // console.log(data)
    axios
      .get(
        `https://search-flight-data.herokuapp.com/flightDetails?DepartureDate=${data?.start_date}&ReturnDate=${data?.end_date}&OriginCity=${data?.origin_city}&DestinationCity=${data?.destination_city}`
      )
      .then((resp) => {
        // console.log(resp.data)
        const data_req = resp.data;
        setCardData(data_req);
        // console.log(cardData)
      })
      .catch((err) => {
        const failure_req = err;
        console.log(failure_req);
      });
  };
  // console.log(data?.returndata)
  console.log(cardData);
  return (
    <div className="container">
      <div className="SearchContainer">
        <h2>Flight Search Engine</h2>
        <hr />
        <div className="containerdata">
          <div className="leftContainer">
            <FlightInputData
              setOrigin={setOrigin}
              setDestination={setDestination}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setSingleway={setSingleway}
              setPassenger={setPassenger}
              setRangeval={setRangeval}
              setData={setData}
              getDataReturn={getDataReturn}
              origin={origin}
              destination={destination}
              startDate={startDate}
              endDate={endDate}
              singleway={singleway}
              passenger={passenger}
              rangeval={rangeval}
            />
          </div>
          <div className="rightContainer">
            <div className="CitynameContainer">
              {data?.origin_city === undefined ||
              data?.destination_city === " " ? (
                <>
                  {" "}
                  <h2>Select Origin and Destination City</h2>
                </>
              ) : (
                <>
                  {data?.end_date ? (
                    <h2>{`${data?.origin_city} > ${data?.destination_city} > ${data?.origin_city}`}</h2>
                  ) : (
                    <h2>{`${data?.origin_city} > ${data?.destination_city}`}</h2>
                  )}
                </>
              )}
              <div>
                {data?.start_date && (
                  <>
                    <p>{`Departue: ${data?.start_date}`}</p>
                    {data?.end_date && <p>{`Return: ${data?.start_date}`}</p>}
                  </>
                )}
              </div>
            </div>
            <hr />
            <div className="flightDetails">
              {cardData?.map((el) => (
                <div className="flightCard">
                  <div className="leftCardData">
                    <div className="Amount">
                      Rs: {/* {console.log( el.passengers  )} */}
                      {data?.returndata
                        ? `${el.Price * data.passengers * 2}`
                        : `${el.Price * data.passengers}`}
                    </div>
                    <hr />
                    <div className="journeyDetails">
                      <div className="journeyDetailsLeft">
                        {`${el.Plane_code}`}
                        <p>{`${el.OriginCode} > ${el.DestinationCode}`}</p>
                        <p>Depart: {`${el.DepartureTime}`}</p>
                        <p>Arrive: {`${el.ArrivalTime}`}</p>
                      </div>
                      {/* {console.log(data?.returndata)} */}
                      {data?.returndata && (
                        <>
                          <div className="journeyDetailsRight">
                            {`${el.Plane_code}`}
                            <p>{`${el.OriginCode} > ${el.DestinationCode}`}</p>
                            <p>Depart: {`${el.DepartureTime}`}</p>
                            <p>Arrive: {`${el.ArrivalTime}`}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="rightCardData">
                    <div>
                      <img width="140px" src={el.Image} alt="FlightImage" />
                      <p></p>
                      <button>Book this flight</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightData;
