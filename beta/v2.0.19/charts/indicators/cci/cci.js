define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close")}function c(c,d){require(["css!charts/indicators/cci/cci.css"]),require(["text!charts/indicators/cci/cci.html"],function(e){e=a(e),e.appendTo("body"),e.find("#cci_stroke_color").each(function(){a(this).colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})});var f="Solid";a("#cci_dash_style").ddslick({imagePosition:"left",width:148,background:"white",onSelected:function(b){a("#cci_dash_style .dd-selected-image").css("max-width","115px"),f=b.selectedData.value}}),a("#cci_dash_style .dd-option-image").css("max-width","115px"),e.dialog({autoOpen:!1,resizable:!1,width:350,modal:!0,my:"center",at:"center",of:window,dialogClass:"cci-ui-dialog",buttons:[{text:"OK",click:function(){var c={period:parseInt(a("#cci_period").val()),maType:a("#cci_ma_type").val(),stroke:a("#cci_stroke_color").css("background-color"),strokeWidth:parseInt(a("#cci_stroke_width").val()),dashStyle:f};a(a(".cci").data("refererChartID")).highcharts().series[0].addIndicator("cci",c),b.call(e)}},{text:"Cancel",click:function(){b.call(this)}}]}),e.find("select").selectmenu({width:150}),a.isFunction(d)&&d(c)})}return{open:function(b){return 0===a(".cci").length?void c(b,this.open):void a(".cci").data("refererChartID",b).dialog("open")}}});