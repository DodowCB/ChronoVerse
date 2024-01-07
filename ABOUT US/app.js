// HEADER
// Bars button pop up
const barsBtn = document.querySelector('.bars_btn');
const barsBtnImg = document.querySelector('.bars_btn img');
const dropDownMenu = document.querySelector('.dropdown_menu');

barsBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
}


// List Question
const listQuestion = [
    {
        word: "STARBUCKS",
        wordHint: "What is my favorite coffee? This coffee brand is famous"
    },
    {
        word: "SPYXFAMILY",
        wordHint: "This one is very easy. This manga tells the story of a spy who disguises himself as the father of a cute little girl."
    },
    {
        word: "DEMONSLAYER",
        wordHint: "This manga is the first manga I read. The story of a boy who eradicated demons after his family was massacred by demons and his younger sister was turned into a demon."
    },
    {
        word: "OSHINOKO",
        wordHint: "The only manga in the drama genre on this website."
    },
    {
        word: "ONEPIECE",
        wordHint: "Manga whose story doesn't end."
    },
    {
        word: "DODOW",
        wordHint: "What is my nickname?"
    },
    {
        word: "DRSTONE",
        wordHint: "My manga title is Doctor."
    },
    {
        word: "LOVE",
        wordHint: "What is a difficult language? hehe :)"
    },
    {
        word: "VBSCRIPT",
        wordHint: "Programming language."
    },
    {
        word: "NISEKOI",
        wordHint: "Synopsis: Raku Ichijou, heir to a yakuza family, seeks a normal life. Forced into a fake romance with Chitoge Kirisaki."
    },
    {
        word: "BERSERK",
        wordHint: "One of the most epic manga on this site. This manga genre is also horror."
    },
    {
        word: "BLEACH",
        wordHint: "This manga is on this website. consists of 705 chapters and is the manga with the most chapters on this website."
    },
    {
        word: "YESS",
        wordHint: "Do you love me? I mean this website. :)"
    }
];
//end


// Read keyboard buttons
const buttons = document.querySelectorAll('.btn');
let klikAbjad;

// for each btn, i put event listener.. if one of the btn clicked, disimpan di var klikAbjad
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        klikAbjad = btn.innerText;
        // cek in console
        console.log(klikAbjad);

        // go check the answer
        checkAbjadWord(klikAbjad, btn);
    })
})
//end


// deklarasi var
const perWord = document.querySelector('.per-word');
const showIncorrect = document.querySelector('.incorrect-word b');
const hangmanImg = document.querySelector('.img-hangman');
const gamePopUp = document.querySelector('.game-pop-up');

let guessedWord;
let sumIncorrect = 0;
let sumCorrect = 0;
const maxIncorrect = 6;


// PLAY AGAIN
function hidePopUp() {
    let popUpDel = document.querySelector('.game-pop-up');

    // if the btn play again or take the price clicked, hide the pop-up again and reload the page to reload the game too.
    popUpDel.classList.remove('flex');
    popUpDel.classList.add('hidden');

    location.reload();

    getRandomQuestion();
}


// Get one random question
const getRandomQuestion = () => {
    // get from listQuestion with randomize.
    const {word, wordHint} = listQuestion[Math.floor(Math.random() * listQuestion.length)];
    // Cek in console
    console.log(word, wordHint);

    guessedWord = word;

    // For hint question
    document.querySelector('.word-hint b'). innerText = wordHint;

    // For Word. jadi intinya word di split per karakternya ke dalam array. terus map digunakan untuk membuat fungsi dengan array baru. terus array digabungkan dengan join.
    perWord.innerHTML = word.split("").map(() => `<li class="abjad w-7 border-b-[3px] border-white text-center"></li>`).join("");
}

getRandomQuestion();
// end


// Check Game
function checkAbjadWord(klikAbjad, btn) {
    // Cek kalo ada abjad di dalam kata
    if (guessedWord.includes(klikAbjad)) {
        // cek in console
        console.log(klikAbjad, "ada di dalam kata -> ", guessedWord);

        // memunculkan abjad yang terjawab benar. kalo dari kata yang harus ditebak ada karakter yang benar ...
        [...guessedWord].forEach((abjad, index) => {
            if (abjad === klikAbjad) {
                sumCorrect++;
                console.log("sum correct: " , sumCorrect);

                // ... maka posisi indexnya diisi dengan kata tadi. terus dihapus garis bawahnya
                perWord.querySelectorAll('li')[index].innerText = abjad;
                perWord.querySelectorAll('li')[index].classList.add('terjawab');
            }
        })
    } else {
        // cek in console
        console.log(klikAbjad, "tidak ada di dalam kata");

        // increment incorrect guesses
        sumIncorrect++;
        console.log("yang salah", sumIncorrect);

        // switch hangman image
        hangmanImg.src = `../aset/hangman/hangman-${sumIncorrect}.png`;
    }

    // show incorrect
    showIncorrect.innerText = `${maxIncorrect - sumIncorrect}`;

    // disabled btn
    btn.disabled = true;

    // game is over if live is 0 or ...
    if (sumIncorrect === maxIncorrect) {
        return results(false);
    }

    // ... all char is answered
    if (sumCorrect === guessedWord.length) {
        return results(true);
    }
}
//end


// IF ELSE GAME IS OVER
const results = (win) => {
    setTimeout(() => {
        // if win true or false, the img and the msg ...
        gamePopUp.querySelector('img').src = `../aset/hangman/${win ? 'win' : 'lost'}.gif`;
        gamePopUp.querySelector('p').innerText = `${win ? 'Congrats You Win!' : 'Game Over!'}`;

        const colorTextPopUp = document.querySelector('.content p');
        const viewWinBtn = document.querySelector('.link-to-win');

        // if win, view the take the prize btn and text blue. if lost, text red
        if (win) {
            colorTextPopUp.classList.add('text-blue-500');

            viewWinBtn.classList.remove('hidden');
            viewWinBtn.classList.add('block');
        } else {
            colorTextPopUp.classList.add('text-red-500');
        }

        // pop-up show up
        gamePopUp.classList.remove('hidden');
        gamePopUp.classList.add('flex');
    }, 400);
}

// BIODATA IMG AUTO NEXT (sama kayak carousel di home page. ku copas)
let items = document.querySelectorAll('.list .item');
let next = document.getElementById('next');

// panjang
let countItem = items.length;
let itemActive = 0;

// next button for auto run
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

//auto run slider delay 3s
let refreshInterval = setInterval(() => {
    next.click();
}, 6200)

function showSlider(){
    let itemActiveOld = document.querySelector('.list .item.active');

    //remove
    itemActiveOld.classList.remove('active');

    //active
    items[itemActive].classList.add('active');

    //reset timer auto run
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 6200)
}