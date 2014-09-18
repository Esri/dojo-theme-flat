define(["dojo/_base/declare",
			"dijit/_WidgetBase",
			"dijit/_TemplatedMixin",
			"dijit/_WidgetsInTemplateMixin",
			"dojo/text!./templates/LayoutWidgets.html",
			"dojo/_base/lang",
			"dijit/layout/BorderContainer",
			"dijit/layout/TabContainer",
			"dijit/layout/AccordionContainer",
			"dijit/layout/ContentPane"
],
		function (declare, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, template, lang,
			BorderContainer, TabContainer, AccordionContainer, ContentPane) {
			return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
				templateString: template,
				widgetsInTemplate: true,

				constructor: function () {
				},

				postCreate: function () {
					this.inherited(arguments);
					this.Accordion.startup();
					/* borderContainer */
					var bc = new BorderContainer({ style: "height: 100%; width: 100%;", liveSplitters: true, gutters:true });
					var bcp1 = new ContentPane({
						region: "top",
						content: "Top Panel"
					});

					//var bc11 = new BorderContainer({ style: "height: 100%; width: 100%;", liveSplitters: true, gutters: true });
					//var bcp11 = new ContentPane({
					//	region: "top",
					//	content: "Top Panel"
					//});
					//bc11.addChild(bcp11);
					//bcp1.addChild(bc11);

					bc.addChild(bcp1);

					var bcp2 = new ContentPane({
						region: "leading",
						content: "Leading Panel",
						splitter: true
					});
					bc.addChild(bcp2);
					var bcp3 = new ContentPane({
						region: "center",
						content: "Center Panel"
					});
					bc.addChild(bcp3);
					var bcp4 = new ContentPane({
						region: "trailing",
						content: "Trailing Panel"
					});
					bc.addChild(bcp4);
					var bcp5 = new ContentPane({
						region: "bottom",
						content: "Bottom Panel"
					});
					bc.addChild(bcp5);
					this.borderContainer.appendChild(bc.domNode);
					bc.startup();

					/* tabContainers */
					
					/* top */
					var tcpnestedTop1 = new ContentPane({
						title: "Tab 1",
						content: "nested tab container(top)"
					});
					var tcpnestedTop2 = new ContentPane({
						title: "Tab 2"
					});
					var tcpnestedTop3 = new ContentPane({
						title: "Tab 3",
						closable: true
					});
					var tcnestedTop = new TabContainer({
						tabPosition: "top",
						nested: true
					});
					tcnestedTop.addChild(tcpnestedTop1);
					tcnestedTop.addChild(tcpnestedTop2);
					tcnestedTop.addChild(tcpnestedTop3);

					tcnestedTop.startup();

					var tcp1 = new ContentPane({
						title: "Tab 1",
						content: tcnestedTop
					});
					var tcp2 = new ContentPane({
						title: "Tab 2"
					});
					var tcp3 = new ContentPane({
						title: "Tab 3",
						closable: true
					});
					var tcp4 = new ContentPane({
						title: "Tab 4",
						closable: true
					});
					var tcp5 = new ContentPane({
					    title: "Tab 555555",
					    closable: true
					});
					var tcp6 = new ContentPane({
					    title: "Tab 666",
					    closable: true
					});
					var tct = new TabContainer({
						style: "height: 240px; width: 450px;",
						tabPosition: "top-h"
					}, this.tabContainerTop);

					tct.addChild(tcp1);
					tct.addChild(tcp2);
					tct.addChild(tcp3);
					//tct.addChild(tcp4);
					//tct.addChild(tcp5);
					//tct.addChild(tcp6);
					tct.startup();
					/* left */
					var tcpnestedLeft1 = new ContentPane({
						title: "Tab 1",
						content: "nested tab container(left)"
					});
					var tcpnestedLeft2 = new ContentPane({
						title: "Tab 2"
					});
					var tcpnestedLeft3 = new ContentPane({
						title: "Tab 3"
					});
					var tcnestedLeft = new TabContainer({
						tabPosition: "left",
						nested: true
					});
					tcnestedLeft.addChild(tcpnestedLeft1);
					tcnestedLeft.addChild(tcpnestedLeft2);
					tcnestedLeft.addChild(tcpnestedLeft3);

					tcnestedLeft.startup();

					var tclp1 = new ContentPane({
						title: "Tab 1",
						content: tcnestedLeft
					});
					var tclp2 = new ContentPane({
						title: "Tab 2",
						content: "some content"
					});
					var tclp3 = new ContentPane({
					    title: "Tab 3",
					    content: "some content",
					    closable: true
					});
					var tcl = new TabContainer({
						style: "height: 240px; width: 450px;",
						tabPosition: "left-h"//,
						//tabStrip: true
					}, this.tabContainerLeft);

					tcl.addChild(tclp1);
					tcl.addChild(tclp2);
					tcl.addChild(tclp3);

					tcl.startup();
					/* right */
					var tcpnestedRight1 = new ContentPane({
						title: "Tab 1",
						content: "nested tab container(right)"
					});
					var tcpnestedRight2 = new ContentPane({
						title: "Tab 2"
					});
					var tcpnestedRight3 = new ContentPane({
						title: "Tab 3"
					});
					var tcnestedRight = new TabContainer({
						tabPosition: "right",
						nested: true
					});
					tcnestedRight.addChild(tcpnestedRight1);
					tcnestedRight.addChild(tcpnestedRight2);
					tcnestedRight.addChild(tcpnestedRight3);

					tcnestedRight.startup();

					var tcrp1 = new ContentPane({
						title: "Tab 1",
						content: tcnestedRight
					});
					var tcrp2 = new ContentPane({
					    title: "Tab 2",
                        closable: true
					});
					var tcrp3 = new ContentPane({
					    title: "Tab 3"
					});

					var tcr = new TabContainer({
						style: "height: 240px; width: 450px;",
						tabPosition: "right-h"
					}, this.tabContainerRight);

					tcr.addChild(tcrp1);
					tcr.addChild(tcrp2);
					tcr.addChild(tcrp3);

					tcr.startup();
					/* bottom */
					var tcpnestedBottom1 = new ContentPane({
						title: "Tab 1",
						content: "nested tab container(bottom)"
					});
					var tcpnestedBottom2 = new ContentPane({
						title: "Tab 2"
					});
					var tcpnestedBottom3 = new ContentPane({
						title: "Tab 3"
					});
					var tcnestedBottom = new TabContainer({
						tabPosition: "bottom",
						nested: true
					});
					tcnestedBottom.addChild(tcpnestedBottom1);
					tcnestedBottom.addChild(tcpnestedBottom2);
					tcnestedBottom.addChild(tcpnestedBottom3);

					tcnestedBottom.startup();

					var tcbp1 = new ContentPane({
						title: "Tab 1",
						content: tcnestedBottom
					});
					var tcbp2 = new ContentPane({
						title: "Tab2"
					});
					var tcbp3 = new ContentPane({
						title: "Tab 3"
					});
					var tcbp4 = new ContentPane({
						title: "Tab 4"
					});
					var tcbp5 = new ContentPane({
						title: "Tab 5"
					});
					var tcbp6 = new ContentPane({
						title: "Tab 6"
					});
					var tcbp7 = new ContentPane({
						title: "Tab 7"
					});
					var tcbp8 = new ContentPane({
						title: "Tab 8"
					});
					var tcb = new TabContainer({
						style: "height: 240px; width: 450px;",
					    //tabPosition: "bottom-h"
					    tabPosition: "bottom"
					}, this.tabContainerBottom);

					tcb.addChild(tcbp1);
					tcb.addChild(tcbp2);
					tcb.addChild(tcbp3);
					tcb.addChild(tcbp4);
					tcb.addChild(tcbp5);
					tcb.addChild(tcbp6);
					tcb.addChild(tcbp7);
					tcb.addChild(tcbp8);
					tcb.startup();
				},

				startup: function () {
				}

			});
		});