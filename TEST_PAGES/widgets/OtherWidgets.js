define(["dojo/_base/declare",
			"dijit/_WidgetBase",
			"dijit/_TemplatedMixin",
			"dijit/_WidgetsInTemplateMixin",
			"dojo/text!./templates/OtherWidgets.html",
			"dojo/on",
			"dojo/_base/lang",
            "dojo/aspect",
            "dojo/dnd/Source",

			"dijit/ProgressBar",
			"dijit/Dialog",
			"dijit/TooltipDialog",
			"dijit/Tooltip",
			"dijit/form/DropDownButton",
			"dijit/form/TextBox",
			"dijit/form/Button",
			"dijit/MenuBar",
			"dijit/MenuBarItem",
            "dijit/MenuSeparator",
            "dijit/PopupMenuItem",
			"dijit/PopupMenuBarItem",
			"dijit/DropDownMenu",
			"dijit/MenuItem",
            "dijit/CheckedMenuItem",
            "dijit/ColorPalette",
            "dijit/TitlePane",
            "dijit/Tree",
            "dijit/tree/ObjectStoreModel",
            "dijit/tree/dndSource",
            "dojo/store/Memory",
            "dijit/InlineEditBox",
            "dijit/form/NumberTextBox",
            "dijit/Editor",
            "dijit/_editor/_Plugin",
			"dijit/_editor/plugins/AlwaysShowToolbar",
			"dijit/_editor/plugins/FontChoice",  // 'fontName','fontSize','formatBlock'
			"dijit/_editor/plugins/TextColor",
			"dijit/_editor/plugins/LinkDialog",
            "dijit/_editor/plugins/FullScreen",
			"dijit/_editor/plugins/ViewSource",
            "dijit/_editor/plugins/NewPage",
            "dijit/_editor/plugins/Print",
            "dijit/_editor/plugins/TabIndent",
            "dijit/_editor/plugins/ToggleDir"
],
		function (declare, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, template, on, lang, aspect, Source) {  

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

		            // tree
		            this.initTree();

		            // editor
		            this.initEditBox();

		            // inline edit box
		            this.initInlineEditBox();

                    // DnD
		            this.initDnD();
		        },

		        startup: function () {
		        },

		        initMenuBar: function () {
		            var pMenuBar = new dijit.MenuBar({});

		            var pSubMenu = new dijit.DropDownMenu({});
		            pSubMenu.addChild(new dijit.CheckedMenuItem({
		                label: "Checked menu item 1"
		            }));
		            pSubMenu.addChild(new dijit.CheckedMenuItem({
		                label: "Checked menu item 2"
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
		                iconClass: "dijitEditorIcon dijitEditorIconCopy",
		                disabled: true
		            }));
		            pSubMenu2.addChild(new dijit.MenuItem({
		                label: "Paste",
		                iconClass: "dijitEditorIcon dijitEditorIconPaste"
		            }));
		            pSubMenu2.addChild(new dijit.MenuSeparator());


		            var pSubMenu3 = new dijit.Menu();
		            pSubMenu3.addChild(new dijit.MenuItem({
		                label: "Submenu item"
		            }));
		            pSubMenu3.addChild(new dijit.MenuItem({
		                label: "Submenu item"
		            }));
		            pSubMenu2.addChild(new dijit.PopupMenuItem({
		                label: "More...",
		                popup: pSubMenu3
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
		        },

		        initTree: function () {
		            // Sample code from: http://dojotoolkit.org/reference-guide/1.10/dijit/Tree.html
		            // Create test store, adding the getChildren() method required by ObjectStoreModel
		            var treeStore = new dojo.store.Memory({
		                data: [
                            { id: 'world', name: 'The earth', type: 'planet', population: '6 billion' },
                            {
                                id: 'AF', name: 'Africa', type: 'continent', population: '900 million', area: '30,221,532 sq km',
                                timezone: '-1 UTC to +4 UTC', parent: 'world'
                            },
                                { id: 'EG', name: 'Egypt', type: 'country', parent: 'AF' },
                                { id: 'KE', name: 'Kenya', type: 'country', parent: 'AF' },
                                    { id: 'Nairobi', name: 'Nairobi', type: 'city', parent: 'KE' },
                                    { id: 'Mombasa', name: 'Mombasa', type: 'city', parent: 'KE' },
                                { id: 'SD', name: 'Sudan', type: 'country', parent: 'AF' },
                                    { id: 'Khartoum', name: 'Khartoum', type: 'city', parent: 'SD' },
                            { id: 'AS', name: 'Asia', type: 'continent', parent: 'world' },
                                { id: 'CN', name: 'China', type: 'country', parent: 'AS' },
                                { id: 'IN', name: 'India', type: 'country', parent: 'AS' },
                                { id: 'RU', name: 'Russia', type: 'country', parent: 'AS' },
                                { id: 'MN', name: 'Mongolia', type: 'country', parent: 'AS' },
                            { id: 'OC', name: 'Oceania', type: 'continent', population: '21 million', parent: 'world' },
                            { id: 'EU', name: 'Europe', type: 'continent', parent: 'world' },
                                { id: 'DE', name: 'Germany', type: 'country', parent: 'EU' },
                                { id: 'FR', name: 'France', type: 'country', parent: 'EU' },
                                { id: 'ES', name: 'Spain', type: 'country', parent: 'EU' },
                                { id: 'IT', name: 'Italy', type: 'country', parent: 'EU' },
                            { id: 'NA', name: 'North America', type: 'continent', parent: 'world' },
                            { id: 'SA', name: 'South America', type: 'continent', parent: 'world' }
		                ],
		                getChildren: function (object) {
		                    return this.query({ parent: object.id });
		                }
		            });

		            aspect.around(treeStore, "put", function (originalPut) {
		                // To support DnD, the store must support put(child, {parent: parent}).
		                // Since memory store doesn't, we hack it.
		                // Since our store is relational, that just amounts to setting child.parent
		                // to the parent's id.
		                return function (obj, options) {
		                    if (options && options.parent) {
		                        obj.parent = options.parent.id;
		                    }
		                    return originalPut.call(treeStore, obj, options);
		                }
		            });

		            // Create the model
		            var treeModel = new dijit.tree.ObjectStoreModel({
		                store: treeStore,
		                query: { id: 'world' }
		            });

		            // Create the Tree.
		            var tree = new dijit.Tree({
		                model: treeModel,
		                dndController: dijit.tree.dndSource,
		            }, this.treeNode);
		            tree.startup();
		        },

		        initEditBox: function () {
		            var myEditor = new dijit.Editor({
		                height: '300px',
		                //extraPlugins: [dijit._editor.plugins.AlwaysShowToolbar],
		                plugins: ['undo', 'redo', '|', 'cut', 'copy', 'paste', 'selectAll', 'delete', '|',
                                  'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', 'removeFormat', '|',
                                  'insertOrderedList', 'insertUnorderedList', 'indent', 'outdent', 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull', '|',
                                  'insertHorizontalRule', 'insertImage', 'createLink', 'unlink', 'foreColor', 'hiliteColor', '|',
                                  'fontSize', 'formatBlock', 'viewSource', '|', 'newpage', 'fullscreen', 'print', 'tabIndent', 'toggleDir']
                        //,
                        //dir: "rtl"
		                //disabled: true
		            }, this.editorNode);
		            myEditor.startup();
		        },

		        initInlineEditBox: function () {
		            new dijit.InlineEditBox({
		                editor: dijit.form.NumberTextBox,
		                autoSave: false
		            }, this.InlineEditBoxNode).startup();
		        },
                
		        initDnD: function () {
		            var dndList = new Source(this.DnDList, {});
		            
		            dndList.insertNodes(false, [
                        "Wrist watch",
                        "Life jacket",
                        "Toy bulldozer",
                        "Vintage microphone",
                        "TIE fighter"
		            ]);
		        }
		    });
		});