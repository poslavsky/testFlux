import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import _  from 'lodash';

var _dialogState = false;


function toggleState(data) {
    _dialogState = !data;
}

var ToggleStateStore = _.merge({}, EventEmitter.prototype, {

		toggleState: function() {
        return _toggleState;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {

    switch(payload.actionType) {
				case 'TOGGLE_STATE':
		        toggleState(payload.data);
		        break;
        default:
            return true;
    }

    ToggleStateStore.emitChange();

    return true;
});

export default ToggleStateStore;
