
sap.ui.core.UIComponent.extend("smax.batch32.A1.Component", {
	
	metadata : {
		rootView : "smax.batch32.A1.view.App",
		routing : {
			config : {
				routerClass : "sap.m.routing.Router",viewType : "XML",
				controlId : "idApp",
				controlAggregation : "pages",
				viewPath : "smax.batch32.A1.view"
			},
			routes : [
				{
				 pattern : "",
				 name : "p1",
				 viewName : "Page1",
				}, 
				{
				pattern : "toPage2",
				name : "p2",
				viewName : "Page2",				
				}
			]
			
		}
	},
	init : function(){
		//framework will create a Router for smax.batch31.A1 Component
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		//getting the reference of Router
		var oRouter = this.getRouter();
		oRouter.initialize();
	}
});