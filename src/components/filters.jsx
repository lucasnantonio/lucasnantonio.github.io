import React from 'react'
import Filter from './filter'
import AllFilter from './allFilter'
import SurpriseButton from './SurpriseButton'
import { topics } from './utils'
import { motion } from 'framer-motion'
import { Link } from 'gatsby';

// const { minWidth, topics, sizes } = Utils

function Filters ({ selectedTopics, setSelectedTopics, isAll, setAll, publishedPosts }) {
	return (
		<motion.div initial={{ opacity: 0, marginLeft: -20 }} animate={{ opacity: 1, marginLeft: 0 }} className="w-100-l w-50 flex flex-row-l flex-column items-start mb6 lh-copy f3">
			<div className="mr3">
				<AllFilter
					selectedTopics={selectedTopics}
					setSelectedTopics={setSelectedTopics}
					isAll={isAll}
					setAll={setAll}
				/>
			</div>
			{topics.map((item) => (
				<Filter
					selectedTopics={selectedTopics}
					setSelectedTopics={setSelectedTopics}
					key={item}
					isAll={isAll}
					setAll={setAll}
					title={item}
				/>
			))}
			{/* <div className="flex items-end"> */}
			{/* | <SurpriseButton posts={publishedPosts} /> */}
			{/* </div> */}
			{/* <div>Bio</div> */}
			<Link className="link black-40 hover-black" to="/about">
				<div className="bl-l bw1 pl4-l b--black-10">
					<div className="f3 fw5">About</div>
				</div>
			</Link>
		</motion.div>
	)
}

export default Filters
