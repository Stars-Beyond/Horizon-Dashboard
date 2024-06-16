/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let mainChartColors = {
		borderColor: '#374151',
		labelColor: '#9CA3AF',
		opacityFrom: 0,
		opacityTo: 0.15
	};

	// if (document.documentElement.classList.contains('dark')) {
	// 	mainChartColors = {
	// 		borderColor: '#374151',
	// 		labelColor: '#9CA3AF',
	// 		opacityFrom: 0,
	// 		opacityTo: 0.15,
	// 	};
	// } else {
	// 	mainChartColors = {
	// 		borderColor: '#F3F4F6',
	// 		labelColor: '#6B7280',
	// 		opacityFrom: 0.45,
	// 		opacityTo: 0,
	// 	}
	// }

	return {
		chart: {
			height: 420,
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			foreColor: mainChartColors.labelColor,
			toolbar: {
				show: false
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				enabled: true,
				opacityFrom: mainChartColors.opacityFrom,
				opacityTo: mainChartColors.opacityTo
			}
		},
		dataLabels: {
			enabled: false
		},
		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			}
		},
		grid: {
			show: true,
			borderColor: mainChartColors.borderColor,
			strokeDashArray: 1,
			padding: {
				left: 35,
				bottom: 15
			}
		},
		series: [
			{
				name: 'Revenue',
				data: [34545, 324523, 324435, 2346234, 2346254, 3245243, 3456435],
				color: '#1A56DB'
			},
			{
				name: 'Revenue (previous period)',
				data: [487558, 3455, 345135, 334534, 345345, 345358, 2467455],
				color: '#FDBA8C'
			}
		],
		markers: {
			size: 5,
			strokeColors: '#ffffff',
			hover: {
				size: undefined,
				sizeOffset: 3
			}
		},
		xaxis: {
			categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
			labels: {
				style: {
					colors: [mainChartColors.labelColor],
					fontSize: '14px',
					fontWeight: 500
				}
			},
			axisBorder: {
				color: mainChartColors.borderColor
			},
			axisTicks: {
				color: mainChartColors.borderColor
			},
			crosshairs: {
				show: true,
				position: 'back',
				stroke: {
					color: mainChartColors.borderColor,
					width: 1,
					dashArray: 10
				}
			}
		},
		yaxis: {
			labels: {
				style: {
					colors: [mainChartColors.labelColor],
					fontSize: '14px',
					fontWeight: 500
				},
				formatter: function (value) {
					return '$' + value;
				}
			}
		},
		legend: {
			fontSize: '14px',
			fontWeight: 500,
			fontFamily: 'Inter, sans-serif',
			labels: {
				colors: [mainChartColors.labelColor]
			},
			itemMargin: {
				horizontal: 10
			}
		},
		responsive: [
			{
				breakpoint: 1024,
				options: {
					xaxis: {
						labels: {
							show: false
						}
					}
				}
			}
		]
	};
}
