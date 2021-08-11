quizQues=[
    {
        Ques: "How many time zones are there in Russia?",
        a: "12",
        b: "11",
        c:"13",
        d:"14",
        correct:"b"
    },
    {
        Ques: "How many stripes are there on the US flag?",
        a: "12",
        b: "11",
        c:"13",
        d:"14",
        correct:"c"
    },
    {
        Ques: "What city do The Beatles come from?",
        a: "Los Angeles",
        b: "Liverpool",
        c:"Michelangelo",
        d:"India",
        correct:"b"
    },
    {
        Ques: "What is the all-time most-streamed song on Spotify to date",
        a: "I Don't Care",
        b: "Peaches",
        c:"Levitating",
        d:"The Shape of You",
        correct:"d"
    },
    {
        Ques: "How many days does it take for the Earth to orbit the Sun?",
        a: "355",
        b: "365",
        c:"370",
        d:"360",
        correct:"b"
    }
]
const quesEl=document.getElementById('question');
const aEl=document.getElementById('aa');
const bEl=document.getElementById('bb');
const cEl=document.getElementById('cc');
const dEl=document.getElementById('dd');
const submitEl=document.getElementById('submit');
let count=0;
let score=0;
quiz();
function quiz(){
    quesEl.innerHTML=quizQues[count].Ques;
    aEl.innerHTML=quizQues[count].a;
    bEl.innerHTML=quizQues[count].b;
    cEl.innerHTML=quizQues[count].c;
    dEl.innerHTML=quizQues[count].d;
}
function displayRadioValue() {
    var ele = document.getElementsByName('answers');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        if (ele[i].id===quizQues[count].correct){
            score++;
            document.getElementById("result").innerHTML
                    = "score: "+score;
            }
    
}

}
submitEl.addEventListener("click",()=>{
    count++;
    if (count<quizQues.length){
        quiz();
    }
    else {
        alert("QUIZ OVER!!!!!!!")
    }

});