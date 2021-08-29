import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Calender from "../Calender/Calender";
import Slider from "../RangeSlider/Slider";
import "./FlightInputData.css";
const FlightInputData = ({
  origin,
  destination,
  startDate,
  endDate,
  singleway,
  passenger,
  rangeval,
  setOrigin,
  setDestination,
  setStartDate,
  setEndDate,
  setSingleway,
  setPassenger,
  setRangeval,
  setData,
  getDataReturn,
  getData,
}) => {
  // console.log(setData)
  const [returndata, setReturnData] = useState(false);

  function handleData(e) {
    e.preventDefault();
    setReturnData(false);
    const val = startDate.toString().trim().split(" ");

    let num_month;
    if (startDate) {
      if (startDate.getMonth() <= 8) {
        num_month = 0 + `${startDate.getMonth() + 1}`;
      } else {
        num_month = startDate.getMonth() + 1;
      }
    }
    let strtDate = `${val[2]}/${num_month}/${val[3]}`;
    let str_month = val[1];

    const payload = {
      origin_city: origin,
      destination_city: destination,
      passengers: passenger,
      start_date: strtDate,
      end_date: endDate,
      price: rangeval,
      returndata: returndata,
    };
    setData(payload);
    // getData(payload);
    // console.log(payload)
  }
  // console.log(returndata)

  function handleSubmit2(e) {
    e.preventDefault();
    setReturnData(true);

    const val = startDate.toString().trim().split(" ");
    const val2 = endDate.toString().trim().split(" ");

    let num_month;
    if (endDate) {
      if (endDate.getMonth() <= 8) {
        num_month = 0 + `${endDate.getMonth() + 1}`;
      } else {
        num_month = endDate.getMonth() + 1;
      }
    }
    let strtDate = `${val[2]}/${num_month}/${val[3]}`;
    let enddate = `${val2[2]}/${num_month}/${val2[3]}`;
    let str_month = val[1];

    const payload = {
      origin_city: origin,
      destination_city: destination,
      passengers: passenger,
      start_date: strtDate,
      end_date: enddate,
      price: rangeval,
      returndata: returndata,
    };
    // console.log(payload);
    // setData(payload);
    getDataReturn(payload);
  }

  function handleOrigin(e) {
    setOrigin(e.target.value);
  }
  function handleDestination(e) {
    setDestination(e.target.value);
  }
  function handlePassenger(e) {
    setPassenger(Number(e.target.value));
  }
  // console.log(passenger)
  // console.log(rangeval);
  return (
    <div>
      <div className="LeftDataEntryContainer">
        <Tabs style={{ marginTop: "10%" }}>
          <TabList style={{ border: "none" }}>
            <Tab>One-Way</Tab>
            <Tab>Return</Tab>
          </TabList>
          <TabPanel
            style={{
              border: "1px solid #AAAAAA",
              marginTop: "-2%",
              padding: "5px",
            }}
          >
            <form onSubmit={handleData}>
              <input placeholder="Enter Origin City" onChange={handleOrigin} />
              <input
                placeholder="Enter Destination City"
                onChange={handleDestination}
              />
              <Calender
                singleway={singleway}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                startDate={startDate}
                endDate={endDate}
              />

              <select
                className="selectBox"
                onChange={handlePassenger}
                name="Passengers"
                id="Passengers"
              >
                <option>Passengers</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <div>
                <button>Search</button>
              </div>
            </form>
          </TabPanel>
          <TabPanel
            style={{
              border: "1px solid #AAAAAA",
              marginTop: "-2%",
              padding: "5px",
            }}
          >
            <form onSubmit={handleSubmit2}>
              <input placeholder="Enter Origin City" onChange={handleOrigin} />
              <input
                placeholder="Enter Destination City"
                onChange={handleDestination}
              />
              <Calender
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                startDate={startDate}
                endDate={endDate}
              />

              <select
                className="selectBox"
                name="Passengers"
                id="Passengers"
                onChange={handlePassenger}
              >
                <option>Passengers</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <div>
                <button>Search</button>
              </div>
            </form>
          </TabPanel>
        </Tabs>
        <div className="LeftCostSliderContainer">
          <p>Refine Flight Search</p>
          <h4>Above: {rangeval}</h4>
          <Slider setRangeval={setRangeval} range={rangeval} />
        </div>
      </div>
    </div>
  );
};

export default FlightInputData;
