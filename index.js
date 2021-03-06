let instructionsEl = document.getElementById("instructions-el");
let aboutEl = document.getElementById("about-el");

let instructionsBtn = document.getElementById("instructions-btn");
let aboutBtn = document.getElementById("about-btn");
let preQuestionsBtn = document.getElementById("prev-list-btn");

let questionEl = document.getElementById("question-el");
let prevQuestionsEl = document.getElementById("prevList-el");

let btnNormal = "rgba(255, 255, 255, 0.1)";
let btnPressed = "rgba(255, 255, 255, 0.05)";

const questions = [
  "What’s your philosophy in life?",
  "What’s the one thing you would like to change about yourself?",
  "Are you religious or spiritual?",
  "Do you consider yourself an introvert or an extrovert?",
  "Which parent are you closer to and why?",
  "What was the best phase in your life?",
  "What was the worst phase in your life?",
  "Is what you’re doing now what you always wanted to do growing up?",
  "What makes you feel accomplished?",
  "What’s your favorite book/movie of all time and why did it speak to you so much?",
  "What is a relationship deal breaker for you?",
  "Are you more into looks or brains?",
  "What is something that you have never told anyone?",
  "What issomething that you are proud of, but barely anyone knows about it?",
  "What was something you felt unappreciated about?",
  "Would you ever take back someone who cheated?",
  "How do you feel about sharing your password with your partner?",
  "When do you think a person is ready for marriage?",
  "What kind of parent do you think you will be?",
  "What would you do if your parents didn’t like your partner?",
  "Who is that one person you can talk to about just anything?",
  "Do you usually stay friends with your exes?",
  "Have you ever lost someone close to you?",
  "If you are in a bad mood, do you prefer to be left alone or have someone to cheer you up?",
  "What’s an ideal weekend for you?",
  "What do you think of best friends of the opposite sex?",
  "Do you judge a book by its cover?",
  "Are you confrontational?",
  "When was the last time you broke someone’s heart?",
  "Would you relocate for love?",
  "Did you ever write a journal?",
  "What are you most thankful for?",
  "Do you believe in second chances?",
  "What’s the one thing that people always misunderstand about you?",
  "What is your idea of a perfect vacation?",
  "What did your past relationship teach you?",
  "What are your thoughts on online dating or tinder?",
  "What’s on your bucket list this year?",
  "When have you felt your biggest adrenaline rush?",
  "What is the craziest thing you’ve ever done and would you do it again?",
  "If a genie granted you 3 wishes right now, what would you wish for?",
  "What’s your biggest regret in life?",
  "What do you think about when you’re by yourself?",
  "Does your job make you happy?",
  "What did you want to be when you were younger?",
  "Why did your last relationship end?",
  "What’s been your biggest mistake so far in life and what did you learn from it?",
  "Where is your favorite place in the entire world to go?",
  "What are your top five favorite movies?",
  "What are some of your favorite songs?",
  "What qualities do you admire about your parents?",
  "How would you describe your best friend?",
  "What’s your favorite hobby to do alone?",
  "What’s something you can’t go a day without doing?",
  "What’s the most spontaneous thing you’ve done lately?",
  "What’s the craziest thing you’ve ever done for love?",
  "What’s your biggest pet peeve?",
  "Why do you think you’re still single?",
  "What accomplishment are you most proud of?",
  "What is one dream you have yet to accomplish?",
  "What is your greatest fear?",
  "What are three things you value most about a person?",
  "Who are five people you are closest with?",
  "What is the greatest struggle you’ve overcome?",
  "If you could live anywhere in the world where would it be?",
  "What’s the most exciting thing that’s happened this past year?",
  "What’s your favorite beer?",
  "What’s one thing that bothers you most about the world today?",
  "Who are you closer with your mom or your dad?",
  "If you could change one thing about yourself what would it be?",
  "If you could change one thing about the world what would it be?",
  "Who was your favorite teacher and why?",
  "What sport did you fall in love with?",
  "What is the weirdest thing about you?",
  "What was your longest relationship?",
  "What would your best friend say is your best quality?",
  "Who is your favorite historical figure?",
  "What made you choose the college you went to?",
  "If you could tell your former self one thing right now what would it be?",
  "What food could you not live without?",
  "Dogs or Cats?",
  "What’s closest you’ve ever come to being arrested?",
  "What was your best birthday?",
  "What’s one thing you wish you knew how to do?",
  "Where’s one place you’d like to go that you haven’t been?",
  "What was the last book you read? And When?",
  "Where do you usually get your news?",
  "What are some of your own personal goals in the next 5 years?",
  "What would you consider your greatest accomplishment so far?",
  "If you could get away with anything that you do?",
  "Who is your greatest hero?",
  "What’s the greatest risk you’ve ever taken?",
  "Why are we here?",
  "If heaven is real and you died tomorrow, would you get in?",
  "Do you believe in fate?",
  "How do you think people see you?",
  "If you had the ability to erase something that you did in the past, what would it be?",
  "What song makes you unconditionally happy?",
  "If you could have anybody else’s life, who’s would you take?",
  "What fictional character do you most relate to?",
  "If I asked you at age 5 what you wanted to be when you grew up, what would you say?",
  "What is your biggest irrational fear?",
  "If you could take us anywhere in the world right now, where would you take us?",
  "What is your biggest regret?",
  "If you died tomorrow, what would you wish you had done?",
  "Can you pin point the moment in your life where you were the happiest?",
  "What song makes you unconditionally sad?",
  "If past lives are real, what was yours?",
  "Have you ever seen something you can’t explain?",
  "What is your biggest accomplishment?",
  "If you could do one thing without suffering the consequences, what would you do?",
  "What is the strangest dream you’ve ever had?",
  "What is the darkest thought you’ve ever had? What about the darkest thing you’ve never told anybody?",
  "Is there something out there, a thought, an idea, a current event, or a fear that you find deeply unsettling?",
  "What would you consider to be your deepest fear? ",
  "Is there an activity that calms you? A place or a thing that makes you feel at ease?",
  "What makes you feel uneasy? Overwhelmed? Anxious?",
  "What is your favorite song and why?",
  "Do you have a favorite book? A line in a piece of literature? A poem? Why do you relate to it?",
  "What scene in a movie has evoked the most feelings out of you?",
  "What do you do or where do you go when you need to be alone?",
  "What makes you feel like you need to be alone?",
  "Can you remember a time in your life you felt the most alive? Tell me everything about that memory.",
  "When have you felt the lowest in your life?",
  "Where have you felt the most failure? The most success?",
  "Tell me about the facts or harsh truths you choose to ignore but know you shouldn’t.",
  "When have you felt like you were living life to the fullest? When have you felt like you weren’t?",
  "What is the first lie you ever told? Which is the biggest?",
  "What is the first secret you ever kept from anybody? Which is the biggest?",
  "Are you a religious or spiritual person? Tell me why and tell me how.",
  "Have you always had the same political beliefs? Is there something that impacted them?",
  "Where do you find meaning in your life?",
  "Have you ever been in love? Tell me about the times you have been.",
  "Tell me about the times someone broke your heart.",
  "Why did you cry the last time you did so?",
  "Have you ever cried tears of joy?",
  "What did you do when you hurt someone the most?",
  "If your life was a movie or a book what would be the title to it?",
  "When have you caused the most harm to yourself?",
  "What has been the biggest change you ever made that made you the most proud of yourself?",
  "Think about the people you love the most in your life, what do you do for them?",
  "Is home for you a place or a feeling? Describe that place or describe that feeling.",
  "If you could be anywhere other than where you are right now, where would you be and what would you be looking at?",
  "Have you ever questioned your sanity and why?",
  "What is your most cherished childhood memory?",
  "Have you ever had dreams about a past life?",
  "Do you have any recurring dreams or nightmares?",
  "Do you believe more in fate or that we are the creators of our own destinies because we are governed by free will?",
  "Do you believe in extraterrestrial life? Elaborate on why or why not.",
  "Would you find more comfort in the theoretical idea that that we were the most advanced species in outer space or would you find more comfort in the idea that we weren’t?",
  "What would be your thought process if you were presented with irrefutable evidence that a god didn’t exist? What if god did exist?",
  "What do you think was there before the universe came into creation?",
  "Do you believe in other dimensions and parallel universes?",
  "How do you define art?",
  "If you could have the option of eradicating pain from your life would you choose to do so? Why or why not?",
  "Is a life exclusive to pleasure (no suffering) worthwhile?",
  "What do you think happens after death, if anything?",
  "If you could be given the date of your death would you want to know it?",
  "Presented with the opportunity to be immortal would you take it?",
  "Would you rather be loved or love?",
  "How do you define beauty?",
  "Where does happiness come from? Define what happiness means to you.",
  "Do you believe yourself to be truly free? If so, why? If not, what is holding you back?",
  "Deja-vu: is there anything to it or merely coincidence?",
  "What was your father or mother like at home? How does he or she act different outside of family?",
  "If you were given a choice to choose your manner of death, how would you die?",
  "Tell me a really, really stupid joke that made you laugh.",
  "Pick two out of physical chemistry, lifestyle compatibility, emotional compatibility and intellectual compatibility.",
  "If you were forced to vote for one the biggest dictators of history, (Hitler, Mussolini, Mugabe, Mao, Saddam or Stalin), which one would you pick and why?",
  "Show me a music track or a scene from a film that made you tear up.",
  "If you could have any animal in the world as a pet, what would it be and why?",
  "If you were given a chance to explore the oceans, go to outer space or visit 50 different countries, which one you choose and why?",
  "Do you think that men are more rational and women are more emotional?",
  "Out of the negative emotions of greed, anger, jealousy and hate, which one would you say affects you the most?",
  "Out of the positive emotions of compassion, positivity, enthusiasm and initiative, which one is your biggest strength?",
  "If you could be President of your country for an hour, what is the one thing that you would change?",
  "Describe your best first kiss.",
  "Has another’s pain ever given you joy? Be totally honest.",
  "Tell me your biggest strength outside of your workplace.",
  "If you were given a choice to turn into a zombie or to die, which would you pick?",
  "If you had to pick one, what is the most important value you would teach your children? Honesty, Kindness or Courage?",
  "Are you health conscious?",
  "Name the one bad quality you wouldn’t mind in a partner.",
  "Name the one worst quality you cannot tolerate in a partner.",
  "Tell me your biggest supernatural or paranormal fear?",
  "If you got a free cheque for $5,000 right this second, how would you use it?",
  "Name one really surprising thing that set your heart pumping and gave you an adrenaline rush.",
  "Tell me about the time you were so embarrassed in love, you wished you could disappear right there and then.",
  "Have you ever been unable to sleep? What do you do with your time then?",
  "Tell me about your biggest love regret that made you wish you could turn back time?",
  "Do you believe in materialism or spirituality?",
  "If you were forced to pick one religion on this planet, which one would it be and why?",
  "What is the most romantic and loving thing you have ever done for somebody?",
  "What is the most adventurous thing you have ever done in your life?",
  "What’s your day-to-day mantra?",
  "What quote resonates with you more than any other?",
  "What’s your anti-motto?",
  "What trait do you envy in others?",
  "What skill do you wish you had?",
  "How do you wish to be remembered?",
  "How would your best friend describe you in five words?",
  "How would you summarize your life purpose?",
  "Have you every felt envious of someone else and hated yourself for it?",
  "What do you want written on your gravestone?",
  "Have you ever had a nickname? What is it?",
  "What really makes you angry?",
  "Would you rather win the lottery or work at the perfect job? And why?",
  "What is your dream job? ",
];
let prevQuestions = [];

