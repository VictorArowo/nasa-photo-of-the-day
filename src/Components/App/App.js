import React, { useEffect, useState } from 'react';
import './App.css';
import Title from '../Title/Title';
import Media from '../Media/Media';
import Explanation from '../Explanation/Explanation';
import Copyright from '../Copyright/Copyright';
import axios from 'axios';
import Date from '../Date/Date';
import Logo from '../Logo/Logo';
import Video from '../Video/Video';

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);

  let url = data
    ? `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`
    : `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;
  useEffect(() => {
    axios.get(url).then(res => {
      setData(res);
    });
  }, [date]);

  return (
    data && (
      <div className="App">
        <div className="header">
          <Logo />
          <h1>PHOTO OF THE DAY</h1>
          <Date date={data.data.date} setdate={setDate} />
        </div>
        <main>
          <div className="left">
            <Title title={data.data.title} />
            <Explanation source={data.data.explanation} />
          </div>
          <div className="right">
            {data.data.media_type === 'image' ? (
              <Media url={data.data.url} />
            ) : (
              <Video url={data.data.url} />
            )}
          </div>
        </main>
        <Copyright copyright={data.data.copyright} />
      </div>
    )
  );
}

export default App;
