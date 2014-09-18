define(["dojo/_base/declare",
			"dijit/_WidgetBase",
			"dijit/_TemplatedMixin",
			"dijit/_WidgetsInTemplateMixin",
			"dojo/text!./templates/FormWidgets.html",
			"dojo/_base/lang",
			"dijit/form/TextBox",
			"dijit/form/ValidationTextBox",
			"dijit/form/NumberTextBox",
			"dijit/form/CurrencyTextBox",
			"dijit/form/TimeTextBox",
			"dijit/form/Textarea",
			"dijit/form/Button",
			"dijit/form/ToggleButton",
			"dijit/form/DropDownButton",
			"dijit/TooltipDialog",
			"dijit/layout/BorderContainer",
			"dijit/layout/ContentPane",
			"dijit/form/CheckBox",
			"dijit/form/RadioButton",
			"dijit/form/Select",
			"dijit/form/ComboBox",
			"dijit/form/MultiSelect",
			"dijit/form/ComboButton",
			"dijit/DropDownMenu",
			"dijit/MenuItem",
			"dijit/form/DateTextBox",
			"dijit/form/HorizontalSlider",
			"dijit/form/VerticalSlider",
			"dijit/form/HorizontalRule",
			"dijit/form/VerticalRule",
			"dijit/form/HorizontalRuleLabels",
			"dijit/form/VerticalRuleLabels", 
			"dijit/form/NumberSpinner"
],
		function (declare, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, template, lang) {
			return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
				templateString: template,
				widgetsInTemplate: true,

				constructor: function () {
				},

				postCreate: function () {
					this.inherited(arguments);
					//programmatically create horizontal sliders
					new dijit.form.HorizontalSlider({
						name: "default horizontal slider",
						value: 5,
						minimum: -10,
						maximum: 10,
						intermediateChanges: true,
						style: "margin:10px 10px 30px",
						showButtons:false
					}, this.horizontalSliderNormal);

					new dijit.form.HorizontalSlider({
						name: "disabled default horizontal slider",
						value: 5,
						minimum: -10,
						maximum: 10,
						intermediateChanges: true,
						style: "margin:10px 10px 30px",
						disabled: true,
						showButtons: false
					}, this.horizontalSliderDisabled);

					var sliderRulesH = new dijit.form.HorizontalRule({
						count: 11,
						style: { height: "5px" }
					});
					
					var sliderRuleLabelsH = new dijit.form.HorizontalRuleLabels({
						labels: ["low", "mid", "high"]
					});
					
					var horizontalSliderAdvanced = new dijit.form.HorizontalSlider({
						name: "default horizontal slider",
						value: 5,
						minimum: -10,
						maximum: 10,
						intermediateChanges: true,
						discreteValues: 11,
						style: "margin:10px 10px 30px"
					}, this.horizontalSliderAdvancedNormal);

					sliderRulesH.placeAt(horizontalSliderAdvanced.containerNode);
					sliderRuleLabelsH.placeAt(horizontalSliderAdvanced.containerNode); 

					var sliderRulesDisabledH = new dijit.form.HorizontalRule({
						count: 11,
						style: { height: "5px" }
					});

					var sliderRuleLabelsDisabledH = new dijit.form.HorizontalRuleLabels({
						labels: ["low", "mid", "high"]
					});

					var horizontalSliderAdvancedDisabled = new dijit.form.HorizontalSlider({
						name: "disabled default horizontal slider",
						value: 5,
						minimum: -10,
						maximum: 10,
						intermediateChanges: true,
						discreteValues: 11,
						style: "margin:10px 10px 30px",
						disabled: true
					}, this.horizontalSliderAdvancedDisabled);

					sliderRulesDisabledH.placeAt(horizontalSliderAdvancedDisabled.containerNode);
					sliderRuleLabelsDisabledH.placeAt(horizontalSliderAdvancedDisabled.containerNode);

					//programmatically create vertical sliders
					new dijit.form.VerticalSlider({
						name: "default vertical slider",
						value: 5,
						minimum: -10,
						maximum: 10,
						intermediateChanges: true,
						style: "margin:10px 30px 10px 10px;height:240px;float:left",
						showButtons: false
					}, this.verticalSliderNormal);

					new dijit.form.VerticalSlider({
						name: "disabled default vertical slider",
						value: 5,
						minimum: -10,
						maximum: 10,
						intermediateChanges: true,
						style: "margin:10px 30px 10px 10px;height:240px;float:left",
						disabled: true,
						showButtons: false
					}, this.verticalSliderDisabled);

					var sliderRulesV = new dijit.form.VerticalRule({
						count: 11,
						style: { width: "5px" }
					});

					var sliderRuleLabelsV = new dijit.form.VerticalRuleLabels({
						labels: ["low", "mid", "high"]
					});

					var verticalSliderAdvanced = new dijit.form.VerticalSlider({
						name: "default vertical slider",
						value: 5,
						minimum: -10,
						maximum: 10,
						intermediateChanges: true,
						discreteValues: 11,
						style: "margin:10px 30px 10px 10px;height:240px;float:left"
					}, this.verticalSliderAdvancedNormal);

					sliderRulesV.placeAt(verticalSliderAdvanced.containerNode);
					sliderRuleLabelsV.placeAt(verticalSliderAdvanced.containerNode);

					var sliderRulesDisabledV = new dijit.form.VerticalRule({
						count: 11,
						style: { width: "5px" }
					});

					var sliderRuleLabelsDisabledV = new dijit.form.VerticalRuleLabels({
						labels: ["low", "mid", "high"]
					});

					var verticalSliderAdvancedDisabled = new dijit.form.VerticalSlider({
						name: "disabled default vertical slider",
						value: 5,
						minimum: -10,
						maximum: 10,
						intermediateChanges: true,
						style: "margin:10px 30px 10px 10px;height:240px;float:left",
						disabled: true
					}, this.verticalSliderAdvancedDisabled);

					sliderRulesDisabledV.placeAt(verticalSliderAdvancedDisabled.containerNode);
					sliderRuleLabelsDisabledV.placeAt(verticalSliderAdvancedDisabled.containerNode);

					//programmatically create number spinners
					new dijit.form.NumberSpinner({
						value: 1000,
						smallDelta: 10,
						constraints: { min: 9, max: 1550, places: 0 }
					}, this.numberSpinnerNormal);

					new dijit.form.NumberSpinner({
						value: 1000,
						smallDelta: 10,
						constraints: { min: 9, max: 1550, places: 0 },
						disabled: true
					}, this.numberSpinnerDisabled);

					this.dropdownbutton1.startup();
					this.combobutton1.startup();
				},

				startup: function () {
				}

			});
		});