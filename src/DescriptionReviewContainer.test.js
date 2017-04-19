import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionReviewContainer from './DescriptionReviewContainer';
jest.dontMock('./DescriptionReviewContainer');


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <DescriptionReviewContainer title={"Rockstar Ninja Tester"}
                                description={"We need a bright tester to lead our testing development."} />, div);
});

test('isKeyWord returns true/false when checking word to dictionary, punctuation/case insensitive', () =>{
  const testWords = ["Creative!", "work in partnership,", "direct?", "decisive:"];

  // testWords.map(word => {
  //     let actual = DescriptionReviewContainer
  //     expect(can1).toEqual(can2);
  // })
  // TestUtils.FindRenderedDOMCompeonentWithTag

});
