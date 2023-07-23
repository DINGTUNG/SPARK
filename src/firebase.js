
//我是viewfire，是firebase的擴充套件，vue官方用的唷!

//firebas的引入區塊
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports //要引入其他功能請在這裡寫


export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDW4vgmxEP0wa965eCZj4AUGilfdflZyEA",
    authDomain: "spark-chd102.firebaseapp.com",
    projectId: "spark-chd102",
    storageBucket: "spark-chd102.appspot.com",
    messagingSenderId: "654975912562",
    appId: "1:654975912562:web:2ed81cc56287aa070c90eb",
    measurementId: "G-S76WMPCR38"
})
//這裡是專案的SDK碼


// used for the firestore refs
const db = getFirestore(firebaseApp)
// here we can export reusable database references
export const todosRef = collection(db, 'todos')