import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    model(parms){
        return Ember.$.get(`/menu/${parms.item_name}.json`);
    }
});
