import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  let [authuser, setAuthuser] = useState();

  useEffect(() => {

    axios
      .get("/books")
      .then((res) => {
        setAuthuser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (authuser) {
    return (
      <>
        {authuser.map((book) => (
          <h2 key={book.id}>{book.title}</h2>
        ))}
      </>
    );
  } else {
    return (
      <>
        <h2>You are not logged in</h2>
      </>
    );
  }
}
