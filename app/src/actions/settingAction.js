import { CHANGE_COMPONENT_NAME } from '../constants/settingConstant';

export const changeName = (e) =>  {
    return {
        type: CHANGE_COMPONENT_NAME,
        componentName: e.target.value
    }
}