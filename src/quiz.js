document.getElementById('loading').style.display = 'none';

document.getElementById('btn-x-quiz').addEventListener('click', function() {
    document.querySelectorAll('.radio-quiz').forEach(radio => {
        radio.checked = false;
        radio.classList.remove('radio-success', 'radio-error')
    })
})

function sleep(ms=2000) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

async function submit(ms = 1) {

    const bonnesReponses = ["2", "3", "1", "3", "1", "2"];
    let score = 0;
    for(let i=1; i<=6; i++) {
        const reponse = document.querySelector(`input[name="q${i}"]:checked`);
        if(reponse && reponse.value === bonnesReponses[i-1]) {
            score++;
        }
    };
    if(ms !== 0) {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('loading').style.display = 'block';
        await sleep();
        document.getElementById('loading').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
    }

    if(score === bonnesReponses.length) {
        document.getElementById('btn-x-quiz').click();
        document.getElementById('contact').showModal()
        return 1;       
    }
    else {
        document.querySelectorAll('.radio-quiz').forEach(radio => {
            radio.classList.remove('radio-success', 'radio-error');
            if (radio.checked) {
                if(radio.value === bonnesReponses[parseInt(radio.name.slice(1)) - 1]) {
                    radio.classList.add('radio-success');
                } 
                else {
                    radio.classList.add('radio-error');
            }}
        });
    }
};

async function bruteforce() {

    for(let i=1; i<=3; i++) {
        const selector = `input[name="q${1}"][value="${i}"]`;
        const radio = document.querySelector(selector);
        if(radio) {
            radio.checked = true;
        }
        for(let j=1; j<=3; j++) {
            const selector = `input[name="q${2}"][value="${j}"]`;
            const radio = document.querySelector(selector);
            if(radio) {
            radio.checked =
            true;
            }
            for(let k=1; k<=3; k++) {
                const selector = `input[name="q${3}"][value="${k}"]`;
                const radio = document.querySelector(selector);
                if(radio) {
                radio.checked = true;
                }
                for(let l=1; l<=3; l++) {
                    const selector = `input[name="q${4}"][value="${l}"]`;
                    const radio = document.querySelector(selector);
                    if(radio) {
                    radio.checked = true;
                    }
                    for(let m=1; m<=3; m++) {
                        const selector = `input[name="q${5}"][value="${m}"]`;
                        const radio = document.querySelector(selector);
                        if(radio) {
                        radio.checked = true;
                        }
                        for(let n=1; n<=3; n++) {
                            const selector = `input[name="q${6}"][value="${n}"]`;
                            const radio = document.querySelector(selector);
                            if(radio) {
                            radio.checked = true;
                            }
                            await sleep(1);
                            rep = await submit(0);
                            if(rep === 1) {
                                return;                         
                            }
                        }
                    }
                }
            }
        }
    }
};