let currentQuestion = 'Click "Next" when you\'re ready.';

let instructions =
  'The game is made to be played by 2 or more players, but solo is possible as well as a mental exercise. Click "Next" to go to the next question*, where everyone takes turns answering in detail as honestly as they want. They are chosen at random from a list of 200+ questions. Click "View Previous" to see the questions that you have gone through. The aim of the game is to get to know the other person/people better. Enjoy! <br><br> *The questions were not written by me; They were sourced from <a href="https://thoughtcatalog.com/rania-naim/2016/02/40-deep-questions-to-ask-if-you-really-want-to-get-to-know-someone/">Thought Catalog</a>.';

let about =
  "I love thinking about and answering deep questions by myself and with friends. I made this so that me and anyone who also likes doing that can use it to get to know each other better (and also for me to practice web dev). I will be updating/adding to the list of questions as time goes.<br><br>- Manthila";

let instructionsShowing = false;
let aboutShowing = false;
let prevQuestionsShowing = false;

instructionsEl.textContent = "";
aboutEl.textContent = "";
questionEl.textContent = 'Click "Next" when you\'re ready.';

function viewInstructions() {
  if (!instructionsShowing) {
    aboutEl.textContent = "";
    instructionsEl.innerHTML = instructions;
    instructionsBtn.style.backgroundColor = btnPressed;
    aboutBtn.style.backgroundColor = btnNormal;
    instructionsShowing = true;
    console.log("Viewing instructions.");
  } else {
    instructionsEl.textContent = "";
    instructionsBtn.style.backgroundColor = btnNormal;
    instructionsShowing = false;
  }
}

