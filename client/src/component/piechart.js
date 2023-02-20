import React, { useState ,useEffect } from "react";
import { Tooltip, Title, ArcElement, Legend, Chart } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(Tooltip, Title, ArcElement, Legend);


function PieChart() {
  const [Details, setdetails] = useState([]);

  const CountryData = async () => {
    try {
      const res = await fetch(`/api/v1/country`, {
        method: "get",
      });

      const resdata = await res.json();
      await setdetails(resdata);
    } catch (error) {
      alert(error);
    }
  };

    useEffect(() => {
      CountryData();
    }, []);



   const data = {
     
     labels: Details.country,

     datasets: [
       {
        
         data: [112,3,650,6,3,25,,18,2,6,3,19,2,1,24,2,2,10,5,1,9,11,19,16,1,3,6,1,6,1,7,1,2,1,1,4,1,1,1,2,1,1,2,2,2,1,1,2,1,1,1,1,1,1,1],

         backgroundColor: [
           "pink",
           "#17a2b8",
           "#ffc107",
           "rgb(87, 185, 96)",
           "rgba(153, 102, 255, 0.2)",
           "rgba(255, 159, 64, 0.2)",
         ],
         borderColor: [
           "rgba(255, 99, 132, 1)",
           "rgba(54, 162, 235, 1)",
           "rgba(255, 206, 86, 1)",
           "rgba(75, 192, 192, 1)",
           "rgba(153, 102, 255, 1)",
           "rgba(255, 159, 64, 1)",
         ],
         borderWidth: 1,
       },
     ],
   };

  return (
    <>
    {/* <p>{Details}</p> */}
      <div style={{ width: 400, height: 400 }}>
        <Pie data={data} />
      </div>
    </>
  );
}

export default PieChart;
