import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,//문자열의 ?생략
    })
    const showDetail = query.detail === 'true' //쿼리의 파싱 결과값은 string이다.
    return (
        <div>
            <h1>introduction</h1>
            <p>I made this simple project to practice basic react</p>
            {showDetail && <p>You set detail as true</p>}
        </div>
    );
}

export default About;