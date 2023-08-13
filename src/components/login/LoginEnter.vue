<script setup>
import { useLogStore } from '@/stores/login-dummy-data.js'
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import VueRecaptcha from 'vue3-recaptcha2';
import { useFirestore, useCurrentUser, useFirebaseAuth } from 'vuefire'; //import firebase
const firebase = useFirestore(); //宣告firebase為firebase的內容
import { getRedirectResult, signInWithRedirect, GoogleAuthProvider, signOut, getAuth, updatePassword, verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth'
import axios from 'axios'
const auth = useFirebaseAuth() // only exists on client side，這行只能僅存在於前端(client side)
const user = useCurrentUser();
const router = useRouter();
const error = ref(null)// display errors if any(如果有的話就顯示錯誤)
const googleAuthProvider = new GoogleAuthProvider()
// const logStore = useLogStore();//假帳號js


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

const isValidToken = ref(false)//reCapthcha的判斷
const instance_vueRecaptchaV2 = reactive({
    data_v2SiteKey: '6LdCGEwnAAAAAD5ILm-sPl_6mswpIfvMKY89E-hr',
    recaptchaVerified: (response_token) => {
        console.log('驗證成功');
        console.log(response_token);
        // 連接後端API，給後端進行認證
        // Connect to your Backend service.
        isValidToken.value = true;
    },
    recaptchaExpired: () => {
        // 驗證過期後進行的動作
        console.log('驗證過期啦QAQ');
    },
    recaptchaFailed: () => {
        console.log('驗證失敗');
        // 驗證失敗進行的動作
    },
});




function showHide() {
    if (passwordField.value.type === 'password') {
        passwordField.value.type = 'password';
    } else {
        passwordField.value.type = 'text';
    }
    // 切換顯示密碼圖標
    showPassword.value = !showPassword.value;
}
const login = () => {
    const enteredAccount = account.value; // 獲取用戶的帳密
    const enteredPassword = password.value;
    // 進行驗證
    if (enteredAccount === '' || enteredPassword === '') {
        errorAccount.value = '請輸入帳號或密碼';
    } else if (!isValidToken.value) {
        errorAccount.value = '請進行驗證';
    } else {
        const userIndex = logStore.log.findIndex((item) => item.name === enteredAccount);
        if (userIndex !== -1 && logStore.log[userIndex].pass === enteredPassword) {
            logStore.log.forEach((item) => {
                item.state = false
            });
            logStore.log[userIndex].state = true;
            logStore.token = userIndex;
            errorAccount.value = '';
            alert(`登入成功：${logStore.log[userIndex].name}`);
            router.push({ path: '/home' });
            account.value = '';
            password.value = '';}
        }


// //連接會員登入 API
const handleLogin = async () => {
    try {
        const loginForm = document.querySelector('#login_form');
        const formData = new FormData(loginForm); 

        const res = await axios.post('http://localhost/SPARK_BACK/php/member/membership_system/handle_login.php', formData);

        if (res.data.status === "ok") {
            router.push({ path: '/home' });
        } else {
            const msg = res.data.msg;
            alert(msg);
        }
    } catch (error) {
        console.error('網路請求錯誤:', error);
        alert('網路請求錯誤');
    }
}

const loginForm = document.querySelector('#login_form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin();
    });
}





// const login = () => {
//     const enteredAccount = account.value; // 獲取用戶的帳密
//     const enteredPassword = password.value;
//     // 進行驗證
//     if (enteredAccount === '' || enteredPassword === '') {
//         errorAccount.value = '請輸入帳號或密碼';
//     } else if (!isValidToken.value) {
//         errorAccount.value = '請進行驗證';
//     } else {
//         const userIndex = logStore.log.findIndex((item) => item.name === enteredAccount);
//         if (userIndex !== -1 && logStore.log[userIndex].pass === enteredPassword) {
//             logStore.log.forEach((item) => {
//                 item.state = false
//             });
//             logStore.log[userIndex].state = true;
//             logStore.token = userIndex;
//             errorAccount.value = '';
//             alert(`登入成功：${logStore.log[userIndex].name}`);
//             console.log(logStore.log[userIndex].state)
//             router.push({ path: '/home' });
//             account.value = '';
//             password.value = '';

//         } else {
//             errorAccount.value = '帳號或密碼不正確';
//         }
//     }
// };

</script>
<template>
    <div class="login">
        <h1>會員登入</h1>
        <form method="POST" id="login_form" action="http://localhost/SPARK_BACK/php/member/membership_system/handle_login.php" @submit.prevent="handleLogin()">
            <label for="account">帳號
                <input type="text" name="member_account" class="account" v-model="account" placeholder="輸入您的帳號或信箱"
                    :class="{ 'animate__animated animate__headShake': errorAccount }" autocomplete="username">
            </label>
            <label for="password">密碼
                <div class="password_wrapper" ref="passwordField"
                    :class="{ 'animate__animated animate__headShake': errorAccount }">
                    <div class="password_block">
                        <input :type="showPassword ? 'password' : 'text'" class="password" v-model="password"
                            placeholder="輸入您的密碼" name="member_password" autocomplete="current-password">
                        <span class="toggle" @click="showHide"><img v-if="showPassword"
                                :src="'pictures/images/login/eye_hide.svg'" alt="hide" />
                            <img v-else :src="'pictures/images/login/eye_show.svg'" alt="show" /></span>
                    </div>
                </div>
            </label>
            <div class="recaptcha_forget_block">
                <vue-recaptcha :sitekey="instance_vueRecaptchaV2.data_v2SiteKey" size="normal" theme="light" hl="zh-TW"
                    @verify="instance_vueRecaptchaV2.recaptchaVerified" @expire="instance_vueRecaptchaV2.recaptchaExpired"
                    @fail="instance_vueRecaptchaV2.recaptchaFailed" ref="vueRecaptcha">
                </vue-recaptcha>
                <div class="forgot_psw">
                    <i class="fa-solid fa-circle-question"></i>
                    <router-link to="/login-forget">忘記密碼</router-link>
                    <router-view />
                </div>
            </div>

            <div v-if="errorAccount" class="error_account">
                {{ errorAccount }}
            </div>
            <button class="login_button" type="submit">登入</button>
            <div class="login_methods">
                <div class="line"></div>
                <h6>以其他方式登入</h6>
                <div class="line"></div>
            </div>
            <button class="google_login" @click="signInRedirect">
                <i class="fa-brands fa-google"></i>
                以 google 帳號登入
            </button>
            <div class="signup">
                <span>
                    你還不是會員嗎？
                    <i class="fa-solid fa-pen"></i>
                    <RouterLink to="/register" class="signup_link">註冊會員</RouterLink>
                </span>
            </div>
        </form>
    </div>
</template>
<style scoped lang="scss">
@import "../../assets/sass/components/login/login-enter";
</style>
