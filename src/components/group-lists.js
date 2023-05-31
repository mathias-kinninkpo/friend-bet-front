import React, {useState, useEffect} from 'react';


function GroupList() {

  const [ loading, setLoading] = useState(false)
  const [ groups, setGroups] = useState(null)
  const [ error, setError] = useState(false)

  //if(error) return <h1>Error</h1>
  //if(loading) return <h1>Loading</h1>


  useEffect (() => {
    const getData = async () => {
       await fetch('http://127.0.0.1:8000/api/groups/')
       .then(resp => resp.json())
       .then(data => {
          setGroups(data);
      })
      .catch(err => {
        setError(true);
      });
    }
    getData();
  }, [groups])

  return (
    <div>
        { groups && groups.map(group => {
          return (
            <div key = {group.id}>
              <h3>{group.name}</h3>
              <p>{group.location}</p>
            </div>
          )
        })}
    </div>
  );
}

export default GroupList;
