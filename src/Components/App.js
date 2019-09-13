import React, { useEffect, useState } from 'react';
import Title from './Title';
import Media from './Media';
import Explanation from './Explanation';
import Copyright from './Copyright.js';
import axios from 'axios';
import Date from './Date';
import Logo from './Logo';
import Video from './Video';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  font-family: 'Fjalla One', sans-serif;
  font-size: 20px;
  color: white;
  background: linear-gradient(to right, #141e30, #243b55);
  overflow: auto;

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 50px 10px;
  }

  main {
    display: flex;
    margin: 30px 30px;
    margin-top: 50px;
  }

  .left {
    flex-basis: 40%;
    margin: auto auto;

    &p {
      line-height: 30px;
      text-align: left;
    }
  }

  .right {
    margin: auto auto;
  }
`;

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);

  let url = date
    ? `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`
    : `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios.get(url).then(res => {
      setData(res);
    });
  }, [date]);

  return (
    data && (
      <Div>
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
      </Div>
    )
  );
}

export default App;
