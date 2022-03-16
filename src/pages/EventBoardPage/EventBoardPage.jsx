import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as flyyrsAPI from '../../utilities/flyyrs-api';
import './EventBoardPage.css'

export default function EventBoardPage({flyyrs, setFlyyrs}) {
  

  const flr = flyyrs.map((f, idx) => (
    <Link to={`/flyyr/${f._id}`}  key={idx}>
      <img className="flyyr-img"  src={f.flyyrImage} alt={f.eventTitle} />
      <p>{f.eventTitle}</p>
    </Link>
  ));
    // const filteredFlyyrsByDate = flyyrs.map((f, idx) => {
    //   f.filter()
    // })
  useEffect(function() {
    async function getFlyyrs() {
      const flyyrs = await flyyrsAPI.getAll();
      setFlyyrs(flyyrs);
    }
    getFlyyrs();
  }, []);

  return (
    <>
      <h1>Upcoming Events</h1>
      <div className="flyyr-board">
        {flr}
      </div>
    </>
  );
}

