const calculateForm = document.getElementById('calculate-form');
const calculateKg = document.getElementById('calculate-kg');
const calculateCm = document.getElementById('calculate-cm');
const calculateId = document.getElementById('calculate-id');
const calculateMessage = document.getElementById('calculate-message');


const calculateBasal = (e) => {
    e.preventDefault();

    if(calculateKg.value === '' || calculateCm === '' || calculateId === '') {
        calculateMessage.classList.remove('green-color');
        calculateMessage.classList.add('red-color');

        calculateMessage.textContent = 'Enter a valid value';

        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000)
    } else {

        kg = calculateKg.value * 13.8;
        cm = (calculateCm.value / 100) * 5;
        id = calculateId.value * 6.5;
        tmb = 66 + kg + cm - id;

        calculateMessage.textContent = `Your basal is ${tmb}.`

        calculateKg.value = '';
        calculateCm.value = '';
        calculateId.value = '';

        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 4000)
    }


}

calculateForm.addEventListener('submit', calculateBasal);

const calculateForm2 = document.getElementById('calculate-form-2');
const calculateKg2 = document.getElementById('calculate-kg-2');
const calculateCm2 = document.getElementById('calculate-cm-2');
const calculateId2 = document.getElementById('calculate-id-2');
const calculateMessage2 = document.getElementById('calculate-message-2');

const calculateBasal2 = (e) => {
    e.preventDefault();

    if(calculateKg2.value === '' || calculateCm2.value === '' || calculateId2.value === '') {

        calculateMessage2.classList.remove('green-color');
        calculateMessage2.classList.add('red-color');

        calculateMessage2.textContent = 'Enter a valid value';

        setTimeout(() => {
            calculateMessage2.textContent = '';
        }, 3000)
    } else {
        kg2 = calculateKg2.value * 9.6;
        cm2 = (calculateCm2.value / 100) * 1.8;
        id2 = calculateId2.value * 4.7;
        tmb2 = 655 + kg2 + cm2 - id2;

        calculateMessage2.textContent = `Your Basal is ${tmb2}`;

        calculateKg2.value = '';
        calculateCm2.value = '';
        calculateId2.value = '';

        setTimeout(() => {
            calculateMessage2.textContent = ''
        }, 4000)
    }
}

calculateForm2.addEventListener('submit', calculateBasal2)

const buttonMas = document.getElementById('button-mas');
const container = document.getElementById('container-options')
const buttonFem = document.getElementById('button-fem');
const masContent = document.getElementById('masculino');
const femContent = document.getElementById('feminino');

buttonMas.addEventListener('click', () => {
    container.classList.add('active');
})

buttonFem.addEventListener('click', () => {
    container.classList.add('active-2');
})