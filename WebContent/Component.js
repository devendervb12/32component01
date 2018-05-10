
sap.ui.core.UIComponent.extend("smax.batch32.A1.Component", {
	
	createContent : function(){	

		// xml view
		/*var oPage = new sap.m.Page({
			content : [
				new sap.m.Button({ text : "Save"})
			]
		});*/
		
		var oPage = sap.ui.view({
		       id : "idView1",
		       viewName : "smax.batch32.A1.view.Page1",
		       type : "XML"
		});
		
		return new sap.m.App({
			pages :[
			
			oPage	
				
			]
		})
	}
	
});