function viewAbout() {
  if (!aboutShowing) {
    instructionsEl.textContent = "";
    aboutEl.innerHTML = about;
    aboutBtn.style.backgroundColor = btnPressed;
    instructionsBtn.style.backgroundColor = btnNormal;
    aboutShowing = true;
    console.log("Viewing about.");
  } else {
    aboutEl.textContent = "";
    aboutBtn.style.backgroundColor = btnNormal;
    aboutShowing = false;
  }
}

function randomQuestion() {
  let question = questions[Math.floor(Math.random() * questions.length)];
  while (true) {
    if (!prevQuestions.includes(question)) {
      break;
    } else {
      question = questions[Math.floor(Math.random() * questions.length)];
    }
  }
  return question;
}

function prevQuestionList() {
  if (!prevQuestionsShowing) {
    let prevQuestionsDisplay = "";
    for (let i = prevQuestions.length - 1; i > 0; i--) {
      prevQuestionsDisplay += prevQuestions[i] + "<br>";
    }
    prevQuestionsEl.innerHTML = prevQuestionsDisplay;
    preQuestionsBtn.style.backgroundColor = btnPressed;
    prevQuestionsShowing = true;
    console.log("Viewing previous questions.");
  } else {
    prevQuestionsEl.textContent = "";
    preQuestionsBtn.style.backgroundColor = btnNormal;
    prevQuestionsShowing = false;
  }
}

function nextQuestion() {
  prevQuestions.push(currentQuestion);
  currentQuestion = randomQuestion();
  questionEl.textContent = currentQuestion;
  console.log("Next: " + currentQuestion);
}
