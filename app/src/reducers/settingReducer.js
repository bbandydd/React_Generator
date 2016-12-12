import { CHANGE_COMPONENT_NAME } from '../constants/settingConstant';

const initialState = {
    componentName: 'Component',
    group: [
        {
            text: 'Life Cycle',
            children: [
                {name: 'componentWillMount', clicked: false},
                {name: 'componentDidMount', clicked: true},
                {name: 'componentWillReceiveProps', clicked: false},
                {name: 'shouldComponentUpdate', clicked: false},
                {name: 'componentWillUpdate', clicked: false},
                {name: 'componentDidUpdate', clicked: false},
                {name: 'componentWillUnmount', clicked: false}
            ]
        },{
            text: 'React Router',
            children: [
                {name: 'Link', clicked: false}
            ]
        }, {
            text: 'Redux',
            children: [
                {name: 'Connect', clicked: false}
            ]
        }
    ]
}

const settingReducer = (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_COMPONENT_NAME:
            return {
                ...state,
                componentName: action.componentName
            }
        default:
            return state;
    }
}
export default settingReducer;