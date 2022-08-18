import React from "react";

const dataTable = (props) => {
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
              <tr>
                <td className="text-center">
                    hello
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default dataTable;
