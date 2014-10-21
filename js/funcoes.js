google.setOnLoadCallback(drawVisualization);
google.load('visualization', '1', {
	packages : [ 'corechart' ]
});

function drawVisualization() {
	// Create and populate the data table.
	var data = google.visualization.arrayToDataTable([
			[ 'Segmento', 'Quantidade de homens/mês' ],
			[ 'Automação Industrial', 163 ], [ 'Indústria Financeira', 150 ] , [ 'Serviços', 65 ] ]);

	var options = {
		titlePosition : 'none',
		chartArea:{top:0, height: '85%'},
		is3D : 'true',
		colors : [ '#e14c41', '#00aced', '#fed14e' ],
		backgroundColor : 'transparent',
		legend : {
			position : 'bottom',
			textStyle : {
				fontSize : 10
			}
		},
		hAxis : {
			title : 'Year',
			titleTextStyle : {
				color : 'red'
			}
		}
	};

	// Create and draw the visualization.
	new google.visualization.PieChart(document
			.getElementById('grafico-esforco')).draw(data, options);
}

function drawVisualizationAnual() {
	// Some raw data (not necessarily accurate)
	var data = google.visualization.arrayToDataTable([
			[ 'Ano', 'Automação Industrial', 'Indústria Financeira',  'Serviços' ],
			[ '2004', 9, 0, 0 ], [ '2006', 15, 12, 0 ], [ '2011', 12, 45, 15 ],
			[ '2013', 27, 93, 50 ] ]);

	// Create and draw the visualization.
	var ac = new google.visualization.AreaChart(document
			.getElementById('grafico-anual'));
	ac.draw(data, {
		chartArea:{top:5},
		titlePosition : 'none',
		is3D : 'true',
		backgroundColor : 'transparent',
		focusTarget: 'category',
		colors : [ '#e14c41', '#00aced', '#fed14e' ],
		legend : {
			position : 'bottom',
			textStyle : {
				fontSize : 10
			}
		},
		vAxis : {
			title : "homens/mês"
		},
		hAxis : {
			title : "Ano"
		}
	});
}

google.setOnLoadCallback(drawVisualizationAnual);

function initialize() {
	geocoder = new google.maps.Geocoder();

	var mapOptions = {
		zoom : 16,
		disableDefaultUI : true,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

	geocoder
			.geocode(
					{
						'address' : 'Rua Marechal Floriano Peixoto, 7401, Sala 12, Curitiba, Pr'
					}, function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							map.setCenter(results[0].geometry.location);
							var marker = new google.maps.Marker({
								position : results[0].geometry.location,
								map : map,
								title : 'Autoprocess'
							});
						}
					});

}

google.maps.event.addDomListener(window, 'load', initialize);
$(function() {
	$().timelinr({
		arrowKeys : 'true'
	});
});