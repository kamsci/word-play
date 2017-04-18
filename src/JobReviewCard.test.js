import React from 'react';
import ReactDOM from 'react-dom';
import JobReviewCard from './JobReviewCard';
import DescriptionReviewContainer from './DescriptionReviewContainer';
import JobForm from './JobForm';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobReviewCard />, div);
});

test('JobReviewCard changes when editMode toggles', () => {
  const component = renderer.create(
    <JobReviewCard />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger editMode
  tree.props.editMode = false;
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.editMode = true;
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});