
let quiz =
[
    {
        question: "What is the full form of html.",
        a: "Hyper Text Mark Lang",
        b: "Hyper Text Mark Launguage",
        c: "Hyper Text Markup Launguage",
        d: "Hyper Text Mackup Launguage",
        correct: "c"
         
    },
    {
        question: "Identify the range of byte data types in JavaScript.",
        a: "-10 to 9",
        b: "- 128 to 127",
        c: "-32768 to 32744",
        d: "-6355440837 to 6355440837",
        correct:"b"
    },
    {
        question: "What is the full form of css.",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheet",
        c: "Cascading Styles Sheets",
        d: "Cascadings Style Sheets",
        correct:"a"
    },
    {
        question: "Which is the Right Way to right HTML Code.",
        a: "<head><body><html>",
        b: "<head><html><body>", 
        c: "<html><body><head>",
        d: "<html><head><body>",
        correct:"d"
    },
    {
        question: "Identify the incorrect HTML tag among the following",
        a: "<input>",
        b: "<select>",
        c: "<list>",
        d: "<textarea>",
        correct: "c"
    },
    {
        question: "Full form of W3C is",
        a: "World Wide Websites community",
        b: "World Wide Web community",
        c: "World Wide Websites consortium",
        d: "World Wide Web consortium",
        correct: "d"
    },
    {
        question: "Which is the CSS Attribute?",
        a: "<meta>",
        b: "padding:",
        c: "<margin:>",
        d: "<p>",
        correct: "b"
    },
    {
        question: "Which of the following attribute is used for merging two or more adjacent columns?",
        a: "ROWSPAN",
        b: "CELLSPACING",
        c: "COLSPAN",
        d: "CELLPADDING",
        correct: "c"
    },
    {
        question: "Which of the following is used to transmit information on the world wide web?",
        a: "HPPT",
        b: "HTTP",
        c: "HITTP",
        d: "HTTPS",
        correct: "b"
    },
    {
        question: "A website is a ___   cookie.",
        a: "volatile",
        b: "transient",
        c: "in transient",
        d: "non-volatile",
        correct: "b"
    }
];
let index = 0;
let quenm = document.getElementById("quenm");
let radio = document.querySelectorAll("input[type='radio']")

