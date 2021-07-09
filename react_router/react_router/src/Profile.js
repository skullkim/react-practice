import React from 'react';

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자',
    },
    iskull: {
        name: '김윤기',
        description: '코딩 좀 잘하고 싶다',
    }
};

//URL파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아오는
//match라는 객체 안의 params값을 참조한다.
const Profile = ({match}) => {
    //match.params에 있는 username값을 조회
    //username은 해당 Route컴포넌트에 존재.
    const {username} = match.params;
    const profile = data[username];
    if(!profile) {
        return <div>user doesn't exist</div>
    }
    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;