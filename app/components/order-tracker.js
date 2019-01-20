import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    orderManger: Ember.inject.service('order-manger'),
    actions:{
        resetItem(day,meal){
            this.get('orderManger').resetMenuMeal(day,meal);
        },
        setActiveDay(day){
            this.get('orderManger').setActiveDay(day);
        }
    }
});
