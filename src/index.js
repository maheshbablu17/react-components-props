import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';


import CommentDetail from './CommentComponent/CommentDetail';
import ApprovalCard from './CommentComponent/ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="mahesh" 
          message={faker.lorem.sentence()}
          avatar={faker.image.avatar()} 
          time = {faker.date.month()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="mahi" 
          message={faker.lorem.sentence()}
          avatar={faker.image.avatar()} 
          time = {faker.date.month()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="bablu" 
          message={faker.lorem.sentence()} 
          avatar={faker.image.avatar()} 
          time = {faker.date.month()}
        />
      </ApprovalCard>


      

      



    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))