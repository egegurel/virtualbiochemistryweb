const React = require('react');

class DocPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to My React App</h1>
        <p>This is a simple React component rendered server-side!</p>
      </div>
    );
  }
}

module.exports = DocPage;