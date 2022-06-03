const data = [
	{
		id: 991,
		question: 'JavaScript is the same as Java.',
		description: null,
		answers: {
			answer_a: 'False',
			answer_b: 'True',
			answer_c: null,
			answer_d: null,
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'true',
			answer_b_correct: 'false',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 995,
		question: 'Which operator is used to assign a value to a variable?',
		description: null,
		answers: {
			answer_a: 'x',
			answer_b: '-',
			answer_c: '=',
			answer_d: '*',
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'false',
			answer_c_correct: 'true',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 990,
		question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
		description: null,
		answers: {
			answer_a: 'w2 = window.new("http://www.w3schools.com");',
			answer_b: 'w2 = window.open("http://www.w3schools.com");',
			answer_c: null,
			answer_d: null,
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'true',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 985,
		question: 'How can you add a comment in a JavaScript?',
		description: null,
		answers: {
			answer_a: '//This is a comment',
			answer_b: "'This is a comment",
			answer_c: '<!--This is a comment-->',
			answer_d: null,
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'true',
			answer_b_correct: 'false',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 983,
		question: 'How does a WHILE loop start?',
		description: null,
		answers: {
			answer_a: 'while (i <= 10)',
			answer_b: 'while i = 1 to 10',
			answer_c: 'while (i <= 10; i++)',
			answer_d: null,
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'true',
			answer_b_correct: 'false',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 973,
		question: 'Inside which HTML element do we put the JavaScript?',
		description: null,
		answers: {
			answer_a: '<javascript>',
			answer_b: '<script>',
			answer_c: '<js>',
			answer_d: '<scripting>',
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'true',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 981,
		question: 'How to write an IF statement in JavaScript?',
		description: null,
		answers: {
			answer_a: 'if i = 5 then',
			answer_b: 'if i = 5',
			answer_c: 'if i == 5 then',
			answer_d: 'if (i == 5)',
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'false',
			answer_c_correct: 'false',
			answer_d_correct: 'true',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 974,
		question: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
		description: null,
		answers: {
			answer_a: '#demo.innerHTML = "Hello World!";',
			answer_b: 'document.getElementById("demo").innerHTML = "Hello World!";',
			answer_c: 'document.getElement("p").innerHTML = "Hello World!";',
			answer_d: 'document.getElementByName("p").innerHTML = "Hello World!";',
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'true',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 994,
		question: 'How do you declare a JavaScript variable?',
		description: null,
		answers: {
			answer_a: 'v carName;',
			answer_b: 'variable carName;',
			answer_c: 'var carName;',
			answer_d: null,
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'false',
			answer_c_correct: 'true',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 987,
		question: 'What is the correct way to write a JavaScript array?',
		description: null,
		answers: {
			answer_a: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
			answer_b: 'var colors = "red", "green", "blue"',
			answer_c: 'var colors = ["red", "green", "blue"]',
			answer_d: 'var colors = (1:"red", 2:"green", 3:"blue")',
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'false',
			answer_c_correct: 'true',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 993,
		question: 'Which event occurs when the user clicks on an HTML element?',
		description: null,
		answers: {
			answer_a: 'onchange',
			answer_b: 'onmouseclick',
			answer_c: 'onmouseover',
			answer_d: 'onclick',
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'false',
			answer_c_correct: 'false',
			answer_d_correct: 'true',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 977,
		question: 'The external JavaScript file must contain the <script> tag.',
		description: null,
		answers: {
			answer_a: 'True',
			answer_b: 'False',
			answer_c: null,
			answer_d: null,
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'true',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 979,
		question: 'How do you create a function in JavaScript?',
		description: null,
		answers: {
			answer_a: 'function myFunction()',
			answer_b: 'function:myFunction()',
			answer_c: 'function = myFunction()',
			answer_d: null,
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'true',
			answer_b_correct: 'false',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 992,
		question: "How can you detect the client's browser name?",
		description: null,
		answers: {
			answer_a: 'browser.name',
			answer_b: 'navigator.appName',
			answer_c: 'client.navName',
			answer_d: null,
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'true',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 975,
		question: 'Where is the correct place to insert a JavaScript?',
		description: null,
		answers: {
			answer_a: 'The <head> section',
			answer_b: 'The <body> section',
			answer_c: 'The <footer>',
			answer_d: 'Both the <head> section and the <body> section are correct',
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'false',
			answer_c_correct: 'false',
			answer_d_correct: 'true',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 997,
		question: 'Is JavaScript case-sensitive?',
		description: null,
		answers: {
			answer_a: 'True',
			answer_b: 'False',
			answer_c: null,
			answer_d: null,
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'true',
			answer_b_correct: 'false',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 984,
		question: 'How does a FOR loop start?',
		description: null,
		answers: {
			answer_a: 'for i = 1 to 5',
			answer_b: 'for (i = 0; i <= 5; i++)',
			answer_c: 'for (i <= 5; i++)',
			answer_d: 'for (i = 0; i <= 5)',
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'false',
			answer_b_correct: 'true',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 982,
		question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
		description: null,
		answers: {
			answer_a: 'if (i != 5)',
			answer_b: 'if (i <> 5)',
			answer_c: 'if i =! 5 then',
			answer_d: 'if i <> 5',
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'true',
			answer_b_correct: 'false',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 986,
		question: 'How to insert a comment that has more than one line?',
		description: null,
		answers: {
			answer_a: '/*This comment has more than one line*/',
			answer_b: '<!--This comment has more than one line-->',
			answer_c: '//This comment has more than one line//',
			answer_d: null,
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'true',
			answer_b_correct: 'false',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
	{
		id: 996,
		question: 'What will the following code return: Boolean(10 > 9)',
		description: null,
		answers: {
			answer_a: 'true',
			answer_b: 'NaN',
			answer_c: 'false',
			answer_d: null,
			answer_e: null,
			answer_f: null,
		},
		multiple_correct_answers: 'false',
		correct_answers: {
			answer_a_correct: 'true',
			answer_b_correct: 'false',
			answer_c_correct: 'false',
			answer_d_correct: 'false',
			answer_e_correct: 'false',
			answer_f_correct: 'false',
		},
		correct_answer: 'answer_a',
		explanation: null,
		tip: null,
		tags: [
			{
				name: 'JavaScript',
			},
		],
		category: 'Code',
		difficulty: 'Easy',
	},
];

const newData = [];

data.forEach((item) => {
	//Prepare Tags
	const tags = [];
	item.tags.forEach((item) => {
		tags.push(item.name);
	});

	//Prepare Answers
	const answers = [];

	Object.values(item.answers).forEach((valueA, i) => {
		Object.values(item.correct_answers).forEach((valueB, j) => {
			if (i === j && valueA !== null) {
				answers.push({
					answer: valueA,
					isCorrect: valueB,
				});
			}
		});
	});

	newData.push({
		question: item.question,
		answers: answers,
		tags: tags,
		difficulty: item.difficulty,
	});
});


const JSONdata = JSON.stringify(newData);

console.log(JSONdata)