let tt = quiz.length;
let c = 0;
let w = 0; 
function Question()
{
    let num = document.getElementById("num");
let t = document.getElementById("total");
    let data = quiz[index];
    if(tt === index)
    {
       return end();
    }
    reset();
    console.log("hii");
    num.innerText = index+1;
    t.innerText = tt;
    quenm.innerHTML = `${index + 1} ${data.question}`;
    radio[0].nextElementSibling.innerText = data.a;
    radio[1].nextElementSibling.innerText = data.b;
    radio[2].nextElementSibling.innerText = data.c;
    radio[3].nextElementSibling.innerText = data.d;
}
function end()
{
    let con = document.getElementsByClassName("container")[0];
    con.innerHTML = `
    <div class="c1">
        <h1>${c} Right From ${tt}</h1>
    </div>
    `;
}
function reset()
{
    radio.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
function Sub()
{
    let data = quiz[index];
    let a = ans();
    if( a === data.correct)
    {
        c++;
    }
    else
    {
        w++;
    }
    index++;
    Question();
}
function ans()
{
    let a;
    radio.forEach(
        (input) =>
        {
            if(input.checked)
            {
                a = input.value;
            }
        }
    )
    return a;
}
function It()
{
    let show = document.getElementById("show");
    let hide = document.getElementById("section");
    let sub = document.getElementById("submit");
    sub.style.display = "block";
    show.style.display = "block";
    hide.style.display = "none";
    Question();
    Question(index);
}

//cricket

let quiz1 =
[
    {
        question: "When India Was Won First World Cup Title?",
        a: "1983",
        b: "1999",
        c: "1994",
        d: "1947",
        correct: "a"
    },
    {
        question: "Which Indian cricketer is also known as the 'God of Cricket'? ",
        a: "MS Dhoni",
        b: "Sunil Gavaskar",
        c: "Virat Kohli",
        d: "Sachin Tendulkar",
        correct: "d"
    },
    {
        question: "What is the moniker given to the Indian cricket team?",
        a: "Men in Blue",
        b: "The Team of Lions",
        c: "The Indian Army",
        d: "Men in Orange",
        correct: "a"
    },
    {
        question: "Who was the first Indian batsman to hit a centuryin a Test match?",
        a: "Lala Amarnath Bharadwaj",
        b: "Kapil Dev",
        c: "Sunil Gavaskar",
        d: "Vijay Hazare",
        correct: "a"
    },
    {
        question: "When did India play its first Test match?",
        a: "1931",
        b: "1930",
        c: "1932",
        d: "1929",
        correct: "c"
    },
    {
        question: "There is Howmany umpires in Cricket Match?",
        a: "5",
        b: "6",
        c: "4",
        d: "8",
        correct: "c"
    },
    {
        question: "Who was the Current Last Captain of the Indian National Men's Cricket Team?",
        a: "Rohit Sharma",
        b: "MS Dhoni",
        c: "Virat Kohli",
        d: "Roger Binny",
        correct: "c"
    },
    {
        question: "Sachin Tendulkar scored world's first 200 runs in ODI of __ balls.",
        a: "147",
        b: "150",
        c: "187",
        d: "97",
        correct: "a"
    },
    {
        question: "Where is the sports stadium, ‘Green Park’ located?",
        a: "Kanpur",
        b: "Jamshedpur",
        c: "Cutlack",
        d: "Patiala",
        correct: "a"
    },
    {
        question: "How many overs are played in FIfty -  50 cricket match?",
        a: "60",
        b: "20",
        c: "100",
        d: "50",
        correct: "d"
    }
    
];
let total1 = quiz1.length;

let correct = 0;
let wrong = 0; 
let index1 = 0;
function Cricket()
{
    let show = document.getElementById("show");
    let hide = document.getElementById("section");
    let sub = document.getElementById("submit1");
    sub.style.display = "block";
    show.style.display = "block";
    hide.style.display = "none";
    Question1();
    Question1(index1);
}
function Question1()
{
    let num1 = document.getElementById("num");
    let t1 = document.getElementById("total");
    let data = quiz1[index1];
    if(total1 === index1)
    {
       return end1();
    }
    reset1();
    console.log("hii1");
    num1.innerText = index1+1;
    t1.innerText = total1;
    quenm.innerHTML = `${index1 + 1} ${data.question}`;
    radio[0].nextElementSibling.innerText = data.a;
    radio[1].nextElementSibling.innerText = data.b;
    radio[2].nextElementSibling.innerText = data.c;
    radio[3].nextElementSibling.innerText = data.d;
}
function end1()
{
    let con = document.getElementsByClassName("container")[0];
    con.innerHTML = `
    <div class="c1">
        <h1>${correct} Right From ${total1}</h1>
    </div>
    `;
}
function reset1()
{
    radio.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
function Sub1()
{
    let data = quiz1[index1];
    let b = ans1();
    if( b === data.correct)
    {
        correct++;
    }
    else
    {
        wrong++;
    }
    index1++;
    Question1();
}
function ans1()
{
    let b;
    radio.forEach(
        (input) =>
        {
            if(input.checked)
            {
                b = input.value;
            }
        }
    )
    return b;
}

//Gk
let quiz2 =
[
    {
        question: "MS-Word is an example of ___",
        a: "An operating system",
        b: " A processing device",
        c: "Application software",
        d: "An input device",
        correct: "c"
    },
    {
        question: "National Income estimates in India are prepared by",
        a: "Planning Commission",
        b: "Reserve Bank of India",
        c: "Central statistical",
        d: "Indian statistical Institute",
        correct: "c"
    },
    {
        question: "The staple food of the Vedic Aryan was",
        a: "Barley and rice",
        b: "Milk and its products",
        c: "Rice and pulses",
        d: "Vegetables and fruits",
        correct: "b"
    },
    {
        question: "The tropic of cancer does not pass through which of these Indian states ?",
        a: "Madhya Pradesh",
        b: "West Bengal",
        c: "Rajasthan",
        d: "Odisha",
        correct: "d"
    },
    {
        question: "Fathometer is used to measure",
        a: "Earthquakes",
        b: " Rainfall",
        c: "Ocean depth",
        d: "Sound intensity",
        correct: "c"
    },
    {
        question: "The purest form of iron is ",
        a: "wrought iron",
        b: "steel",
        c: "pig iron",
        d: "nickel steel",
        correct: "a"
    },
    {
        question: "The working principle of a washing machine is",
        a: "reverse osmosis",
        b: "diffusion",
        c: "centrifugation",
        d: "dialysis",
        correct: "c"
    },
    {
        question: "Who is the author of the book 'Freedom Behind Bars '",
        a: "Kiran Bedi",
        b: "Jawaharlal Nehru",
        c: "Nelson Mandela",
        d: "Sheikh Abdullah",
        correct: "a"
    },
    {
        question: "Which river of India is called Vridha Ganga?",
        a: "Krishna",
        b: "Godavari",
        c: "Kaveri",
        d: "Narmada",
        correct: "b"
    },
    {
        question: "Which latitude passes through the middle of India?",
        a: "Equator",
        b: "Arctic Circle",
        c: "Tropic of Capricorn",
        d: "Tropic of Cancer",
        correct: "d"
    } 
    
];
let total2 = quiz2.length;

let correct1 = 0;
let wrong1 = 0; 
let index2 = 0;
function Gk()
{
    let show = document.getElementById("show");
    let hide = document.getElementById("section");
    let sub = document.getElementById("submit2");
    sub.style.display = "block";
    show.style.display = "block";
    hide.style.display = "none";
    Question2();
    Question2(index2);
}
function Question2()
{
    let num2 = document.getElementById("num");
    let t2 = document.getElementById("total");
    let data = quiz2[index2];
    if(total2 === index2)
    {
       return end2();
    }
    reset2();
    console.log("hii1");
    num2.innerText = index2+1;
    t2.innerText = total2;
    quenm.innerHTML = `${index2 + 1} ${data.question}`;
    radio[0].nextElementSibling.innerText = data.a;
    radio[1].nextElementSibling.innerText = data.b;
    radio[2].nextElementSibling.innerText = data.c;
    radio[3].nextElementSibling.innerText = data.d;
}
function end2()
{
    let con = document.getElementsByClassName("container")[0];
    con.innerHTML = `
    <div class="c1">
        <h1>${correct1} Right From ${total2}</h1>
    </div>
    `;
}
function reset2()
{
    radio.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
function Sub2()
{
    let data = quiz2[index2];
    let c = ans2();
    if( c === data.correct)
    {
        correct1++;
    }
    else
    {
        wrong1++;
    }
    index2++;
    Question2();
}
function ans2()
{
    let c;
    radio.forEach(
        (input) =>
        {
            if(input.checked)
            {
                c = input.value;
            }
        }
    )
    return c;
}