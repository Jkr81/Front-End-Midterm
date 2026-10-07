
history.scrollRestoration = "manual";

window.onload = function () {
    window.scrollTo(0, 0);
};


// STORY

let image = document.getElementById("storyImage");
let locationText = document.getElementById("location");
let speaker = document.getElementById("speaker");
let storyLine = document.getElementById("storyLine");

let previous = document.getElementById("previous");
let next = document.getElementById("next");

let current = -1;


let story = [

    ["ACTION",
    "BENJI sits in his bedroom at his desk with a COMPUTER and a KEY, planning his day as Rockwell's \"Somebody's Watching Me\" plays softly in the background. His roommate, STERLING, walks into the room wearing a black hoodie.",
    "images/bedroom.jpg"],

    ["STERLING",
    "Yo Benji, happy birthday. What you got planned today?",
    "images/bedroom.jpg"],

    ["ACTION",
    "Benji doesn't answer immediately as he is focused on the calendar that he has pulled up on his COMPUTER.",
    "images/calendar.jpg"],

    ["BENJI",
    "Hey man, sorry, thank you. My week's kind of crazy. Im just trying to get ahead of it.",
    "images/calendar.jpg"],

    ["ACTION",
    "Sterling walks over to Benji's leaning over to take a look at the computer. The calendar for Benji's week is crammed with random activities and to-dos for every day of the week.",
    "images/calendar.jpg"],

    ["STERLING",
    "You really do have a lot going on this week.",
    "images/calendar.jpg"],

    ["ACTION",
    "Sterling notices a recurring event on the calendar titled 3 Minute bathroom break.",
    "images/calendar.jpg"],

    ["STERLING",
    "Don't you think planning out when you have to go to the bathroom is a bit much?",
    "images/calendar.jpg"],

    ["BENJI",
    "No, I don't.",
    "images/calendar.jpg"],

    ["STERLING",
    "Ok, well, do you have time in your schedule for us to go golfing around 4 today?",
    "images/calendar.jpg"],

    ["ACTION",
    "Benji looks at his calendar and says that he will be studying from 4-9.",
    "images/calendar.jpg"],

    ["BENJI",
    "Sorry, I can't. I'm going to be studying then. But maybe sometime next week.",
    "images/calendar.jpg"],

    ["STERLING",
    "Studying on your birthday. That's not how I would spend my day, but you do you, man. When will you be back?",
    "images/bedroom.jpg"],

    ["BENJI",
    "Around 9, I think.",
    "images/bedroom.jpg"],

    ["ACTION",
    "An ALARM on Benji's phone goes off that reads bathroom break 1.",
    "images/alarm.jpg"],

    ["ACTION",
    "Benji gets up and walks into the bathroom. Sterling looks over Benji's calendar one more time while pulling out his PHONE and sending a text.",
    "images/calendar.jpg"],

    ["ACTION",
    "Benji comes out of the bathroom.",
    "images/bedroom.jpg"],

    ["STERLING",
    "You leaving?",
    "images/bedroom.jpg"],

    ["BENJI",
    "Yeah, I'm off but I'll be back later today.",
    "images/bedroom.jpg"],

    ["ACTION",
    "Benji walks out of the dorm/apartment, leaving his key on his desk.",
    "images/key.jpg"],

    ["ACTION",
    "Benji sits at a study room desk with a computer, notebook, and pencil in front of him. He picks up his phone, and it reads 8:15.",
    "images/study.jpg"],

    ["BENJI",
    "Looks like I might finish up early.",
    "images/study.jpg"],

    ["ACTION",
    "Benji sends a text to Sterling telling him that he will be back earlier than expected. His phone starts to ring, and the screen says UNKNOWN CALLER. Benji picks up the phone.",
    "images/phone.jpg"]

];


function showStory() {

    speaker.innerHTML = story[current][0];
    storyLine.innerHTML = story[current][1];
    image.src = story[current][2];

    if (current >= 20) {
        locationText.innerHTML = "INT. STUDY ROOM - NIGHT";
    } else {
        locationText.innerHTML = "INT. APARTMENT/DORM - MORNING";
    }

    previous.disabled = current <= 0;
}


