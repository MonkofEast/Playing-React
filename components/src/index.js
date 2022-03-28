import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './ComentDetails';
import ApprovalCard from './ApprovalCard';

const App = function () {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you wanna do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Same"
                    timeAgo="Today at 4:45PM"
                    avatar={faker.image.image()}
                    comment={faker.hacker.phrase()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00PM"
                    avatar={faker.image.image()}
                    comment={faker.hacker.phrase()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 4:45PM"
                    avatar={faker.image.image()}
                    comment={faker.hacker.phrase()} />
            </ApprovalCard>
        </div>

    );
}

ReactDOM.render(<App />, document.querySelector('#root'))