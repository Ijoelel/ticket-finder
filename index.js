const kupon = [
	001052, 001051, 001050, 001049, 001048, 001196, 001197, 001198, 001199,
	001200, 001179, 001178, 001177, 001176, 001175, 001081, 001082, 001083,
	001084, 001085, 001120, 001121, 001122, 001123, 001124, 001125, 001126,
	001127, 001128, 001129,
];
const input = document.querySelector("input");
const wrapper = document.querySelector(".wrapper");
const message = document.createElement("h2");

const findHandler = () => {
	const enteredValue = input.valueAsNumber;
	const existsInKupon = kupon.includes(enteredValue);
	if (existsInKupon) {
		message.innerHTML = "Kode Ditemukan";
        console.log(kupon.length)
	} else {
		message.innerHTML = "Kode Tidak Ditemukan";
	}

	wrapper.appendChild(message);
};
