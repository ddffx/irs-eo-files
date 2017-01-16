'use strict';
// import r from 'request';
// import states from 'datasets-us-states-abbr';
// import mapl from 'map-limit';
const r = require("request");
const states = require("datasets-us-states-abbr"); // abbrs
const others = [
	'PR', // Puerto Rico
	'XX', // International
	'1', '2', '3', '4' // Regions
]

const allFiles = states.concat(others);

const mapl = require("map-limit");

const irsEndpoint = 'https://www.irs.gov/pub/irs-soi/eo';
// https://www.irs.gov/pub/irs-soi/eo_fl.csv
const reqLimit = 5;

// console.log(us_states);

const getEOFilesMeta = (region, done) => {

	const files = region && typeof region !== 'function' ? [region] : allFiles;

	const cb = typeof region === 'function' ? region : done;
	
	mapl(files, reqLimit, (region, next) => {
		const stem = isNaN(region) ? '_' : '';
		
		const url = `${irsEndpoint}${stem}${region.toLowerCase()}.csv`;
		console
		r.head(url, (err, resp) => {
			if (err) {
				next(err, null);
			} else {
				// console.log(resp.headers);
				const output = {
					region,
					fileType: resp.headers['content-type'] || 'NA',
					fileSize: +resp.headers['content-length'] || -1,
					url,
					lastUpdated: resp.headers['last-modified'] || 'NA'
				};
				next(null, output);
			}
		});
	}, (err, results) => {
		if (err) {
			// console.log(err);
			if (cb) {
				cb(err, null);
			}
		} else {
			// console.log(results[0]);
			if (cb) {
				cb(null, results);
			}
		}
	});
};
module.exports = getEOFilesMeta;
