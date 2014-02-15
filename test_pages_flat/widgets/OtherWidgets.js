define(["dojo/_base/declare",
			"dijit/_WidgetBase",
			"dijit/_TemplatedMixin",
			"dijit/_WidgetsInTemplateMixin",
			"dojo/text!./templates/OtherWidgets.html",
			"dojo/on",
			"dojo/_base/lang",
			"dijit/ProgressBar",
			"dijit/Dialog",
			"dijit/TooltipDialog",
			"dijit/Tooltip",
			"dijit/form/DropDownButton",
			"dijit/form/TextBox",
			"dijit/form/Button",
			"dijit/MenuBar",
			"dijit/MenuBarItem",
			"dijit/PopupMenuBarItem",
			"dijit/DropDownMenu",
			"dijit/MenuItem"
],
		function (declare, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, template, on, lang) {
			return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
				templateString: template,
				widgetsInTemplate: true,

				constructor: function () {
				},

				postCreate: function () {
					this.inherited(arguments);
					this.initMenuBar();
					//tooltip dialog
					var myDialog = new dijit.Dialog({
						title: "My Dialog",
						content: "Test content.",
						style: "width: 300px"
					});

					var tooltipDialog1 = new dijit.TooltipDialog({
						content:  '<form data-dojo-type="dijit/form/Form"><br/>This tooltip dialog has an action bar.<br/><br/>' +
											'<div class="dijitDialogPaneActionBar">' +
											'<button data-dojo-type="dijit/form/Button" type="reset">Reset</button>' +
											'<button data-dojo-type="dijit/form/Button" type="submit">Login</button></div></form>'
					});
					this.tooltipdialogButton1.set("dropDown", tooltipDialog1);

					var tooltipDialog2 = new dijit.TooltipDialog({
						content: '<span><br/>This is the content.<br/><br/></span>'
					});
					this.tooltipdialogButton2.set("dropDown", tooltipDialog2);

					var tooltipDialog3 = new dijit.TooltipDialog({
						content: '<form data-dojo-type="dijit/form/Form"><br/>This tooltip dialog has an action bar.<br/><br/>' +
											'<div class="dijitDialogPaneActionBar">' +
											'<button data-dojo-type="dijit/form/Button" type="reset">Reset</button>' +
											'<button data-dojo-type="dijit/form/Button" type="submit">Login</button></div></form>'
					});
					this.tooltipdialogButton3.set("dropDown", tooltipDialog3);

					var tooltipDialog4 = new dijit.TooltipDialog({
						content: '<span><br/>This is the content.<br/><br/></span>'
					});
					this.tooltipdialogButton4.set("dropDown", tooltipDialog4);

					//tooltips
					new dijit.Tooltip({
						connectId: this.tooltipAbove,
						label: "tooltip: above",
						position: ['above']
					});
					new dijit.Tooltip({
						connectId: this.tooltipAboveCentered,
						label: "tooltip: above centered",
						position: ['above-centered']
					});
					new dijit.Tooltip({
						connectId: this.tooltipBelow,
						label: "tooltip: below",
						position: ['below']
					});
					new dijit.Tooltip({
						connectId: this.tooltipBelowCentered,
						label: "tooltip: below centered",
						position: ['below-centered']
					});
					new dijit.Tooltip({
						connectId: this.tooltipBefore,
						label: "tooltip: before",
						position: ['before']
					});
					new dijit.Tooltip({
						connectId: this.tooltipAfter,
						label: "tooltip: after",
						position: ['after']
					});
				},

				startup: function () {
				},

				initMenuBar: function () {
					var pMenuBar = new dijit.MenuBar({});

					var pSubMenu = new dijit.DropDownMenu({});
					pSubMenu.addChild(new dijit.MenuItem({
						label: "File item #1"
					}));
					pSubMenu.addChild(new dijit.MenuItem({
						label: "File item #2"
					}));
					pMenuBar.addChild(new dijit.PopupMenuBarItem({
						label: "File",
						popup: pSubMenu
					}));

					var pSubMenu2 = new dijit.DropDownMenu({});
					pSubMenu2.addChild(new dijit.MenuItem({
						label: "Cut",
						iconClass: "dijitEditorIcon dijitEditorIconCut"
					}));
					pSubMenu2.addChild(new dijit.MenuItem({
						label: "Copy",
						iconClass: "dijitEditorIcon dijitEditorIconCopy"
					}));
					pSubMenu2.addChild(new dijit.MenuItem({
						label: "Paste",
						iconClass: "dijitEditorIcon dijitEditorIconPaste"
					}));
					pMenuBar.addChild(new dijit.PopupMenuBarItem({
						label: "Edit",
						popup: pSubMenu2
					}));

					pMenuBar.addChild(new dijit.MenuBarItem({
						label: "Info"
					}));

					pMenuBar.placeAt(wrapper);
					pMenuBar.startup();
				}

			});
		});