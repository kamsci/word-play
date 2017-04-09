## Word Play
w: kristacalderon.com/word-play

#### Summary
For my first foray into React, I created a small application that allows a user to view a job description and change highlighted words to a suggested alternative. 

   The application has 2 main user sections:  
* Sentence Review and Update
* Job Description

In the Job Description section, the user can click on a sentence and bring it to the Sentence Review section for updating. 

In the Sentence Review section, the use can replace the highlighted word with one of the alternative choices by clicking on it. When the user clicks 'Update', the sentance and the Job Description section is updated with the new selected word.

For now, only one word can be highlighted and replaced per sentance.

#### Component Tree
* App
  * JobReviewCardContainer (get data here; hardcoded for now)
    * JobReviewCard
      * SentenceReviewCard
        * Sentence
        * WordList
      * DescriptionCard
        * Sentence 

#### Data Assumptions
 - The job is an array of objects containing 3 keys: 'sentence', 'wordInUse', 'wordOptions'.
 - Each 'sentance' contains a single key word that has already been flagged and is defined as the 'wordInUse. 
 - A list of alternative word options have been identified and are listed in an array in 'wordOptions'. 
 - The 'wordInUse' only exists a singular time in a sentance and not at the beginning. 
   - Example: If 'wordInUse' is 'creative', this scenario is not supported > "Creative thinking is a must in this creative position."

---------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

For more details see here: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment
