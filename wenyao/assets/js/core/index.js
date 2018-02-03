jQuery(document).ready(function($) {
	var basic_line_rheight = $("#basic_line_r").height();
	var basic_line_height = (basic_line_rheight - 20) + 'px';
	$("#basic_line").css('height', basic_line_height);
	var scrrenwidth = window.screen.width;
	if (scrrenwidth <= 400) {
		$("#basic_line").css('width', (scrrenwidth - 40) + 'px');
		$("#running_time").css('width', (scrrenwidth - 40) + 'px');
		$("#running_distance").css('width', (scrrenwidth - 40) + 'px');
		$("#running_location").css('width', (scrrenwidth - 40) + 'px');
		$("#importmore").css('width', (scrrenwidth - 40) + 'px');
	}
	overview();
	running_time();
	running_distance();
	var map = new BMap.Map("allmap");
	map.centerAndZoom(new BMap.Point(-77.468433, 37.704155), 14);
	map.addControl(new BMap.MapTypeControl({
		mapTypes: [
			BMAP_NORMAL_MAP,
			BMAP_HYBRID_MAP
		]
	}));
	map.setCurrentCity("汉诺威");
	map.enableScrollWheelZoom(true);

});

function overview() {
	var myChart = echarts.init(document.getElementById('basic_line'));
	var option = {
		title: {
			text: 'Overview *Avg'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['Day', 'Month', 'Year']
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ["01.01", "02.01", "03.01", "04.01", "05.01", "06.01", "07.01", "08.01", "09.01", "10.01", "11.01", "12.01"]
		},
		yAxis: {
			type: 'value',
			data: ['1', '2', '3', '4', '5', '>=6']
		},
		series: [{
			name: 'Day',
			type: 'line',
			data: [2.0, 1.8, 0.8, 1.1, 1.3, 2.3, 3.3, 3.6, 3.5, 3.0, 4.1, 2.2]
		}, {
			name: 'Month',
			type: 'line',
			data: [2.1, 1.7, 0.2, 1.2, 1.4, 2.1, 3.5, 3.3, 3.8, 3.3, 4.5, 2.1]
		}, {
			name: 'Year',
			type: 'line',
			data: [2.4, 1.1, 0.5, 1.6, 1.8, 2.8, 3.1, 3.4, 3.8, 3.9, 4.6, 2.0]
		}]
	};
	myChart.setOption(option);
}

function running_time() {
	var myChart = echarts.init(document.getElementById('running_time'));
	var date = [];
	var data;
	for (var i = 1; i < 10000; i++) {
		data = [Math.random() * 50000];
		data = parseInt(data)
		date.push(data)
	}
	var option = {
		tooltip: {
			trigger: 'axis',
			position: function(pt) {
				return [pt[0], '10%'];
			}
		},
		title: {
			text: 'Running Time *Avg',
		},
		toolbox: {
			feature: {
				dataZoom: {
					yAxisIndex: 'none'
				},
				restore: {},
				saveAsImage: {}
			}
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
		},
		yAxis: {
			type: 'value',
			boundaryGap: false
		},
		series: [{
			name: 'User',
			type: 'line',
			smooth: true,
			symbol: 'none',
			sampling: 'average',
			itemStyle: {
				normal: {
					color: 'rgb(255, 70, 131)'
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgb(255, 158, 68)'
					}, {
						offset: 1,
						color: 'rgb(255, 70, 131)'
					}])
				}
			},
			data: date
		}]
	};
	myChart.setOption(option);
}

function running_distance() {
	var myChart = echarts.init(document.getElementById('running_distance'));
	var option = {
		title: {
			text: 'Running Distance *Avg'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['Age', 'Gender', 'Country']
		},
		xAxis: {
			type: 'category',
			data: ["13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"]
		},
		yAxis: {
			type: 'value',
			data: ['2', '4', '6', '8', '9', '>=10']
		},
		series: [{
			name: 'Age',
			type: 'bar',
			data: [3.8, 5.9, 7.9, 5.0, 4.2, 1.7, 0.8]
		}, {
			name: 'Gender',
			type: 'bar',
			data: [2.5, 3.6, 6.2, 4.3, 5.0, 2.7, 0.5]
		}, {
			name: 'Country',
			type: 'bar',
			data: [1.6, 4.3, 5.8, 5.5, 6.2, 3.7, 0.7]
		}]
	};
	myChart.setOption(option);
}