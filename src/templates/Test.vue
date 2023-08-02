<template>
       <button class="google_login" @click="signInRedirect">
          <i class="fa-brands fa-google"></i>
          以 google 帳號登入
        </button>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useFirestore } from 'vuefire'; //import firebase
const firebase = useFirestore(); //宣告firebase為firebase的內容
import { getRedirectResult, signInWithRedirect, signOut, } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
const auth = useFirebaseAuth() // only exists on client side，這行只能僅存在於前端(client side)
const user = useCurrentUser();
const error = ref(null)// display errors if any(如果有的話就顯示錯誤)
import { GoogleAuthProvider } from 'firebase/auth'
const googleAuthProvider = new GoogleAuthProvider()



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
</script>