function nextStory() {

    if (current < story.length - 1) {

        current++;
        showStory();

    } else {

        next.style.display = "none";
        previous.style.display = "none";

        document.getElementById("call").style.display = "block";

        document.getElementById("call").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


function previousStory() {

    if (current > 0) {
        current--;
        showStory();
    }
}


next.addEventListener("click", nextStory);
previous.addEventListener("click", previousStory);


// PHONE CALL

let callSpeaker = document.getElementById("callSpeaker");
let callText = document.getElementById("callText");

let answer = document.getElementById("answer");
let callPrevious = document.getElementById("callPrevious");
let callNext = document.getElementById("callNext");

let callNumber = 0;


let call = [

    ["BENJI", "Hello?"],

    ["ACTION",
    "The Unknown Caller is completely silent and ignores Benji. The Unknown Caller then starts breathing heavily."],

    ["UNKOWN CALLER",
    "Hello Benji."],

    ["BENJI",
    "Who is this?"],

    ["ACTION",
    "The Unknown Callers' voice is deep and sounds maniacal."],

    ["UNKNOWN CALLER",
    "Just your biggest fan. I wanted to call and wish you a happy birthday. (laughs)"],

    ["BENJI",
    "Um, thank you? This is weird, so I think I'm going to hang up now."],

    ["UNKNOWN CALLER",
    "Wait, don't..."],

    ["ACTION",
    "Benji hangs up the phone, not taking the call very seriously. The phone rings again with Unknown Caller written on the screen."],

    ["BENJI",
    "Hello?"],

    ["UNKNOWN CALLER",
    "Hi Benji, I was not done talking to you."],

    ["BENJI",
    "Ok man, what do you want?"],

    ["UNKNOWN CALLER",
    "I wanted to ask you what your favorite scary movie?"],

    ["BENJI",
    "If you're genuinely asking, I would have to say I don't know. But scream definitely ranks pretty low on that list."],

    ["ACTION",
    "Benji starts to laugh now, thinking that the whole thing is a prank."],

    ["BENJI",
    "Oh, I get it now, you have an unknown caller ID and a deep voice. Whoever this is, you need to knock it off. Alright, prank over. It isn't funny anymore."],

    ["UNKNOWN CALLER",
    "If I'm pulling a prank, then how do I know what you had and where you went for lunch today?"],

    ["ACTION",
    "Benji gets an alert on his computer. It is an air-dropped picture of him eating lunch earlier that day."],

    ["BENJI",
    "Who are you and when did you take that? (Freigtehned)"],

    ["ACTION",
    "Benji drops his phone and picks up his pencil to use it as a weapon."],

    ["BENJI",
    "If you're trying to hurt me, you should know I boxed for 5 years, and my mom's an FBI agent, so she will find you."],

    ["UNKNOWN CALLER",
    "Then why are you shaking? I can see your hands."],

    ["UNKNOWN CALLER",
    "And your mom, April, works at the bakery on Waller Street. She closes at 8, right?"],

    ["ACTION",
    "The Unknown Caller ends the call. Benji frantically stands up and grabs his phone. The door of the study room starts to jiggle."],

    ["ACTION",
    "Benji makes his way towards the door, and just as he is about to open it, his computer starts to ring."],

    ["ACTION",
    "It is a video call, and the screen name reads Unknown Caller. Benji walks back to the computer and answers the call."],

    ["UNKNOWN CALLER",
    "Benji, do you want to play a game?"],

    ["ACTION",
    "The screen is dark but you can see a figure in a black hoodie with no face."],

    ["UNKNOWN CALLER",
    "How about hide and seek? If I were you, I would start running."]

];


function showCall() {

    callSpeaker.innerHTML = call[callNumber][0];
    callText.innerHTML = call[callNumber][1];

    callPrevious.disabled = callNumber === 0;
}


answer.addEventListener("click", function () {

    document.getElementById("callStatus").innerHTML =
        "CALL CONNECTED";

    callNumber = 0;
    showCall();

    answer.style.display = "none";

    callPrevious.style.display = "inline-block";
    callNext.style.display = "inline-block";
});


callNext.addEventListener("click", function () {

    if (callNumber < call.length - 1) {

        callNumber++;
        showCall();

    } else {

        document.getElementById("call").style.display = "none";

        startHallway();
    }
});


callPrevious.addEventListener("click", function () {

    if (callNumber > 0) {
        callNumber--;
        showCall();
    }
});


// HALLWAY

let hallwayNumber = 0;


let hallway = [

    ["ACTION",
    "The call ends, and Benji frantically packs up all of his things, leaving the study room."],

    ["ACTION",
    "Benji knocks on his apartment door, but there is no response. He pulls out his phone and calls Sterling."],

    ["BENJI",
    "Hey, I need you to open the apartment door. I left my key inside, and I'm 100 percent sure someone is trying to kill me."],

    ["V.O (STERLING)",
    "Dude, I'm not there right now. I'm out getting food with some friends. Wait, I gotta go."],

    ["ACTION",
    "Suddenly, the apartment door opens from the inside. There are no lights on. Benji slowly walks inside."]

];


function showHallway() {

    speaker.innerHTML = hallway[hallwayNumber][0];
    storyLine.innerHTML = hallway[hallwayNumber][1];

    previous.disabled = hallwayNumber === 0;
}


function startHallway() {

    hallwayNumber = 0;

    locationText.innerHTML =
        "INT. APARTMENT/DORM HALLWAY - NIGHT";

    image.src = "images/hallway.jpg";

    next.style.display = "inline-block";
    previous.style.display = "inline-block";

    next.innerHTML = "NEXT";

    next.removeEventListener("click", nextStory);
    previous.removeEventListener("click", previousStory);

    next.addEventListener("click", nextHallway);
    previous.addEventListener("click", previousHallway);

    showHallway();

    document.getElementById("story").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function nextHallway() {

    if (hallwayNumber < hallway.length - 1) {

        hallwayNumber++;
        showHallway();

    } else {

        next.style.display = "none";
        previous.style.display = "none";

        document.getElementById("surprise").style.display =
            "block";

        document.getElementById("surprise").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


function previousHallway() {

    if (hallwayNumber > 0) {
        hallwayNumber--;
        showHallway();
    }
}


// SURPRISE

let surpriseNumber = 0;

let surprisePrevious =
    document.getElementById("surprisePrevious");

let surpriseNext =
    document.getElementById("surpriseNext");


let surprise = [

    ["STERLING AND FRIENDS",
    "Surprise!!"],

    ["ACTION",
    "Benji Screams."],

    ["BENJI",
    "WHAT THE HELL, GUYS."],

    ["STERLING",
    "It's your surprise birthday party. So what do you think?"],

    ["ACTION",
    "Benji notices the black hoodie that Sterling is wearing."],

    ["BENJI",
    "That was you?"],

    ["BENJI",
    "You scared the shit out of me. I thought I was going to die."],

    ["STERLING",
    "You weren't supposed to come back early. (half-smiling)"],

    ["ACTION",
    "Benji sighs and grabs a party hat."],

    ["BENJI",
    "Thank you, but never do that again."]

];


function showSurprise() {

    document.getElementById("surpriseSpeaker").innerHTML =
        surprise[surpriseNumber][0];

    document.getElementById("surpriseText").innerHTML =
        surprise[surpriseNumber][1];

    surprisePrevious.disabled = surpriseNumber === 0;
}


surpriseNext.addEventListener("click", function () {

    if (surpriseNumber < surprise.length - 1) {

        surpriseNumber++;
        showSurprise();

    } else {

        surpriseNext.style.display = "none";
        surprisePrevious.style.display = "none";

        document.getElementById("ending").style.display =
            "block";

        document.getElementById("ending").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
});


surprisePrevious.addEventListener("click", function () {

    if (surpriseNumber > 0) {
        surpriseNumber--;
        showSurprise();
    }
});


// END STORY

document.getElementById("endButton")
.addEventListener("click", function () {

    document.getElementById("finalScreen").style.display =
        "block";

    document.getElementById("evidence").style.display =
        "block";

    document.getElementById("finalScreen").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});


// RESTART STORY

document.getElementById("restart")
.addEventListener("click", function () {

    current = 0;
    callNumber = 0;
    hallwayNumber = 0;
    surpriseNumber = 0;

    document.getElementById("call").style.display = "none";
    document.getElementById("surprise").style.display = "none";
    document.getElementById("ending").style.display = "none";
    document.getElementById("finalScreen").style.display = "none";
    document.getElementById("evidence").style.display = "none";

    next.removeEventListener("click", nextHallway);
    previous.removeEventListener("click", previousHallway);

    next.addEventListener("click", nextStory);
    previous.addEventListener("click", previousStory);

    next.style.display = "inline-block";
    previous.style.display = "inline-block";

    surpriseNext.style.display = "inline-block";
    surprisePrevious.style.display = "inline-block";

    answer.style.display = "inline-block";
    callNext.style.display = "none";
    callPrevious.style.display = "none";

    document.getElementById("callStatus").innerHTML =
        "INCOMING CALL...";

    callSpeaker.innerHTML = "PHONE";
    callText.innerHTML = "...";

    locationText.innerHTML =
        "INT. APARTMENT/DORM - MORNING";

    showStory();
    showSurprise();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});