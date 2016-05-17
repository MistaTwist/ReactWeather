var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This Weather App was built in React as part of the very detailed and useful "The Complete React Web Developer Course" course on Udemy.
      </p>
      <p>
        Some of the technologies used to make this were:
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - Main js Framework.
          </li>
          <li>
            <a href="http://openweathermap.org/">Open Weather Map</a> - Source of weather data.
          </li>
        </ul>
      </p>
    </div>
  )
};

module.exports = About;
