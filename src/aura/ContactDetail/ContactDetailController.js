({
	doInit: function(component, event, helper) {
		console.log("init")
		var recId = component.get("v.recordId");
        var action = component.get("c.getAccountContacts");
        action.setParams({
            recordId: recId
        });
        action.setCallback(this, function(response){
            var res = response.getReturnValue();
            console.log("d: ", res)
            component.set("v.accountContacts", res);
        });
        $A.enqueueAction(action);
	},
	showDetails : function(component, event, helper) {
		helper.showHideModal(component);
	}
})