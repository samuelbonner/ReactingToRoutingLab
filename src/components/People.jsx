import React, { useEffect, useState } from "react";

const People = (props) => {

  const [people, setPeople] = useState([]);


  useEffect(() => {

    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((allPeople) => {
        console.log(allPeople);
        setPeople(allPeople);
      })
      .catch((err) => {
        console.log(
          `"There was an error fetching people API. Specifically: ${err}"`
        );
      });
  }, []);

  // people.map((people) => <People people={people} key={people.id} />)


// props.people needs to display: name, age, gender, and a link to that particular person's JSON response that will open in a new tab
  return (
    <>
        {people.map((people) => 
      <div className="col-sm-6 mb-3" key={people.id}>
        <div className="card">
          <div className="card-body bg-light">
            <h5 className="card-title">Name: {people.name}</h5>
            <p className="card-text">Age: {people.age}</p>
            <p className="card-text">
              Gender: {people.gender}
            </p>
            <p className="card-text text-muted">
              <a href={people.url} target="_blank" rel="noreferrer">Link to their JSON info</a>
            </p>
          </div>
        </div>
      </div>
        )}
        </>
  );
};

export default People;