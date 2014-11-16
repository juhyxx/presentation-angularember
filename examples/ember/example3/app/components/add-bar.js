import Ember from 'ember';

export default Ember.Component.extend({

	name: '',

	estimated: 0,

	actions: {
		add: function() {
			this.sendAction('action', this.get('name') || 'Task', this.get('estimated') || 2 * 60 * 1000);
		}
	}
});