import useTheme from '@/hooks/useTheme';
import Echart from 'echarts-for-react';

const ChardOrders = () => {
	const theme = useTheme((state) => state.theme);

	const option = {
		xAxis: {
			type: 'category',
			data: ['01 May', '02 May', '03 May', '04 May', '05 May', '06 May', '07 May'],
			axisLine: {
				show: false,
			},
			axisLabel: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			axisPointer: {
				type: 'none',
			},
		},
		yAxis: {
			type: 'value',
			max: 200,
			axisLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				show: false,
			},
			splitLine: {
				show: false,
			},
		},
		series: [
			{
				data: [120, 200, 150, 80, 70, 110, 120],
				type: 'bar',
				barWidth: '30%',
				showBackground: true,
				itemStyle: {
					color: theme === 'dark' ? '#85A9FF' : '#3C7EFF',
					barBorderRadius: [5, 5, 5, 5],
				},
				backgroundStyle: {
					borderRadius: 10,
					color: theme === 'dark' ? '#1d2332' : '#e5edff',
				},
			},
		],
		tooltip: {
			show: true,
			trigger: 'axis',
			formatter: '{b}: {c}',
			backgroundColor: theme === 'dark' ? '#222834' : '#eff2f6',
			borderColor: theme === 'dark' ? '#525b75' : '#e3e6ed',
			borderWidth: 1,
			textStyle: {
				color: theme === 'dark' ? '#ffffff' : '#000000',
				fontSize: 14,
				fontWeight: 'bold',
			},
		},
		grid: {
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			height: 85,
		},
	};

	return <Echart style={{ height: '85px' }} option={option} />;
};

export default ChardOrders;
