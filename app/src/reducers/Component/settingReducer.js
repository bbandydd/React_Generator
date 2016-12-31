import { handleActions } from 'redux-actions';
import { CHANGE_COMPONENT_NAME, TOGGLE_BUTTON } from '../../constants/Component/settingConstant';
import { initialState } from '../../constants/Component/initial';

const settingReducer = handleActions({
    CHANGE_COMPONENT_NAME: (state, { payload }) => ({
            ...state,
            componentName: payload.target.value
    }),
    TOGGLE_BUTTON: (state, { payload }) => {
        const { parentIndex, index } = payload;

        return {
            ...state,
            group: [
                ...state.group.slice(0, parentIndex),
                { 
                    ...state.group[parentIndex],
                    children: [
                        ...state.group[parentIndex].children.slice(0, index),
                        {
                            ...state.group[parentIndex].children[index],
                            clicked: !state.group[parentIndex].children[index].clicked
                        },
                        ...state.group[parentIndex].children.slice(index+1)
                    ]
                },
                ...state.group.slice(parentIndex+1)
            ]
        }
    }
}, initialState);

export default settingReducer;