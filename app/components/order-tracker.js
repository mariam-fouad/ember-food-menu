import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    orderManger: Ember.inject.service('order-manger')
});
