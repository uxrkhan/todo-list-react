import React from 'react';

function About() {
    return (
        <React.Fragment>
            <div style={aboutStyle}>
                <h1>About</h1>
                <p>This is the Todo-List app v1.0.0. It is a part of React Crash Course.</p>
            </div>
            <div className="footer">
                <a href="/">Go Back</a>
            </div>
        </React.Fragment>
    )
}

const aboutStyle = {
    background: '#dfdfdf',
    padding: '20px'
}

export default About;