import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white',
    }
    return (
        <div>
            <h3>User list:</h3>
            <ul>
                <li><NavLink activeStyle={activeStyle} to={"/profiles/velopert"}>
                    velopert
                </NavLink></li>
                <li><NavLink activeStyle={activeStyle} to={"/profiles/iskull"}>
                    iskull
                </NavLink></li>
            </ul>
            {/*props설정시 값을 생략하면 자동을 true가 할당된다.*/}
            {/*Route에 render props를 넣어 컴포넌트 자체를 전달하는 것이 아닌*/}
            {/*보여주고 싶은 JSX를 넣어줄 수 있다.*/}
            {/*컴포넌트를 따로 만들기 애매하거나 컴포넌트에 props를 별도로 넣고 싶을때 사용한다.*/}
            <Route
                path={"/profiles"}
                exact
                render={() => <div>Select user</div>}
            />
            <Route path={"/profiles/:username"} component={Profile}/>
        </div>
    )
}

export default Profiles;