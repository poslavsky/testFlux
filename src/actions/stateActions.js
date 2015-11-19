import AppDispatcher from '../dispatcher/AppDispatcher';

var CommonActions = {
		toggleState: function(state) {
			AppDispatcher.dispatch({
					actionType: 'TOGGLE_STATE',
					data: state
			})
};

export default CommonActions;
