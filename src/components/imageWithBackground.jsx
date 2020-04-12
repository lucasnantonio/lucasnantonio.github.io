/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import { backgroundGray } from './utils';

function ImageWithBackground({ image, color }) {
	return (
		<div
			style={{
				backgroundColor: color
				// backgroundColor: "skyblue",
				// padding: "2rem",
			}}
		>
			{image.childImageSharp != undefined ? (
				<Img
					className="h-auto-l ph5-l"
					style={{ maxHeight: '32rem' }}
					backgroundColor="#f0f0f0"
					fluid={image.childImageSharp != undefined ? image.childImageSharp.fluid : image}
					objectFit="contain"
				/>
			) : (
				<img className="h-auto-l ph5-l" style={{ maxHeight: '32rem' }} src={image.publicURL} />
			)}
		</div>
	);
}

export default ImageWithBackground;
