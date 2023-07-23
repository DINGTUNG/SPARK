<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router=useRouter();
const account = ref('');
const password = ref('');
const errorAccount = ref('');

const login = () => {
  // 獲取用戶的帳密
  const enteredAccount = account.value;
  const enteredPassword = password.value;
  // 進行驗證
  if (enteredAccount === '' || enteredPassword === '') {
    errorAccount.value = '請輸入帳號或密碼';
  } else {
    if (enteredAccount === 'spark' && enteredPassword === '1234') {
      errorAccount.value = ''; 
      console.log('登入成功');
      alert('登入成功');
      router.push({ path: '/' });
      //跳轉頁面失效
    } else {
      console.log('帳號或密碼不正確');
      errorAccount.value = '帳號或密碼不正確';
    }
  }

};

  
</script>
