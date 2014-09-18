define(["dojo/_base/declare",
			"dijit/_WidgetBase",
			"dijit/_TemplatedMixin",
			"dijit/_WidgetsInTemplateMixin",
			"dojo/text!./templates/DgridWidget.html",
			"dojo/_base/lang",
            "dijit/form/Button",
            "dijit/form/ToggleButton",
			"dgrid/OnDemandList",
			"dgrid/OnDemandGrid",
			"dgrid/Keyboard",
			"dgrid/Selection",
			"dgrid/editor",
            "dgrid/extensions/ColumnHider",
            "dgrid/extensions/ColumnResizer",
            "dgrid/extensions/ColumnReorder",
            "dgrid/extensions/Pagination",
            "dijit/form/DateTextBox",
            "dijit/form/HorizontalSlider",
			"dijit/form/NumberSpinner",
            "dojo/store/Memory",
            "dojo/store/Observable"
],
		function (declare, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, template, lang,
            Button, ToggleButton,
            OnDemandList, OnDemandGrid, Keyboard, Selection, editor,
            ColumnHider, ColumnResizer, ColumnReorder, Pagination,
            DateTextBox, HorizontalSlider, NumberSpinner,
            Memory, Observable) {
		    var _this;

		    //anonymous function to load CSS files required for this module
		    (function () {
		        var css = [
                    require.toUrl("../css_outputs/flat/dgrid/css/dgrid_rtl.css"),
                    require.toUrl("../css_outputs/flat/dgrid/css/extensions/ColumnHider.css"),
		            require.toUrl("../css_outputs/flat/dgrid/css/extensions/ColumnReorder.css"),
                    require.toUrl("../css_outputs/flat/dgrid/css/extensions/ColumnResizer.css"),
                    require.toUrl("../css_outputs/flat/dgrid/css/extensions/Pagination.css")
		        ];
		        var head = document.getElementsByTagName("head").item(0),
                        link;
		        for (var i = 0, il = css.length; i < il; i++) {
		            link = document.createElement("link");
		            link.type = "text/css";
		            link.rel = "stylesheet";
		            link.href = css[i].toString();
		            head.appendChild(link);
		        }
		    }());

		    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
		        templateString: template,
		        widgetsInTemplate: true,

		        postCreate: function () {
		            this.inherited(arguments);

		            this.initDGrid();
		        },

		        startup: function () {
		        },

		        initDGrid: function () {
		            var CustomGrid = declare([OnDemandGrid, Selection, ColumnHider, ColumnResizer, ColumnReorder, Keyboard, Pagination]);
		            var columns = [
					editor({ label: 'Number', field: 'floatNum' }, HorizontalSlider),
					editor({ label: 'Integer', field: 'integer', editorArgs: { style: 'width: 5em;' } }, NumberSpinner),
					editor({ label: 'Date', field: 'date' }, DateTextBox, "focus"),
					editor({ label: 'Check', field: 'bool' }, "checkbox")
		            ];

		            var typesData = [];
		            for (var i = 0; i < 25; i++) {
		                typesData.push({
		                    id: i,
		                    integer: Math.floor(Math.random() * 100),
		                    floatNum: Math.random() * 100,
		                    date: new Date(new Date().getTime() * Math.random() * 2),
		                    bool: Math.random() > 0.5
		                });
		            }
		            var testTypesStore = this.testTypesStore = Observable(new Memory({ data: typesData })),
                        emptyStore = this.emptyStore = Observable(new Memory({ data: [] }));

		            var dgrid = this.dgrid = new CustomGrid({
		                sort: "id",
		                store: testTypesStore,
		                columns: columns,
		                selectionMode: "single",
		                rowsPerPage: 5,
		                noDataMessage: "No data.",
		                loadingMessage: "Loading..."
		            }, this.dgridNode);
		        },

		        _showRowsPerPageDropdown: function (checked) {
		            if (!this.dgrid) return;
		            if (checked) {
		                this.dgrid.set({
		                    pagingLinks: false,
		                    pagingTextBox: true,
		                    firstLastArrows: true,
		                    pageSizeOptions: [5, 10, 15, 20]
		                });
		            } else {
		                this.dgrid.set({
		                    pagingLinks: true,
		                    pagingTextBox: false,
		                    firstLastArrows: false,
		                    pageSizeOptions: null
		                });
		            }
		            this.dgrid.refresh();
		        },

		        _setStore: function () {
		            if (!this.dgrid) return;

		            this.dgrid.set("store", this.testTypesStore);
		        },

		        _setEmptyStore: function () {
		            if (!this.dgrid) return;

		            this.dgrid.set("store", this.emptyStore);
		        }
		    });
		});