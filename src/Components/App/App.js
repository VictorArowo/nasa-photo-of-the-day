import React, { useEffect, useState } from 'react';
import './App.css';
import Title from '../Title/Title';
import Media from '../Media/Media';
import Explanation from '../Explanation/Explanation';
import Copyright from '../Copyright/Copyright';
import axios from 'axios';
import Date from '../Date/Date';

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);

  let url = data
    ? `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    : 'https://lambda-github-api-server.herokuapp.com';
  useEffect(() => {
    axios.get(url).then(res => {
      setData(res);
      console.log(res);
    });
  }, [date]);

  return (
    data && (
      <div className="App">
        <Date date={data.data.date} setdate={setDate} />
        <Title title={data.data.title} />
        <Media url={data.data.url} />
        <Explanation source={data.data.explanation} />
        <Copyright copyright={data.data.copyright} />
      </div>
    )
  );
}

export default App;
