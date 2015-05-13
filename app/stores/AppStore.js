const AppDispatcher = require('../dispatcher/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');
// const JsonData = require('../data/AppData');
const UnderScore = require("underscore");
var CHANGE_EVENT = "change";

// data storage
let _data = {};
let _subItems = [];


function _getSubItems(itemId){
    // _subItems = [];
    // var parts = itemId.match(/[\s\S]{1,3}/g) || [];
    // if(parts.length!=0){
    //   _subItems = UnderScore.where(_data.result,{id:parts[0]})[0];
    //   var newID = parts[0];
    //   for(var i=1;i<parts.length;i++){
    //     newID = newID + parts[i];
    //     if(_subItems.subCategories != undefined){
    //       var temp = UnderScore.where(_subItems.subCategories,{id:newID})[0]
    //       _subItems = temp!==undefined?temp:_subItems;
    //     }
    //   }
    // }
    // return _subItems;
  
}

// Facebook style store creation.
let AppStore = assign({}, BaseStore, {

  emitChange:function(){
    
    this.emit(CHANGE_EVENT)
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },

  // public methods used by Controller-View to operate on data
  getAll:function() {
    return {
      data: _data.result
    };
  },
  getSubItems:function(itemId){
   return _getSubItems(itemId) ;

    
  },
  getSub:function(){
    if(_subItems.subCategories!= undefined)
      return _subItems.subCategories;
    else
      return _subItems;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.UPDATE_TASK:_getSubItems(action.id);
                break;

     
    };
    AppStore.emitChange();

  })

});

module.exports = AppStore;
