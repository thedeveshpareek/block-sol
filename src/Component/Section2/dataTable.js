import React from "react";
import "./table.css";

const DataTable = (props) => {
  return (
    <>
      <div
        id="cyrpto-data"
        className="bhoechie-tab-content animated animatedFadeInUp fadeInUp"
      >
        <div className="col-lg-12  panel  panel-defaul ">
          <table className="table table-striped">
            <thead className="thead-inverse text-center ">
              <tr>
                <th className="intrument-one-col text-center ">
                  Instrument Name
                </th>
                <th className="text-center spread">Avg. Spread</th>
                <th
                  className="text-center hidden-xs"
                  style={{ width: "110px" }}
                >
                  Sell
                </th>
                <th className="text-center spread">Spread</th>
                <th
                  className="text-center hidden-xs"
                  style={{ width: "110px" }}
                >
                  Buy
                </th>
                <th className="hidden-xs vc_hidden-sm">Daily Change</th>
              </tr>
            </thead>
            <tbody>
              {props.data &&
                props.data.map((item) => {
                  console.log(item,'dat');
                  return (
                    <tr>
                      <td className="text-center" >{item.insttrument}</td>
                      <td className="text-center">{item.AVG}</td>
                      <td className="text-center">{item.SELL}</td>
                      <td className="text-center">{item.SPREAD}</td>
                      <td className="text-center">{item.Buy}</td>
                      <td className="text-center">{item.Daily}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
