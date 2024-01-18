import React from 'react';
import './RegionsMap.scss';
import 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import useTheme from '@/hooks/useTheme';
import { leaftletPoints } from './MapPoints.data';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const RegionsMap = () => {
	const theme = useTheme((state) => state.theme);

	const markers = leaftletPoints.map((point, index) => (
		<Marker key={index} position={[point.lat, point.long]}>
			<Popup>
				<div>
					<h6 className='mb-1'>{point.name}</h6>
					<p className='m-0 text-500'>
						{point.street}, {point.location}
					</p>
				</div>
			</Popup>
		</Marker>
	));

	const lightThemeUrl =
		'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
	const darkThemeUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';

	const tileLayerUrl = theme === 'dark' ? darkThemeUrl : lightThemeUrl;

	return (
		<MapContainer center={[50.4501, 30.5234]} zoom={3} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url={tileLayerUrl}
			/>
			<MarkerClusterGroup>{markers}</MarkerClusterGroup>
		</MapContainer>
	);
};

export default RegionsMap;
