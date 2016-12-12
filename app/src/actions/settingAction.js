import { CHANGE_COMPONENT_NAME, TOGGLE_BUTTON } from '../constants/settingConstant';

export const changeName = (e) =>  {
    return {
        type: CHANGE_COMPONENT_NAME,
        componentName: e.target.value
    }
}

export const toggleButton = (parentIndex, index) => {
    return {
        type: TOGGLE_BUTTON,
        parentIndex,
        index
    }
}