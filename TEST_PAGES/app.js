define([
	"./widgets/formWidgets",
	"./widgets/layoutWidgets",
	"./widgets/otherWidgets",
	"./widgets/dgridWidget",
	"./widgets/esriWidgets",
	"dojo/dom",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/on",
	"dojo/query",
	"dojo/_base/array",
	"dojo/parser",
	"dojo/ready"],
			function (
                formWidgets, layoutWidgets, otherWidgets, dgridWidget, esriWidgets,
                dom, domClass, domStyle, on, query, array,
                parser, ready) {
				ready(function () {
				    var
                        formWidgetsContainer = null,
                        layoutWidgetsContainer = null,
                        otherWidgetsContainer = null,
                        dgridWidgetContainer = null,
                        esriWidgetsContainer = null;

					parser.parse();

					formWidgetsContainer = new formWidgets(null, "formWidgetsContent");

					query(".nav li a").forEach(function (node, index) {
						on(node, "click", function () {
							query(".nav li.current").removeClass("current");
							domClass.add(this.parentNode, "current");
							goto(this.getAttribute("data-target-node"));

							switch (index) {
								case 0:
									break;
								case 1:
									if (!layoutWidgetsContainer) {
										layoutWidgetsContainer = new layoutWidgets(null, "layoutWidgetsContent");
									}
									break;
								case 2:
									if (!otherWidgetsContainer) {
										otherWidgetsContainer = new otherWidgets(null, "otherWidgetsContent");
									}
									break;
								case 3:
								    if (!dgridWidgetContainer) {
								        dgridWidgetContainer = new dgridWidget(null, "dgridWidgetContent");
									}
									break;
								default:
								    if (!esriWidgetsContainer) {
								        esriWidgetsContainer = new esriWidgets(null, "esriWidgetsContent");
								    }
								    break;
							}
						});
					});

					var goto = function (nodeId) {
					    query(".content-wrapper .show").removeClass("show");
					    domClass.add(nodeId, "show");
					};
				});
			});