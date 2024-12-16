import React, { Component } from 'react';
import TabbedItem from './TabbedItem';

class TabbedSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  handleTabClick = (index) => {
    this.setState({ activeTab: index });
  };

  render() {
    return (
      <div className="container mx-auto px-16 bg-gray-50">
        <header className="py-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Top-rated online doctors & specialists available now.
          </h1>
          <p className="text-gray-600 pd-6">
            Choose from thousands of providers at everyday affordable prices.
            Book online today.
          </p>
        </header>
        {/**  TABS */}
        <div className="mx-auto max-w-6xl">
          <TabbedItem />
        </div> 
      </div>
    );
  }
}

export default TabbedSection;
