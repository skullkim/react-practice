import React from 'react';
import {withRouter} from 'react-router-dom';
const WithRouterSample = ({location, match, history}) => {
    return (
        <div>
            <h4>location</h4>
            {/*stringfy에서 두번째 인자로 null, 세번째 인자로 2를 주면 들여쓰기가 적용된 상태로 문자열이 만들어 진다*/}
            <textarea
                value={JSON.stringify(location, null, 2)}
                rows={7}
                readOnly={true}
            />
            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)}
                rows={7}
                readOnly={true}
            />
            <button onClick={() => history.push('/')}>home</button>
        </div>
    );
};
//withRouter를 사용할 때에는 컴포넌트를 내보낼때 함수로 감싸야 한다.
export default withRouter(WithRouterSample);