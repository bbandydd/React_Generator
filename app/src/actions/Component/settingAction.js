import { createAction } from 'redux-actions';
import { CHANGE_COMPONENT_NAME, TOGGLE_BUTTON } from '../../constants/Component/settingConstant';

const settingAction = {
    changeName: createAction(CHANGE_COMPONENT_NAME),
    toggleButton: createAction(TOGGLE_BUTTON)
}

export default settingAction;