export const timeOptions = ["Seconds", "Minutes", "Hours", "Days"];
export const timeValues = {
	Seconds: [5, 10, 30],
	Minutes: [1, 5, 10, 30],
	Hours: [1, 2, 3],
	Days: [1, 2, 3],
};

export const timeConversion = {
	Seconds: Math.pow(60, 0) * 1000,
	Minutes: Math.pow(60, 1) * 1000,
	Hours: Math.pow(60, 2) * 1000,
	Days: Math.pow(60, 3) * 1000,
};
