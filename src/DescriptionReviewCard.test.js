import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionReviewCard from './DescriptionReviewCard';
import Word from './Word';
import TestUtils from 'react-dom/test-utils';
jest.dontMock('./DescriptionReviewContainer');

// Setup
 let testState = {
    title: "Rockstar Ninja Tester",
    description: ["We", "need", "a", <span id="Word3" className="match" key="3">bright</span>, "tester", "to", <span id="Word6" className="match" key="6">lead</span>, "our", "testing", "development"],
 }

// Tests
describe('DescriptionReviewCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DescriptionReviewCard title={testState.title}
                            description={testState.description} />, div);
  });

  it('shows job title', () =>{
    let desRevCard = TestUtils.renderIntoDocument(
      <DescriptionReviewCard title={testState.title} description={testState.description} />
    );

    let title =  TestUtils.findRenderedDOMComponentWithTag(desRevCard, "h4");

    expect(title.textContent).toEqual(testState.title);
  });

  it('creates the correct number of Word components', () => {
    let desRevCard = TestUtils.renderIntoDocument(
      <DescriptionReviewCard title={testState.title} description={testState.description} />
    );

    let wordComponents = TestUtils.scryRenderedComponentsWithType(desRevCard, Word);
    console.log(wordComponents)
    expect(wordComponents.length).toEqual(10)
  })
});