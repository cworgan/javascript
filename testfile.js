//test
// this is a test file
const jsDateAnnouncement = new Date(818031600000);
const currentDate = new Date();
const diff = jsDateAnnouncement - currentDate;
const formatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto'
});
const diffInDays = Math.round(diff / 86400000);
const diffInYears = Math.round(diffInDays / 365);
const diffInText = formatter.format(diffInDays, 'day');
console.log(`JavaScript was presented to the world ${formatter.format(diffInDays, 'day')}`);
// JavaScript was presented to the world 10,094 days ago
console.log(`JavaScript was presented to the world ${formatter.format(diffInYears, 'year')}`);
// JavaScript was presented to the world 28 years ago.
