import React, { Component } from "react";

export default class Error_Boundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className="taskConatiner">
          <div className="serachBarContainer errorContainer">
            <h1>Something went wrong.</h1>
            <input
              value="Go Back"
              onClick={() => {
                window.location.href = "/";
              }}
              type="button"
            />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
