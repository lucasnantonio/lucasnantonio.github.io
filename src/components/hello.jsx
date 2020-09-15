import React, { useState } from 'react';
import PhraseWithFootnote from '../components/phraseWithFootnote';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { initialFadeAnimation, fadeInAnimation } from '../components/utils';
import { minWidth } from './utils';
import { Link } from 'gatsby';
import { ic_twitter_logo } from "../components/icons.js"

function capitalizeFirstLetter (string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const Hello = ({ setSelectedTopics, setAll }) => {
	const [visitor, setVisitor] = useState(null);
	function getVisitor () {
		setVisitor(window.location.search.split('?')[1]);
	}
	useEffect(() => getVisitor());

	function setTopic (item) {
		setAll(false);
		setSelectedTopics([item]);
	}

	return (
		<div className="w-100 mv6 flex justify-between">
			<div style={{ maxWidth: minWidth }} className="flex flex-column tracked-tight">
				<motion.div initial={initialFadeAnimation} animate={fadeInAnimation} transition={{ duration: 0.5 }}>
					{visitor ? (
						<h1 className="f3 neue-regular black lh-title mb0 fw5">
							{visitor && `Hi there, ${capitalizeFirstLetter(atob(visitor))}!`}
						</h1>
					) : (
							<h1 className="f3 neue-regular black lh-title mb0 fw5">Lucas Neumann</h1>
						)}
					<p className="f3 black-40 lh-copy mt0 fw5 measure">
						{/* <br /> */}
						{/* {`Staff product designer at Twitter`} */}
					</p>
					{/* <p className="f3 black-40 lh-copy mt5 fw5 measure">I've spent my last decade learning about how people think and making products that work better for them: I've helped design a make-your-own computer for all ages at Kano; democracy tools at Nossas; the world’s fastest growing neobank at Nubank, and a better credit card at Petal.</p> */}

				</motion.div>
			</div>
			<div className="br-pill b--near-white ba pa3 flex bw1 br-pill h3 w3 mb0-l mb4">{ic_twitter_logo}</div>
		</div>
	);
};

export default Hello;
