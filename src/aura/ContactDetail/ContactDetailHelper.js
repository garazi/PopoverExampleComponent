({
    showHideModal : function(component) {
    	var index = event.currentTarget.dataset.index;
    	var f = "#details-"+index;
        var modal = document.querySelector(f);
        $A.util.toggleClass(modal, 'slds-hide');
        var overlay = component.find("overlay");
        $A.util.toggleClass(overlay, 'slds-hide');
    }
})