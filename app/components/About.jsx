var React = require("react");

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p className="text-center">
                This is a weather application built on React.
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react" target="_blank">React</a> - Ued as the JavaScript framework.
                </li>
                <li>
                    <a href="https://openweathermap.org" target="_blank">Open Weather Map</a> - Used as the weather API.
                </li>
                <li>
                    <a href="http://foundation.zurb.com" target="_blank">Foundation</a> - Used to style the application.
                </li>
            </ul>
        </div>
    );
};

module.exports = About;