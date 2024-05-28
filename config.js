import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBX16Xp4y3YtQOZYF7Nt2sjgRZ68UBkGJg",
  authDomain: "projeto-teste-aula-5796d.firebaseapp.com",
  databaseURL: "https://projeto-teste-aula-5796d-default-rtdb.firebaseio.com",
  projectId: "projeto-teste-aula-5796d",
  storageBucket: "projeto-teste-aula-5796d.appspot.com",
  messagingSenderId: "914861659213",
  appId: "1:914861659213:web:721d0d32689a2e2faab804",
  measurementId: "G-V977DWVNY8"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


const equip1Ref = ref(database, 'equip1');

onValue(equip1Ref, (snapshot) => {
  const data = snapshot.val();
  updateUI(data);
});


function updateUI(data) {
  const temperatureElement = document.getElementById('temperature');
  const humidityElement = document.getElementById('humidity');

  temperatureElement.textContent = `Temperatura: ${data['Temperatura C']} °C`;
  humidityElement.textContent = `Umidade: ${data['Umidade']}%`;
}
