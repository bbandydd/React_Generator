import { CHANGE_COMPONENT_NAME } from '../constants/settingConstant';

const initialState = {
    componentName: 'Component',
    group: [
        {
            text: 'Life Cycle',
            children: []
        }, {
            text: 'Immutable JS',
            children: []
        }, {
            text: 'React Router',
            children: []
        }, {
            text: 'Redux',
            children: []
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