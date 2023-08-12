const kupon = [
	1052, 1051, 1050, 1049, 1048, 1196, 1197, 1198, 1199, 1200, 1179, 1178,
	1177, 1176, 1175, 1081, 1082, 1083, 1084, 1085, 1120, 1121, 1122, 1123,
	1124, 1125, 1126, 1127, 1128, 1129,
];
const input = document.querySelector("input");
const wrapper = document.querySelector(".wrapper");
const message = document.createElement("h2");

const findHandler = () => {
	const enteredValue = input.valueAsNumber;
	const existsInKupon = kupon.includes(enteredValue);
	if (existsInKupon) {
		message.innerHTML = "Kode Ditemukan";
		console.log(kupon.length);
	} else {
		message.innerHTML = "Kode Tidak Ditemukan";
	}

	wrapper.appendChild(message);
};
