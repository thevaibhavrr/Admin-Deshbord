import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

function Deshbord() {
  const [Details, setdetails] = useState([]);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);

  const backendData = async () => {
    try {
      const res = await fetch(`/api/v1/data?topic=${topic}&page=${page}`, {
        method: "get",
      });

      const resdata = await res.json();
      await setdetails(resdata.products);
    } catch (error) {
      alert(error);
    }
  };
  var TopicHandel = async (e) => {
    await setTopic(e.target.value);
  };
  const CurrentPage = async (e, v) => {
    await setPage(v);
  };
  useEffect(() => {
    backendData(TopicHandel);
  }, [TopicHandel]);

  return (
    <div>
      {/* catogry */}
      <div
        className="col-md-3 col-lg-2 sidebar-offcanvas pl-0 bg-dark"
        id="sidebar"
        role="navigation"
        style={{
          // backgroundColor: "#e9ecef",
          marginTop: -500,
          marginLeft: 1420,
          textAlign: "center",
          height: 500,
        }}
      >
        <h4 style={{ color: "white" }}>Select Topic</h4>
        <select onChange={TopicHandel}>
          <option value="oil">Oil</option>
          <option value="gas">Gas</option>
          <option value="market">Market</option>
          <option value="gdp">GDP</option>
          <option value="war">War</option>
          <option value="production">Production</option>
          <option value="export">Export</option>
          <option value="battery">Battery</option>
          <option value="biofuel">biofuel</option>
          <option value="export">Export</option>
        </select>
      </div>

      <div
        className="paginationBox"
        style={{ paddingLeft: 600, paddingBottom: 20, paddingTop: 20 }}
      >
        <div className="paginationBox">
          <Pagination
            count={10}
            color="primary"
            variant="outlined"
            page={page}
            onChange={CurrentPage}
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              {/* <th>id</th> */}
              <th>Topic</th>
              <th>Title</th>
              <th>Country</th>
              <th>Impact</th>
              <th>Sector</th>
              <th>Relevance</th>
              <th>Pestle</th>
              <th>Source</th>
              <th>Region</th>
              <th>Likelihood</th>
              <th>Intensity</th>
              <th>Insight</th>
              <th>Start_year</th>
              <th>End_year</th>
              <th>Published</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody>
            {Details.map((output) => (
              <tr>
                {/* <td>{output._id}</td> */}
                <td>{output.topic}</td>
                <td>{output.title}</td>
                <td>{output.country}</td>
                <td>{output.impact}-</td>
                <td>{output.sector}</td>
                <td>{output.relevance}</td>
                <td>{output.pestle}</td>
                <td>{output.source}</td>
                <td>{output.region}</td>
                <td>{output.likelihood}</td>
                <td>{output.insight}</td>
                <td>{output.intensity}</td>
                <td>{output.start_year}</td>
                <td>{output.end_year} -</td>
                <td>{output.published}</td>
                <td>{output.url}</td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Deshbord;
