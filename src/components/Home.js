import React from "react";

import Calendar from 'react-calendar';
import Popup from './Popup';
import addChoosedDate from '../actions/addChoosedDate';
import changePopupShow from '../actions/changePopupShow';
import { useDispatch } from 'react-redux';

const Home = ({ monthNames, dayNames }) => {
	const dispatch = useDispatch();

	const handleDayClick = value => {
		dispatch(changePopupShow(true));

		dispatch(addChoosedDate({
			day: `${value.getDate()} ${dayNames[value.getDay()]}`,
			month: monthNames[value.getMonth()]
		}));
	}

	const formatDate = date => {
		return new Intl.DateTimeFormat('en-US', {weekday: 'narrow'}).format(date);
	}

	return (
		<section className="home">
			<div className="home__info">
				<h2 className="home__info-title">Choose the day for the meeting</h2>

				<p className="home__info-descr">
					We encourage you to book your appointment online. This will save you
					time.
				</p>
			</div>

			<div className="home__calendar">
				<Calendar
					formatShortWeekday={(locale, date) => formatDate(date)} 
					onClickDay={value => handleDayClick(value)}
					locale={'en-US'}
				/>
			</div>

			<Popup />
		</section>
	);
}

export default Home;
