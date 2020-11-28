import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src='https://source.unsplash.com/random'/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {faker.name.findName()}
        </a>
        <div className="metadata">
          <span className="date">{faker.date.past().toISOString()}</span>
        </div>
        <div className="text">{faker.lorem.sentence()}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
