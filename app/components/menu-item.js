import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    orderManager: Ember.inject.service('order-manger'),
    tagName:'li',
    classNames:"menu-item",
    choosenMeal:'breakfast',
    actions:{
        choosetem(menu){
            this.get('orderManager').setMenuMeal(this.get('choosenMeal'),menu);
        },
        cahngeMeal(meal){
            this.set('choosenMeal',meal);
        }
    }
});
