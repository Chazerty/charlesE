document.getElementById('loading').style.display = 'none';

document.getElementById('btn-x-quiz').addEventListener('click', function() {
    document.querySelectorAll('.radio-quiz').forEach(radio => {
        radio.checked = false;
        radio.classList.remove('radio-success', 'radio-error')
    })
})

document.getElementById('test-quiz').addEventListener('click', async function() {

    const bonnesReponses = ["b", "c", "a", "c", "a", "b"];
    let score = 0;
    for(let i=1; i<=6; i++) {
        const reponse = document.querySelector(`input[name="q${i}"]:checked`);
        if(reponse && reponse.value === bonnesReponses[i-1]) {
            score++;
        }
    };
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    await sleep(2000);
    document.getElementById('loading').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';

    if(score === bonnesReponses.length) {
        document.getElementById('btn-x-quiz').click();
        document.getElementById('contact').showModal();       
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
});

