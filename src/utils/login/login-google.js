
import { useFirestore, useCurrentUser, useFirebaseAuth } from 'vuefire'; //import firebase
const firebase = useFirestore(); //宣告firebase為firebase的內容
import { getRedirectResult, signInWithRedirect, GoogleAuthProvider, signOut, getAuth, updatePassword } from 'firebase/auth'
const auth = useFirebaseAuth() // only exists on client side，這行只能僅存在於前端(client side)
const user = useCurrentUser();
const googleAuthProvider = new GoogleAuthProvider()

const error = ref(null)// display errors if any(如果有的話就顯示錯誤)


//登入跳轉函式，會跳轉到google的帳號頁面
function signInRedirect() {
  signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
    console.error('Failed signInRedirect', reason)
    error.value = reason
  })
}
//vFire-google
onMounted(() => {
  getRedirectResult(auth)
    .then((Response) => {
      console.log(Response);

    })
    .catch((reason) => {
      console.error('Failed redirect result', reason)
      error.value = reason
    })
})


// google登入跳轉函式:問題:跳轉遲鈍
const handleLoginStatusChange = () => {
  if (isLoggedIn()) {
    console.log('使用者已登入');

    router.push('/home');
  } else {
    console.log('使用者已登出');
  }
};
watch(user, handleLoginStatusChange, { deep: true });
const isLoggedIn = () => {
  return user.value !== null;
};
