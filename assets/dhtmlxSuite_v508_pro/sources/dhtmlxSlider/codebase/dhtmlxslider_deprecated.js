/*
Product Name: dhtmlxSuite 
Version: 5.0.8 
Edition: Professional 
License: content of this file is covered by DHTMLX Commercial or Enterprise license. Usage without proper license is prohibited. To obtain it contact sales@dhtmlx.com
Copyright UAB Dinamenta http://www.dhtmlx.com
*/

window.dhtmlxSlider = window.dhtmlXSlider;

dhtmlXSlider.prototype.setOnChangeHandler = function(fun) {
	if (typeof fun == "function") {
		this.attachEvent("onChange", fun);
	}
};

dhtmlXSlider.prototype.init = function() {
	// no longer used
};

dhtmlXSlider.prototype.setImagePath = function() {
	// no longer used
};

