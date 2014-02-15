define([
	"./widgets/formWidgets",
	"./widgets/layoutWidgets",
	"./widgets/otherWidgets",
	"./widgets/esriWidgets",
	"dojo/dom",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/on",
	"dojo/query",
	"dojo/_base/array",
	"dojo/_base/fx",
	"dojo/fx",
	"dojo/parser",
	"dojo/ready",
	"dojox/widget/Rotator",
	"dojox/widget/rotator/Fade"],
			function (formWidgets, layoutWidgets, otherWidgets, esriWidgets, dom, domClass, domStyle, on, query, array, fx, coreFx, parser, ready, Rotator) {
				ready(function () {
					var formWidgetsContainer = null, layoutWidgetsContainer = null, otherWidgetsContainer = null, esriWidgetsContainer = null;

					parser.parse();

					domStyle.set("formContainer", "opacity", "0");

					formWidgetsContainer = new formWidgets(null, "formWidgetsContent");

					var pageRotator = new Rotator({
						transition: "dojox.widget.rotator.fade"
					}, "theRotator");

					//page load animation
					var duration = 500;
					var anim = [];
					var animElements = query(".progressBarOuter .milestone");

						array.forEach(animElements, function (ele) {
							anim.push(fx.animateProperty({
								node: ele,
								properties: {
									top: { start: 0, end: 15 },
									opacity: 1,
									"filter": "alpha=(opacity=100)"
								},
								duration: duration
							}));
						});
					var progressAnim = fx.animateProperty({
						node: "progressBarValue",
						properties: {
							width: { end: 25, units: "%" }
						},
						duration: 500
					});
					anim.push(progressAnim);

					var combinedAnim = coreFx.chain(anim);
					var handle = on(combinedAnim, "End", function () {
						domClass.add(animElements[0], "current");
						fx.fadeIn({ node: "formContainer" }).play();
					});
					combinedAnim.play();

					/* event handlers*/
					var progressAnimateTo = function (progress) {
						var currentProgressValue = dom.byId("progressBarValue").style.width;
						currentProgressValue = currentProgressValue.substring(0, currentProgressValue.length - 1);
						fx.animateProperty({
							node: "progressBarValue",
							properties: {
								width: { start: currentProgressValue, end: progress, units: "%" }
							},
							duration: 500
						}).play();

					};

					query(".milestone a").forEach(function(node, index){
						on(node, "click", function () {
							dojo.publish('theRotator/rotator/control', ['go', index]);
							animElements.removeClass("current");
							domClass.add(this.parentNode, "current");
							var progressValue = 0;
							switch (index) {
								case 0:
									progressValue = 25;
									progressAnimateTo(progressValue);
									break;
								case 1:
									if (!layoutWidgetsContainer) {
										layoutWidgetsContainer = new layoutWidgets(null, "layoutWidgetsContent");
									}
									progressValue = 40;
									progressAnimateTo(progressValue);
									break;
								case 2:
									if (!otherWidgetsContainer) {
										otherWidgetsContainer = new otherWidgets(null, "otherWidgetsContent");
									}
									progressValue = 55;
									progressAnimateTo(progressValue);
									break;
								case 3:
									if (!esriWidgetsContainer) {
										esriWidgetsContainer = new esriWidgets(null, "esriWidgetsContent");
									}
									progressValue = 70;
									progressAnimateTo(progressValue);
									break;
								default:

							}
						});
					});
				});
			});