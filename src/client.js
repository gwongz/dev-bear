import React from 'react';
import ReactDOM from 'react-dom';

const BearLogo = () =>
  <div className="img__bear"></div>

const MainDescription = () =>
  <div className="main">
    <p>Oh hello.</p>

    <p>
    I'm Grace. Nice to meet you. {'\u270B'} I'm an engineer at <a href="https://getclef.com/about/">Clef</a>.
    Currently I'm learning Swift.
    </p>


    <p>When I'm not in the forest looking for berries, I <a
      href="https://modelviewculture.com/pieces/silicon-valleys-other-diversity-problem-age-bias-in-tech"
      target="_blank"
    > write</a>.
    You can also find me on <a href="https://twitter.com/gwongz">Twitter</a>.
    </p>
    </div>


const HomePage = () =>
  <div>
    <BearLogo />,
    <MainDescription />
  </div>

ReactDOM.render(
    <HomePage />,
    document.getElementById('root')
)