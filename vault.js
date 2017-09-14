'use strict';
module.exports = function() {
  var vault = {};
  function setValue( key, value){
    vault[key] = value;
    //return  Object.values(vault);
  };

  function getValue( key ){

    if(vault[key] === undefined){
      return null;
    }else{
      return vault[key];
    }
  };

  return {
    setValue : setValue,
    getValue : getValue
  }
};