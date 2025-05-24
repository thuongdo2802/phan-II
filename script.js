// Dữ liệu cho tất cả các câu hỏi từ file II.docx
const questionsData = [
    {
        qNum: 1,
        mainText: `COMPUTER WORLD<br>Discounts for students only with student cards.<br>Ask inside for details.`,
        options: {
            A: "You can’t get reduced prices without your student card.",
            B: "If you show your student card, they’ll give you details.",
            C: "If you go inside, they’ll give you a student card."
        },
        correct: "A" // "Discounts for students only with student cards." -> A
    },
    {
        qNum: 2,
        mainText: `From: Xavier<br>To: Pierre<br>Pierre - no seats on any Paris flight on Sunday. There’s space on Monday’s 09.00, but you must confirm before tomorrow lunchtime.`,
        options: {
            A: "Pierre’s flight has not yet been reserved.",
            B: "It’s possible for Pierre to fly tomorrow.",
            C: "Pierre’s flight has been changed."
        },
        correct: "B" // "There’s space on Monday’s 09.00" -> B
    },
    {
        qNum: 3,
        mainText: `Moving house?<br>Don’t forget to tell us so we can keep you on our mailing list.<br>Complete your new details on this form and return it to us`,
        options: {
            A: "Remember to complete the mailing list.",
            B: "We’d like you to send us your new address.",
            C: "The details of our mailing list are on the form."
        },
        correct: "B" // "Don’t forget to tell us so we can keep you on our mailing list. Complete your new details on this form and return it to us" -> B
    },
    {
        qNum: 4,
        mainText: `Chris<br>Gone to Dad’s He rang in a panic - he could smell gas! Dinner’s in the oven - start without me. Back soon<br>Angie`,
        options: {
            A: "Angie went out because of a phone call.",
            B: "Angie’s father rang to warn her about something.",
            C: "Chris will have to make his own dinner."
        },
        correct: "A" // "He rang in a panic - he could smell gas!" -> reason for going out -> A
    },
    {
        qNum: 5,
        mainText: `If you are not satisfied with your purchase, please feel free to return it to any of our branches. We are happy to exchange or refund the cost of any unused item.<br>If you don’t want to keep what you’ve bought,`,
        options: {
            A: "you must not use it before returning it.",
            B: "you have exchange for something else.",
            C: "you should take it back to where you bought it."
        },
        correct: "A" // "unused item" -> A
    },
    {
        qNum: 6,
        mainText: `Great sports bike<br>In perfect condition - less than two years old - quick sale needed - offers welcome (not less than €100). Abdul 0775 221 321`,
        options: {
            A: "Abdul’s bike needs only a few repairs.",
            B: "Abdul bought this bike two years ago.",
            C: "Abdul would accept €100."
        },
        correct: "C" // "offers welcome (not less than €100)" -> C
    },
    {
        qNum: 7,
        mainText: `From: Toshi<br>To: Olga<br>Remember my biology book? I need it urgently, exam’s on Friday! Leave it in main office - tomorrow at the latest. Thanks<br>What does Olga want?`,
        options: {
            A: "to get her book back.",
            B: "to meet Toshi tomorrow.",
            C: "to take her biology exam."
        },
        correct: "A" // "Remember my biology book? I need it urgently..." -> Toshi needs HER book back -> A
    },
    {
        qNum: 8,
        mainText: `CENTRAL SWIMMING POOL<br>Because of problems with the showers, the pool is closed until further notice.<br>There is something wrong with`,
        options: {
            A: "the showers.",
            B: "the pool.",
            C: "the showers and the pool."
        },
        correct: "C" // "Because of problems with the showers, the pool is closed" -> both showers and pool affected -> C
    },
    {
        qNum: 9,
        mainText: `To: Gina<br>From: Zoe<br>Like to go and see “Chicago” tonight? If I don’t hear from you, I’ll see you outside ABC at 7.30. OK?<br>What does Gina have to do when she reads the email?`,
        options: {
            A: "reply immediately.",
            B: "ring the cinema.",
            C: "nothing."
        },
        correct: "C" // "If I don’t hear from you, I’ll see you..." -> no reply means ok -> C
    },
    {
        qNum: 10,
        mainText: `Had a bad start to the holiday - our luggage didn’t turn up for 2 days! But now - brilliant place! Spending most of the time water-skiing. We’re thinking of not coming home.`,
        options: {
            A: "Because they lost their luggage.",
            B: "Because they like the place so much",
            C: "Because they missed two days of their holiday."
        },
        correct: "B" // "brilliant place! Spending most of the time water-skiing. We’re thinking of not coming home." -> B
    },
    {
        qNum: 11,
        mainText: `NO ENTRY EXCEPT WITH A VALID PERMIT WHICH CAN BE BOUGHT FROM THE TOWN HALL`,
        options: {
            A: "If you want to come in, you must have a permit.",
            B: "You must go to the Town Hall if you have a permit.",
            C: "You need a permit if you want to enter the Town Hall."
        },
        correct: "A" // "NO ENTRY EXCEPT WITH A VALID PERMIT" -> A
    },
    {
        qNum: 12,
        mainText: `Accident here at 6.00 pm on Sunday 25th September. Please contact police on 3569087 if you saw anything`,
        options: {
            A: "The police would like to speak to people on September 25th.",
            B: "The police want to speak to people who had an accident on September 25th.",
            C: "The police want people to tell them if they saw the accident on September 25th."
        },
        correct: "C" // "contact police... if you saw anything" -> C
    },
    {
        qNum: 13,
        mainText: `Hi Sam, I’m in a café with Dan. We’re going into Railtons store shortly to choose some football kit. Come and join us! We’ll be here till 3 p.m. Jake`,
        options: {
            A: "Sam can meet Jake and Dan at the café if he goes before 3 p.m.",
            B: "Jake wants Sam to help him choose new sports clothes.",
            C: "Dan and Jake will wait for Sam to arrive before they go to Railtons."
        },
        correct: "A" // "We’ll be here till 3 p.m." -> A
    },
    {
        qNum: 14,
        mainText: `To: All students<br>From: Mrs. Matthews<br>We have just had a delivery of new school sweatshirts. Students wishing to buy one to wear should come to the office at lunchtime.`,
        options: {
            A: "Some new school uniform is available in the office.",
            B: "Students must wear their new school sweatshirts during lunch break today.",
            C: "The office is expecting items of new school clothing to be delivered at lunchtime."
        },
        correct: "A" // "delivery of new school sweatshirts... available in the office" -> A
    },
    {
        qNum: 15,
        mainText: `We do not give refunds for reduced items you have bought in our sale.`,
        options: {
            A: "There are no reduced items on sale in the store at the moment.",
            B: "You can’t get money back for things you got cheaply in the sale.",
            C: "Refunds for reduced items cannot be given after the sale has finished."
        },
        correct: "B" // "do not give refunds for reduced items you have bought in our sale" -> B
    },
    {
        qNum: 16,
        mainText: `No more than three items allowed in changing room.`,
        options: {
            A: "You cannot try on items anywhere except in the changing rooms.",
            B: "You may take a maximum of three items with you into the changing rooms.",
            C: "There are only three changing rooms available at any time for trying on items."
        },
        correct: "B" // "No more than three items allowed" -> B
    },
    {
        qNum: 17,
        mainText: `Hi Dan, My brother won’t let me borrow his baseball boots, so I need to buy some. Can you tell which shop in town you bought yours from? Thanks. Harry<br>Harry wants to`,
        options: {
            A: "meet Dan in town to borrow his baseball boots.",
            B: "tell Dan which shop he can get some baseball boots from.",
            C: "find out where Dan went to get his baseball boots."
        },
        correct: "C" // "Can you tell which shop in town you bought yours from?" -> C
    },
    {
        qNum: 18,
        mainText: `PLEASE GIVE UP SEAT TO PEOPLE CARRYING CHILDREN`,
        options: {
            A: "If somebody carrying a child gets on, offer them your seat.",
            B: "People carrying children are requested to remain seated.",
            C: "You can only use this seat if you are carrying children."
        },
        correct: "A" // "GIVE UP SEAT TO PEOPLE CARRYING CHILDREN" -> A
    },
    {
        qNum: 19,
        mainText: `To: Jane<br>From: Maria<br>My dad said he’ll drive us into town on Saturday to go shopping, we’ll pick you up at 11 a.m., OK? We need to get a present for Sophie - any ideas?<br>Maria wants to`,
        options: {
            A: "make a suggestion to Jane about what gift to buy for Sophie.",
            B: "tell Jane about the travel arrangements for the weekend.",
            C: "check that Jane still wants to go shopping in town."
        },
        correct: "C" // "we’ll pick you up at 11 a.m., OK?" -> checking if Jane is okay with the plan -> C
    },
    {
        qNum: 20,
        mainText: `Please take your vegetables to be weighted at the checkout.`,
        options: {
            A: "You can weigh your fruit yourself at the checkout.",
            B: "The checkout assistant will weigh your fruit for you.",
            C: "When you have weighed your fruit take it to the checkout."
        },
        correct: "B" // "to be weighted at the checkout" -> someone else will weigh it for you -> B
    },
    {
        qNum: 21,
        mainText: `Please inform the college office of any change in your contact details`,
        options: {
            A: "Details of student’s new timetables are available from the college office.",
            B: "You should let the college office know if you get a new phone number.",
            C: "All requests for course changes must be made through the college office."
        },
        correct: "B" // "any change in your contact details" -> new phone number is a contact detail -> B
    },
    {
        qNum: 22,
        mainText: `Free gift-wrapping service on any item of $10 or more`,
        options: {
            A: "It costs $10 to use our gift-wrapping service.",
            B: "If you spend $10 on a gift there is no charge for wrapping it.",
            C: "You get a free gift worth $10 if you have your gift wrapped at the shop."
        },
        correct: "B" // "Free gift-wrapping service on any item of $10 or more" -> B
    },
    {
        qNum: 23,
        mainText: `SPECIAL OFFER<br>TODAY ONLY<br>Free sports bag when you spend $50 or more on suitcases`,
        options: {
            A: "This offer is available for a short period.",
            B: "This offer is limited to regular customers.",
            C: "This offer is on products that are less than $50."
        },
        correct: "A" // "TODAY ONLY" -> A
    },
    {
        qNum: 24,
        mainText: `Anita<br>Leah phoned. Train is delayed - arrives 7.10. She won’t have time to see you in café as planned. She’ll meet you inside cinema instead. She’ll have snack on train.`,
        options: {
            A: "Leah will be too late to meet Anita in the café.",
            B: "Leah will not be able to go to the cinema with Anita.",
            C: "Leah might not have time to eat before she meets Anita."
        },
        correct: "A" // "won’t have time to see you in café as planned" -> A
    },
    {
        qNum: 25,
        mainText: `ALTON ZOO<br>The monkeys are fed daily at 9.00 a.m., visitors are welcome to watch.`,
        options: {
            A: "Visitors can see how the monkeys are fed at 9.00 a.m.",
            B: "Visitors should never try to feed the monkeys before 9.00 a.m.",
            C: "Visitors can help feed the monkeys at 9.00 a.m."
        },
        correct: "A" // "visitors are welcome to watch" -> A
    },
    {
        qNum: 26,
        mainText: `Smoking is only allowed in the smoking areas.`,
        options: {
            A: "There are certain places where you can smoke.",
            B: "You are not allowed to smoke anywhere in the building.",
            C: "You must smoke if you are in this area."
        },
        correct: "A" // "only allowed in the smoking areas" -> A
    },
    {
        qNum: 27,
        mainText: `To: Ben<br>From: Mark<br>The tennis match will be cancelled if it is raining and we’ll go to the cinema instead.`,
        options: {
            A: "They will go to the cinema.",
            B: "They may not play tennis.",
            C: "They are not going to play tennis."
        },
        correct: "B" // "will be cancelled if it is raining" -> possibility, may not play -> B
    },
    {
        qNum: 28,
        mainText: `Do not open the door until the red light has gone off and the green light comes on.`,
        options: {
            A: "Wait for the green light before opening the door.",
            B: "Turn off the red light when you open the door.",
            C: "Do not open the door when the green light is on."
        },
        correct: "A" // "until... the green light comes on" -> A
    },
    {
        qNum: 29,
        mainText: `To: Anne<br>From: Julie<br>Anne, your doctor’s appointment is at two o’clock on Monday instead of three o’clock on Tuesday.<br>Anne’s appointment`,
        options: {
            A: "will be an hour later",
            B: "will be a day later.",
            C: "will no longer be on Tuesday."
        },
        correct: "C" // "instead of three o’clock on Tuesday" -> C
    },
    {
        qNum: 30,
        mainText: `Tony – the bookshop phoned to say they’ve got the book you ordered. They will keep it until Friday and then it will go out on the shelves.`,
        options: {
            A: "The shop will have Tony’s book by Friday.",
            B: "Tony needs to collect the book by Friday.",
            C: "The book is being delivered on Friday."
        },
        correct: "B" // "keep it until Friday and then it will go out on the shelves" -> collect by Friday -> B
    },
    {
        qNum: 31,
        mainText: `CUSTOMER NOTICE<br>The store will close at 4pm on Wednesday for a stock check. Normal opening hours of 9-5 will resume on Thursday.`,
        options: {
            A: "On Wednesday the store will close an hour earlier than usual.",
            B: "The store usually closes at 4pm.",
            C: "The store will open later than normal on Wednesday."
        },
        correct: "A" // "Normal opening hours of 9-5" implies usually closes at 5pm. Closing at 4pm is an hour earlier -> A
    },
    {
        qNum: 32,
        mainText: `Please return all books by the due date. There will be a fine for overdue books. Books may be renewed over the telephone on the condition that they have not been reserved by another borrower.`,
        options: {
            A: "All books must be renewed by telephone.",
            B: "All books must be reserved by borrowers.",
            C: "Books must be returned on time."
        },
        correct: "C" // "Please return all books by the due date. There will be a fine for overdue books." -> C
    },
    {
        qNum: 33,
        mainText: `REPAIRS TO MOTORWAY 2KMS AHEAD<br>TAKE THIS EXIT TO AVOID POSSIBLE DELAYS.`,
        options: {
            A: "You must use this exit because the road ahead is closed.",
            B: "You may need extra time for your journey if you continue on this road.",
            C: "You can avoid possible delays if you travel on the motorway."
        },
        correct: "B" // "TO AVOID POSSIBLE DELAYS" implies delays are possible if you continue -> B
    },
    {
        qNum: 34,
        mainText: `To: Mick<br>From: Sharon<br>Re: lecture notes<br>Hi Mick, can you e-mail me the history notes from Monday afternoon’s lecture? I was under the weather and missed it. See you at the theatre on Friday. Sharon`,
        options: {
            A: "Sharon was too ill to go to the lecture.",
            B: "Bad weather prevented Sharon from going to the lecture.",
            C: "Sharon went to the theatre instead of the lecture."
        },
        correct: "A" // "I was under the weather and missed it." -> under the weather means ill -> A
    },
    {
        qNum: 35,
        mainText: `NOTE<br>Tim. Could you do the dishes and walk Scooby? I ’ ll be back at 6. Love, Mum.`,
        options: {
            A: "Tim must cook the dinner.",
            B: "Tim must walk the dog and clean the plates.",
            C: "Tim’s mum has taken the dog for a walk."
        },
        correct: "B" // "do the dishes and walk Scooby" -> B
    },
    {
        qNum: 36,
        mainText: `REGENCY CAMERAS<br>Buy two films and get one FREE`,
        options: {
            A: "Buy three films for the price of two.",
            B: "Get a free film with everyone you buy.",
            C: "Films bought here are printed free."
        },
        correct: "A" // "Buy two films and get one FREE" -> 3 for price of 2 -> A
    },
    {
        qNum: 37,
        mainText: `Nothing of value is left in this van at night.`,
        options: {
            A: "Valuable objects are removed at night.",
            B: "This van is locked at night.",
            C: "Valuables should not be left in the van."
        },
        correct: "A" // "Nothing of value is left" implies they are removed -> A
    },
    {
        qNum: 38,
        mainText: `NO BICYCLES<br>AGAINST GLASS PLEASE`,
        options: {
            A: "Do not leave your bicycle touching the window.",
            B: "Broken glass may damage your bicycle tyres.",
            C: "Your bicycle may not be safe here."
        },
        correct: "A" // "NO BICYCLES AGAINST GLASS" -> A
    },
    {
        qNum: 39,
        mainText: ``, // No main text, implies it's a general instruction/sign
        options: {
            A: "Children cannot reach medicine.",
            B: "Children are not allowed to take medicine.",
            C: "Put medicine in a safe place that children cannot get it."
        },
        correct: "C" // Common safety instruction -> C
    },
    {
        qNum: 40,
        mainText: `LOST FLOPPY DISC<br>Lost on Tuesday – contains important schoolwork.<br>Hand in to office`,
        options: {
            A: "If you have found a floppy disc, please leave it at the office.",
            B: "Go to the office if you have lost a floppy disc.",
            C: "Make sure all schoolwork is given in on floppy disc to the office."
        },
        correct: "A" // "Hand in to office" for LOST item -> A
    },
    {
        qNum: 41,
        mainText: `From: Juan<br>To: Maria<br>Do you still want to buy my guitar? Pedro wants it too, but you asked me first. Let me know tomorrow at school.`,
        options: {
            A: "Juan will sell Maria his guitar if she wants it.",
            B: "Pedro has a guitar which Maria might want to buy.",
            C: "Juan would prefer to sell his guitar to Pedro."
        },
        correct: "A" // "Do you still want to buy my guitar?" and "you asked me first" -> A
    },
    {
        qNum: 42,
        mainText: `Maths Homework<br>Some of you have told me the homework is a bit difficult. So if you haven’t finished it by Friday, you can hand it in on Monday. Mr. Peters`,
        options: {
            A: "Students who wish to hand in their homework on Monday should tell Mr. Peters.",
            B: "The homework given out on Friday must be returned by Monday.",
            C: "Anyone having problems with their homework may have extra time to complete it."
        },
        correct: "C" // "if you haven’t finished it by Friday, you can hand it in on Monday." -> C
    },
    {
        qNum: 43,
        mainText: `Dan, Don’t forget to put your football shirt in the washing machine as soon as you get home from the match. Add soap powder and turn dial to number 3. Mum<br>What does Dan have to do?`,
        options: {
            A: "Remember to wash his football shirt after the match.",
            B: "Remember to make sure his football shirt is clean in time for the match.",
            C: "Remember where he put the football shirt that he needs for the match."
        },
        correct: "A" // "put your football shirt in the washing machine as soon as you get home" -> A
    },
    {
        qNum: 44,
        mainText: `From: Sarah<br>To: Janine<br>Janine – my birthday meal’s booked for 6.30 Saturday at Luigi’s restaurant. I know there are things you can’t eat, so I’ve attached a menu. Tell me if it’s OK. Sarah<br>What does Sarah need to know?`,
        options: {
            A: "If Janine will be available to go to the restaurant.",
            B: "If the food at the restaurant will be all right for Janine.",
            C: "If Janine wants to see the restaurant menu before Saturday."
        },
        correct: "B" // "I know there are things you can’t eat, so I’ve attached a menu. Tell me if it’s OK." -> B
    },
    {
        qNum: 45,
        mainText: `PARKSIDE POOL<br>BEYOND THIS RED LINE<br>THE WATER IS VERY SHALLOW – NO DIVING IN THIS AREA`,
        options: {
            A: "The far end of the pool is reserved for divers only.",
            B: "Diving is forbidden in all areas of the pool.",
            C: "Part of the pool is not deep enough for diving."
        },
        correct: "C" // "VERY SHALLOW – NO DIVING IN THIS AREA" -> C
    },
    {
        qNum: 46,
        mainText: `Phillippe, Couldn’t wait any longer, didn’t want to miss the start of the match!Problem at work? Her’s your ticket – see you at the stadium. Stefano`,
        options: {
            A: "Stefano has given up waiting for Philippe to arrive.",
            B: "Philippe and Stefano missed each other at the stadium.",
            C: "Stefano had to leave without Philippe to get to work."
        },
        correct: "A" // "Couldn’t wait any longer" -> A
    },
    {
        qNum: 47,
        mainText: `WATCH REPAIRS<br>Warning to Customers<br>All uncollected items will be sold after twelve months.`,
        options: {
            A: "This shop will keep customers' watches for up to twelve months.",
            B: "This shop will sell customers' watches within twelve months.",
            C: "This shop will look after customers' watches for more than twelve months."
        },
        correct: "A" // "will be sold after twelve months" implies kept for up to 12 months -> A
    },
    {
        qNum: 48,
        mainText: `BEFORE LEAVING TRAIN, YOU MUST CHECK YOU HAVE ALL YOUR LUGGAGE.`,
        options: {
            A: "Passengers mustn’t put any luggage near the train doors.",
            B: "Passengers should remember to take all their bags with them.",
            C: "Passengers with large suitcases may leave them between the seats."
        },
        correct: "B" // "CHECK YOU HAVE ALL YOUR LUGGAGE." -> B
    },
    {
        qNum: 49,
        mainText: `To: Luca From: Pam Time: 9:20 a.m. Re: Phone call from your boss George. Your boss says you forgot you had to meet some customers yesterday. Call her this afternoon to arrange a new date for the meeting. Pam`,
        options: {
            A: "George should see some customers today.",
            B: "Pam wants to meet George soon.",
            C: "George has to telephone his boss"
        },
        correct: "C" // "Call her this afternoon to arrange a new date for the meeting." -> C
    },
    {
        qNum: 50,
        mainText: `Lift service starts at ground floor today. For basement, please use the stairs`,
        options: {
            A: "The lift will not be going to the basement today.",
            B: "It is not possible to use the lift above the ground floor today.",
            C: "The stairs between the basement and the ground floor are closed today."
        },
        correct: "A" // "For basement, please use the stairs" -> A
    }
];

