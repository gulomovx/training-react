import React from 'react'

const Create = () => {
  return (
      <div>
          
      <h1 className='text-2xl'>
      // import { useState } from "react";

import { useState } from "react";

function Test() {
  const [showContent, setShowContent] = useState(true)
  const [name, setName] = useState("miro");
  const [events, setEvents] = useState([
    { title: "miro birthday party", id: 1 },
    { title: "anvar live stream", id: 2 },
    { title: "match: manchester united vs barcelona", id: 3 },
  ]);

  const handleClick = () => {
    setName("anvar");
  };

  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  return (
    <div>
      <h1>My name is: {name}</h1>
      <button onClick={handleClick}>submit</button>
      <hr />
      <br />
      {showContent && <button onClick={() => setShowContent(false)}>Hide Content</button>}
      {!showContent && <button onClick={() => setShowContent(true)}>Show Content</button>}
      {showContent &&  <div>
        {events.length === 0 && <h3>Not Content Yet...</h3>}
        {events.map((event) => {
          return (
            <div key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
            </div>
          );
        })} </div> }
    </div>
  );
}

export default Test;
  </h1>
    </div>
  )
}

export default Create