import React from 'react';
import ReactDOM from 'react-dom';
import Word from './Word';
import ToolTip from 'react-portal-tooltip';

import TestUtils from 'react-dom/test-utils';
jest.dontMock('./Word');

// Setup
let testState = {
  title: "Rockstar Ninja Tester",
  wordObj1: "We",
  wordObj2: <span id="Word3" className="match" key="3">bright</span>
}


// Tests
describe('Word', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Word key={0}
            wordObj={testState.wordObj2} />, div)
  });

  it('span wordObj has tooltip', () => {

    let word = TestUtils.renderIntoDocument(
      <Word title={testState.title} wordObj={testState.wordObj2} />
    );

    let hasToolTip = TestUtils.findRenderedComponentWithType(word,ToolTip);

    expect(hasToolTip).toBeTruthy();
  });
})