let currentQuestionIndex = 0; // Bắt đầu từ câu hỏi đầu tiên

// Hàm này sẽ tạo HTML cho một câu hỏi
function renderQuestion(questionData) {
    const quizContentDiv = document.getElementById('quiz-content');
    quizContentDiv.innerHTML = `
        <div class="question-display-area">
            <div class="question-text-area">
                ${questionData.mainText}
            </div>
            <form class="quiz-form" id="quizForm-${questionData.qNum}">
                <div class="question-block" id="q${questionData.qNum}">
                    <p class="question-number">${questionData.qNum}.</p>
                    <div class="options">
                        </div>
                </div>
            </form>
        </div>
    `;

    const optionsDiv = document.querySelector(`#q${questionData.qNum} .options`);
    for (const [key, value] of Object.entries(questionData.options)) {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="q${questionData.qNum}" value="${key}" onchange="checkSingleAnswer(this)">
            <span>${key}. ${value}</span>
            <span class="feedback-icon"></span>
        `;
        optionsDiv.appendChild(label);
    }
}

// Hàm chuyển câu hỏi
function changeQuestion(direction) {
    const prevQuestionIndex = currentQuestionIndex;
    currentQuestionIndex += direction;

    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }
    if (currentQuestionIndex >= questionsData.length) {
        currentQuestionIndex = questionsData.length - 1;
    }

    if (prevQuestionIndex !== currentQuestionIndex) {
        renderQuestion(questionsData[currentQuestionIndex]);
    }
    updateNavigationButtons();
    document.getElementById('question-indicator').textContent = `Câu ${currentQuestionIndex + 1} / ${questionsData.length}`;
    document.getElementById('quizResult').style.display = 'none'; // Ẩn kết quả khi chuyển câu
}

// Cập nhật trạng thái nút điều hướng
function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = currentQuestionIndex === questionsData.length - 1;
}

// Hàm kiểm tra một đáp án duy nhất (khi người dùng chọn)
function checkSingleAnswer(radioElement) {
    const qName = radioElement.name;
    const questionBlockDiv = radioElement.closest('.question-block');
    const labels = questionBlockDiv.querySelectorAll('label');

    // Lấy đáp án đúng cho câu hỏi hiện tại từ questionsData
    const questionNumber = parseInt(qName.replace('q', ''));
    const currentQuestionData = questionsData.find(q => q.qNum === questionNumber);
    const correctAnswer = currentQuestionData ? currentQuestionData.correct : null;

    if (!correctAnswer) {
        console.error("Không tìm thấy đáp án đúng cho câu hỏi: " + qName);
        return;
    }

    // Xóa tất cả các highlight và icon phản hồi trước đó cho câu hỏi này
    labels.forEach(label => {
        label.classList.remove('correct', 'incorrect');
        const feedbackIcon = label.querySelector('.feedback-icon');
        if (feedbackIcon) {
            feedbackIcon.textContent = '';
        }
    });

    // Áp dụng highlight và icon phản hồi cho đáp án được chọn
    const selectedValue = radioElement.value;
    const parentLabel = radioElement.closest('label');
    const selectedFeedbackIcon = parentLabel.querySelector('.feedback-icon');

    if (selectedValue === correctAnswer) {
        parentLabel.classList.add('correct');
        if (selectedFeedbackIcon) {
            selectedFeedbackIcon.textContent = '✓';
        }
    } else {
        parentLabel.classList.add('incorrect');
        if (selectedFeedbackIcon) {
            selectedFeedbackIcon.textContent = '✗';
        }
        // Nếu chọn sai, highlight luôn đáp án đúng
        labels.forEach(label => {
            if (label.querySelector('input').value === correctAnswer) {
                label.classList.add('correct');
                const correctFeedbackIcon = label.querySelector('.feedback-icon');
                if (correctFeedbackIcon) {
                    correctFeedbackIcon.textContent = '✓';
                }
            }
        });
    }
}

// Hàm kiểm tra tất cả đáp án của bài hiện tại (khi nhấn nút "Xem kết quả cuối cùng")
function checkAllAnswers() {
    let score = 0;
    // Kiểm tra tất cả câu hỏi, không chỉ câu đang hiển thị
    // Để làm điều này, chúng ta cần lặp qua tất cả các câu hỏi trong `questionsData`
    // và kiểm tra trạng thái của input tương ứng
    const totalQuestions = questionsData.length;
    const quizResultDiv = document.getElementById('quizResult');

    questionsData.forEach(q => {
        const qName = `q${q.qNum}`;
        // Để lấy giá trị được chọn từ các câu hỏi không hiển thị,
        // cần truy cập trực tiếp vào form và element của nó
        const form = document.querySelector(`#quizForm-${q.qNum}`); // Mỗi câu hỏi giờ có form riêng
        if (!form) return; // Bỏ qua nếu form không tồn tại (nếu đang ở trang khác)

        const selectedInput = form.elements[qName];
        const selectedValue = selectedInput ? selectedInput.value : null;

        const questionBlockDiv = document.getElementById(qName); // Lấy div của câu hỏi đó
        const labels = questionBlockDiv.querySelectorAll('label');

        // Clear any existing highlights and feedback icons before final evaluation
        labels.forEach(label => {
            label.classList.remove('correct', 'incorrect');
            const feedbackIcon = label.querySelector('.feedback-icon');
            if (feedbackIcon) {
                feedbackIcon.textContent = '';
            }
        });

        if (selectedValue) {
            labels.forEach(label => {
                const feedbackIcon = label.querySelector('.feedback-icon');
                if (label.querySelector('input').value === selectedValue) {
                    if (selectedValue === q.correct) {
                        label.classList.add('correct');
                        if (feedbackIcon) feedbackIcon.textContent = '✓';
                        score++;
                    } else {
                        label.classList.add('incorrect');
                        if (feedbackIcon) feedbackIcon.textContent = '✗';
                        // Highlight the actual correct answer
                        labels.forEach(correctLabel => {
                            if (correctLabel.querySelector('input').value === q.correct) {
                                correctLabel.classList.add('correct');
                                const correctFeedbackIcon = correctLabel.querySelector('.feedback-icon');
                                if (correctFeedbackIcon) correctFeedbackIcon.textContent = '✓';
                            }
                        });
                    }
                }
            });
        } else { // Nếu không có đáp án nào được chọn
            // Chỉ highlight đáp án đúng
            labels.forEach(label => {
                if (label.querySelector('input').value === q.correct) {
                    label.classList.add('correct');
                    const feedbackIcon = label.querySelector('.feedback-icon');
                    if (feedbackIcon) {
                        feedbackIcon.textContent = '✓';
                    }
                }
            });
        }
    });

    quizResultDiv.style.display = 'block';
    quizResultDiv.innerHTML = `Bạn đã trả lời đúng ${score} / ${totalQuestions} câu.`;
}


// Chạy khi trang web được tải: render câu hỏi đầu tiên
document.addEventListener('DOMContentLoaded', () => {
    if (questionsData.length > 0) {
        renderQuestion(questionsData[currentQuestionIndex]);
        updateNavigationButtons();
    }
});