
// Tab switching
function showTab(tabName) {
	document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
	document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
	
	event.target.classList.add('active');
	document.getElementById(tabName).classList.add('active');
}

// Flashcards
const flashcards = [
	{ front: 'こんにちは', back: 'Hello' },
	{ front: 'ありがとう', back: 'Thank you' },
	{ front: 'さようなら', back: 'Goodbye' },
	{ front: 'おはよう', back: 'Good morning' },
	{ front: 'すみません', back: 'Excuse me' }
];
let currentCard = 0;

function flipCard() {
	document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
	currentCard = (currentCard + 1) % flashcards.length;
	updateCard();
}

function previousCard() {
	currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
	updateCard();
}

function updateCard() {
	document.getElementById('flashcard').classList.remove('flipped');
	setTimeout(() => {
		document.getElementById('card-front').textContent = flashcards[currentCard].front;
		document.getElementById('card-back').textContent = flashcards[currentCard].back;
	}, 300);
}

// Kana Chart
const hiragana = [
	['あ','a'], ['い','i'], ['う','u'], ['え','e'], ['お','o'],
	['か','ka'], ['き','ki'], ['く','ku'], ['け','ke'], ['こ','ko'],
	['さ','sa'], ['し','shi'], ['す','su'], ['せ','se'], ['そ','so'],
	['た','ta'], ['ち','chi'], ['つ','tsu'], ['て','te'], ['と','to'],
	['な','na'], ['に','ni'], ['ぬ','nu'], ['ね','ne'], ['の','no']
];

function loadKanaChart() {
	const chart = document.getElementById('kana-chart');
	hiragana.forEach(([char, romaji]) => {
		const item = document.createElement('div');
		item.className = 'kana-item';
		item.innerHTML = `<span class="kana-char">${char}</span><span class="kana-romaji">${romaji}</span>`;
		item.onclick = () => alert(`${char} = ${romaji}`);
		chart.appendChild(item);
	});
}
loadKanaChart();

// Quiz
function checkAnswer(element, isCorrect) {
	const options = document.querySelectorAll('.quiz-option');
	options.forEach(opt => opt.style.pointerEvents = 'none');
	
	if (isCorrect) {
		element.classList.add('correct');
	} else {
		element.classList.add('wrong');
		options.forEach(opt => {
			if (opt.textContent === 'Hello') opt.classList.add('correct');
		});
	}
}

function nextQuestion() {
	location.reload(); // Simple reload for demo
}

// Progress
function incrementStreak() {
	const streakElement = document.getElementById('streak-count');
	let streak = parseInt(streakElement.textContent);
	streakElement.textContent = streak + 1;
	localStorage.setItem('japaneseStreak', streak + 1);
}

// Load saved streak
const savedStreak = localStorage.getItem('japaneseStreak');
if (savedStreak) {
	document.getElementById('streak-count').textContent = savedStreak;
}

// Timer
let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds

function startTimer() {
	timerInterval = setInterval(() => {
		timeLeft--;
		updateTimerDisplay();
		if (timeLeft <= 0) {
			stopTimer();
			alert('Study session complete! 🎉');
		}
	}, 1000);
}

function stopTimer() {
	clearInterval(timerInterval);
}

function resetTimer() {
	stopTimer();
	timeLeft = 25 * 60;
	updateTimerDisplay();
}

function updateTimerDisplay() {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	document.getElementById('timer-display').textContent = 
		`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}