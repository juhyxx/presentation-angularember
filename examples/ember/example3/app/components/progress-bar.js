import Ember from 'ember';

export default Ember.Component.extend({
	time: 0,

	widthStyle: 'width: 0%;',

	fillStyle: function() {
		return 'width:' + this.get('value') + '%';
	}.property('value'),

	actions: {
		stop: function() {
			this.sendAction();
		}
	}
});