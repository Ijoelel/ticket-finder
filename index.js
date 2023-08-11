const kupon = [
    3451, 2345, 1234, 5242, 1231, 4564, 23563, 2346, 7956, 3673, 5673, 2387,
];
const input = document.querySelector("input");
const wrapper = document.querySelector('.wrapper')
const message = document.createElement("h2")

const findHandler = () => {
    const enteredValue = input.valueAsNumber;
    const existsInKupon = kupon.includes(enteredValue);
    if (existsInKupon) {
        message.innerHTML = 'Kode Ditemukan'
    } else {
        message.innerHTML = 'Kode Tidak Ditemukan'
    }
    
    wrapper.appendChild(message)
};



