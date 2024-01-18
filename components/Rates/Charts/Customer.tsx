import useTheme from '@/hooks/useTheme';
import Echart from 'echarts-for-react';

const Customer = () => {
	const theme = useTheme((state) => state.theme);

	const option = {
		color: theme === 'dark' ? '#222834' : '#eff2f6',
		legend: {
			data: [
				{
					name: 'Fourth time',
					icon: 'roundRect',
					itemStyle: {
						color: theme === 'dark' ? '#373e53' : '#cbd0dd',
						borderWidth: 0,
					},
				},
				{
					name: 'Third time',
					icon: 'roundRect',
					itemStyle: {
						color: theme === 'dark' ? '#9fa6bc' : '#31374a',
						borderWidth: 0,
					},
				},
				{
					name: 'Second time',
					icon: 'roundRect',
					itemStyle: {
						color: theme === 'dark' ? '#3874ff' : '#85a9ff',
						borderWidth: 0,
					},
				},
			],

			right: 'right',
			width: '100%',
			itemWidth: 16,
			itemHeight: 8,
			itemGap: 20,
			top: 3,
			inactiveColor: theme === 'dark' ? '#525b75' : '#8a94ad',
			inactiveBorderWidth: 0,
			textStyle: {
				color: theme === 'dark' ? '#9fa6bc' : '#31374a',
				fontWeight: 600,
				fontFamily: 'Nunito Sans',
			},
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none',
			},
			padding: [7, 10],
			backgroundColor: theme === 'dark' ? '#222834' : '#eff2f6',
			borderColor: theme === 'dark' ? '#373e53' : '#cbd0dd',
			textStyle: { color: theme === 'dark' ? '#eff2f6' : '#141824' },
			borderWidth: 1,
			transitionDuration: 0,
			// formatter: tooltipFormatter,
		},
		xAxis: {
			type: 'category',
			// data: months,
			show: true,
			boundaryGap: false,
			axisLine: {
				show: true,
				lineStyle: { color: theme === 'dark' ? '#373e53' : '#cbd0dd' },
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				// interval: 1,
				showMinLabel: false,
				showMaxLabel: false,
				color: theme === 'dark' ? '#949db5' : '#3e465b',
				// formatter: (value) => value.slice(0, 3),
				fontFamily: 'Nunito Sans',
				fontWeight: 600,
				fontSize: 12.8,
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: theme === 'dark' ? '#9fa6bc' : '#31374a',
					type: 'dashed',
					width: 0.5,
				},
			},
		},
		yAxis: {
			type: 'value',
			boundaryGap: false,
			axisLabel: {
				showMinLabel: true,
				showMaxLabel: true,
				color: theme === 'dark' ? '#949db5' : '#3e465b',
				// formatter: (value) => `${value}%`,
				fontFamily: 'Nunito Sans',
				fontWeight: 600,
				fontSize: 12.8,
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: theme === 'dark' ? '#9fa6bc' : '#31374a',
					width: 0.3,
				},
			},
		},
		series: [
			{
				name: 'Fourth time',
				type: 'line',
				data: [62, 90, 90, 90, 78, 84, 17, 17, 17, 17, 82, 95],
				showSymbol: false,
				symbol: 'circle',
				symbolSize: 10,
				emphasis: {
					lineStyle: {
						width: 1,
					},
				},
				lineStyle: {
					type: 'dashed',
					width: 1,
					color: theme === 'dark' ? '#92B9FF' : '#cbd0dd',
				},
				itemStyle: {
					borderColor: theme === 'dark' ? '#373e53' : '#cbd0dd',
					borderWidth: 3,
				},
			},
			{
				name: 'Third time',
				type: 'line',
				data: [50, 50, 30, 62, 18, 70, 70, 22, 70, 70, 70, 70],
				showSymbol: false,
				symbol: 'circle',
				symbolSize: 10,
				emphasis: {
					lineStyle: {
						width: 1,
					},
				},
				lineStyle: {
					width: 1,
					color: theme === 'dark' ? '#96D9FF' : '#96D9FF',
				},
				itemStyle: {
					borderColor: theme === 'dark' ? '#9fa6bc' : '#31374a',
					borderWidth: 3,
				},
			},
			{
				name: 'Second time',
				type: 'line',
				data: [40, 78, 60, 78, 60, 20, 60, 40, 60, 40, 20, 78],
				showSymbol: false,
				symbol: 'circle',
				symbolSize: 10,
				emphasis: {
					lineStyle: {
						width: 3,
					},
				},
				lineStyle: {
					width: 3,
					color: theme === 'dark' ? '#85A9FF' : '#3874FF',
				},
				itemStyle: {
					borderColor: theme === 'dark' ? '#3874ff' : '#85a9ff',
					borderWidth: 3,
				},
			},
		],
		grid: { left: 0, right: 8, bottom: 0, containLabel: true },
	};

	return <Echart style={{ height: '300px' }} option={option} />;
};

export default Customer;
