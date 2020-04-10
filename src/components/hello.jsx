import React, { useState } from 'react';
import PhraseWithFootnote from '../components/phraseWithFootnote';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { initialFadeAnimation, fadeInAnimation } from '../components/utils';
import { minWidth } from './utils';
import { Link } from 'gatsby';

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const Hello = ({ setSelectedTopics, setAll }) => {
	const [ visitor, setVisitor ] = useState(null);
	function getVisitor() {
		setVisitor(window.location.search.split('?')[1]);
	}
	useEffect(() => getVisitor());

	function setTopic(item) {
		setAll(false);
		setSelectedTopics([ item ]);
	}

	return (
		<div className="w-100 mv6">
			<div style={{ maxWidth: minWidth }} className="flex flex-column tracked-tight center">
				<motion.div initial={initialFadeAnimation} animate={fadeInAnimation} transition={{ duration: 0.5 }}>
					{visitor ? (
						<h1 className="f3 neue-regular black lh-title mb0 fw5">
							{visitor && `Hi there, ${capitalizeFirstLetter(atob(visitor))}!`}
						</h1>
					) : (
						<h1 className="f3 neue-regular black lh-title mb0 fw5">Lucas Neumann</h1>
					)}
					<p className="f3 black-40 lh-copy mt0 fw5 measure-narrow">
						<br />
						{`I help companies research, design, deliver and scale empowering experiences. `}
						<a
							className="link black-40 underline-hover hover-black"
							href="http://www.nubank.com.br/en"
							target="blank"
							style={{ cursor: 'ne-resize' }}
						>
							{`Nubank`}
						</a>{' '}
						alumnus, now design lead at{' '}
						<a
							className="link black-40 underline-hover hover-black"
							href="http://www.petalcard.com"
							target="blank"
							style={{ cursor: 'ne-resize' }}
						>
							Petal
						</a>
						{`. `}
						<Link to="/about" className="nowrap black-40 link black-40 underline-hover hover-black">
							More about me +
						</Link>
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Hello;
