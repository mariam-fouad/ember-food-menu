import Service from '@ember/service';

export default Service.extend({
    activeDay:"Monday",
    menuSelection:{
        Monday:{},
        Tuesday:{},
        Wednesdat:{},
        Thursday:{},
        Friday:{}
    },

    setActiveDay (day){
        this.set('activeDay',day);
    },

    setMenuMeal(meal,menuItem){
        this.set('menuSelection.'+this.get('activeDay')+'.'+meal,menuItem);
    },
    resetMenuMeal(day,meal){
        this.set('menuSelection.'+day+'.'+meal,'');
    },

});
