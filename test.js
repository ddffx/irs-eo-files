import test from 'ava';
import getEOFilesMeta from './';

test.cb('Get IRS File Meta Info', t => {
	getEOFilesMeta((err, res) => {
		if (err) {
			t.fail();
		} else {
			console.log(`${res.length} file info received`);
			console.log(res[0]);
			t.pass();
		}
		t.end();
	});
});

test.cb('Get IRS File Meta Info for one region', t => {
	getEOFilesMeta('1',(err, res) => {
		if (err) {
			t.fail();
		} else {
			console.log(`${res.length} file info received`);
			console.log(res[0]);
			t.pass();
			
		}
		t.end();
	});
});

test.cb('Get IRS File Meta Info for one state', t => {
	getEOFilesMeta('CA',(err, res) => {
		if (err) {
			t.fail();
		} else {
			console.log(`${res.length} file info received`);
			console.log(res[0]);
			t.pass();
		}
		t.end();
	});
});


