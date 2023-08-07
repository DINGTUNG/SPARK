
import { ref, reactive } from 'vue'

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

export default isValidToken