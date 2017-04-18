import React from 'react';
import ReactDOM from 'react-dom';
import JobReviewCard from './JobReviewCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobReviewCard />, div);
});
