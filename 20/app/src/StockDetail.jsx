import React from "react";
import "./sd.css";
import { useState } from "react";
const StockDetail = () => {
  const [stockdetail, setstockdetail] = useState([]);
  const [name, setname] = useState();
  const [pp, setpp] = useState();
  const [pq, setpq] = useState();
  const [sp, setsp] = useState();
  const [sq, setsq] = useState();
  const changename = (e) => {
    setname(e.target.value);
  };
  const changepp = (e) => {
    setpp(e.target.value);
  };
  const changepq = (e) => {
    setpq(e.target.value);
  };
  const changesp = (e) => {
    setsp(e.target.value);
  };
  const changesq = (e) => {
    setsq(e.target.value);
  };
  const handleadd = (e) => {
    e.preventDefault();
    if (sq > pq) {
      alert("Selling quantity cannot be more than purchase quantity.");
    } else {
      var obj = {
        sname: name,
        spp: pp,
        spq: pq,
        ssp: sp,
        ssq: sq,
      };
      setname("");
      setsp(0);
      setpp(0);
      setpq(0);
      setsq(0);
      setstockdetail([...stockdetail, obj]);
      console.log(stockdetail);
    }
  };
  return (
    <>
      <div className="sform">
        <form onSubmit={handleadd}>
          <input type="text" value={name} onChange={changename} />
          Name <br />
          <input type="text" value={pp} onChange={changepp} />
          Purchase Price <br />
          <input type="text" value={pq} onChange={changepq} />
          Purchase Quantity <br />
          <input type="text" value={sp} onChange={changesp} />
          Selling Price <br />
          <input type="text" value={sq} onChange={changesq} />
          Selling Quantity <br />
          <button type="submit">submit</button>
        </form>
      </div>
      <div>
        <table className="table">
          <tr>
            <td>Name</td>
            <td>Purchase Price</td>
            <td>Purchase Quantity</td>
            <td>Selling Price</td>
            <td>Selling Quantity</td>
            <td>Profit/Loss</td>
          </tr>
          {stockdetail.map((data) => {
            return (
              <tr>
                <td>{data.sname}</td>
                <td>{data.spp}</td>
                <td>{data.spq}</td>
                <td>{data.ssp}</td>
                <td>{data.ssq}</td>
                <td>
                  {data.ssq < data.spq
                    ? "Invested"
                    : (Number(data.ssq) * (Number(data.spp) - Number(data.ssp))).toString()}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default StockDetail;
