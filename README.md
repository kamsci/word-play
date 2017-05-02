## Word Play
w: kristacalderon.com/word-play

#### Summary
For my first foray into React, I created a small application that allows a user to view a job description and change highlighted words to a suggested alternative. 

   The application has 2 main user components:  
* Job description input form
* Job description review and update 

In the input form, the user can enter a job description for review. (In order to see the functionality, use some of the key words listed in the top right tooltip). Clicking submit will switch from an input form to display the job with key words highlighted.

In the Job description review and update component, the user can hover over a highlighted word and a tooltip modal will appear with alternative word choices. Just click on a word to replace it in the job description. If the user clicks 'Edit', the synonym updates to the description will presist.


#### Component Tree
* App
  * JobReviewCard
    * JobForm
    * DescriptionReviewContiner
      * DescriptionReviewCard
        * WordList
          * SynonymPick (In tooltip)

#### Data Assumptions
 - The job is entered in plain text, Word doc pastes can carry other formatting characters and can interfere with functionality. 
 - A dictionary of words has been identified and is listed in the tooltip at the tip right, only these words are editable. 
 - At this time, if the 'word' is at the beginning of a sentence, it will not be capitalized. 
   

---------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

For more details see here: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment
