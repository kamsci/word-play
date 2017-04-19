import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionReviewContainer from './DescriptionReviewContainer';
import dictionary from '../dictionary.json';
jest.dontMock('./DescriptionReviewContainer');


it('DescriptionReviewContainer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <DescriptionReviewContainer title={"Rockstar Ninja Tester"}
                                description={"We need a bright tester to lead our testing development."} />, div);
});

// test('isKeyWord returns true/false when checking word to dictionary, punctuation/case insensitive', () =>{
//   const testWords = ["Creative!", "work in partnership,", "direct?", "decisive:"];
  // const spy = jest.spyOn(DescriptionReviewContainer, 'isKeyWord');
  
  // testWords.map(word => {    
  //   let result = DescriptionReviewContainer.isKeyWord();

  //   expect(spy).toHaveBeenCalled();
  //   expect(result).toBe(true);

  //   spy.mockReset();
  //   spy.mockRestore();
  // });
// });
