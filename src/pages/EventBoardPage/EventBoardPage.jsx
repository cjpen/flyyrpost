import { useEffect, useState } from "react";
import * as flyyrsAPI from '../../utilities/flyyrs-api';

export default function EventBoardPage() {
  const [flyyrs, setFlyyrs] = useState([])

  const flr = flyyrs.map((f) => (
    <p>{f.eventTitle}</p>
  ))

  useEffect(function() {
    async function getFlyyrs() {
      const flyyrs = await flyyrsAPI.getAll();
      setFlyyrs(flyyrs);
    }
    getFlyyrs();
  }, []);

  return (
    <>
      <h1>EventBoard</h1>
      {flr}
    </>
  );
}
