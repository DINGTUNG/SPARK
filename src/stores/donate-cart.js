import {
  defineStore
} from 'pinia';

import {
  ref,
  reactive,
  computed
} from 'vue';

import { useRouter } from 'vue-router';
const router = useRouter(); 

export const useDonateCartStore = defineStore('donate-cart', () => {


  //導覽列控制
  const isSideListShow = ref(false);

  const showSideList = () => {
    isSideListShow.value = true;
  }

  const hideSideList = () => {
    isSideListShow.value = false;
  }
  //
  
//捐款text數字顯示
const message = ref('');
// 将输入的内容转换为合适的金额格式
const formattedAmount = computed(() => {
  let amount = parseFloat(message.value); 
  // 将输入的内容转换为浮点数
  if (isNaN(amount)) {
    return ''; // 输入无效数字时，显示为空
  } else {
    return amount.toFixed(2); // 返回保留两位小数的金额字符串
  }
});

const goToCheckoutPage = () => {
  console.log('goToCheckoutPage is called!');
  if ( formattedAmount<100) {
    return;
  }else{
    router.push({ path: '/donate-checkout-step-1' })
  }
}


  const donateContentCardList = reactive([
    {
      id: "D001",
      imgSrc: "pictures/images/donate/donate-content/D001_kids_support.jpg",
      title: "扶幼捐款",
      content: "支持需要幫助的幼兒。通過捐贈金錢，我們能夠提供營養、醫療、教育和其他基本需求，讓這些幼兒擁有更好的生活和未來。",
      fundSum: "捐款累計 NT$114,900"
    },
    {
      id: "D002",
      imgSrc: "pictures/images/donate/donate-content/D002_kids_protection.jpg",
      title: "兒童保護",
      content: "支持兒童保護組織和計劃，確保兒童的安全、健康和福祉。透過捐贈金錢，您可以幫助提供緊急援助、醫療保健、教育、心理支持和法律援助。",
      fundSum: "捐款累計 NT$18,800"
    },
    {
      id: "D003",
      imgSrc: "pictures/images/donate/donate-content/D003_kids_sponsor.jpg",
      title: "助養召集令",
      content: "提供受助者孩童所需的經濟援助，為受助者提供穩定的支持，幫助他們改善生活狀況，獲得更好的教育和醫療資源，並提供更積極的未來展望。",
      fundSum: "捐款累計 NT$21,500"
    },
    {
      id: "D004",
      imgSrc: "pictures/images/donate/donate-content/D004_scholarship.jpg",
      title: "獎助學金",
      content: "支持有潛力但經濟困難的學生，幫助他們實現教育目標並追求更好的未來。您可以資助學生的學費、教材、住宿費用或其他與教育相關的費用。",
      fundSum: "捐款累計 NT$247,380"
    },
    {
      id: "D005",
      imgSrc: "pictures/images/donate/donate-content/D005_emergency_ relief_fund.jpg",
      title: "急難救助金",
      content: "支援在緊急情況下遭遇困境的孩童，提供迅速而有效的援助。這些情況可能包括自然災害、人道危機、健康危機、家庭悲劇或其他緊急狀況。",
      fundSum: "捐款累計 NT$107,660"
    },
    {
      id: "D006",
      imgSrc: "pictures/images/donate/donate-content/D006_nutritional_supplements.jpg",
      title: "營養補助",
      content: "支持有營養需求但無法獲得足夠營養的人們，提供營養補助食品、營養品、營養教育和餐飲計畫等。有助於改善孩童的營養狀況，促進身體發育和健康。",
      fundSum: "捐款累計 NT$115,300"
    },
    {
      id: "D007",
      imgSrc: "pictures/images/donate/donate-content/D007_spark_project.jpg",
      title: "星火計畫",
      content: "讓孩子們探索自我，提出他們的夢想計畫，並邀請您投給您最愛的組別，為該組爭取「夢想成真」獎金！讓我們一同以熱情激勵，為孩子們的夢想點燃璀璨星火。",
      fundSum: "捐款累計 NT$87,900"
    }
  ]);

  const price =ref([
    {
      index:1,
      price:'100'
    },
    {
      index:2,
      price:'500'
    },
    {
      index:3,
      price:'1000'
    },
    {
      index:4,
      price:'2000'
    }
  ]);


  //這是一組的
  // class donateItem {
  //   constructor(id,title,img,content,fundSum) {

  //     this.id = id;
  //     this.title=title;
  //     this.img=img
  //     this.content=content;
  //     this.fundSum=fundSum
  //   }

  // }

  // const donateList = [
  //   new donateItem("D001","扶幼捐款","pictures/images/donate/donate-content/D001_kids_support.jpg","讓孩子們探索自我，提出他們的夢想計畫，並邀請您投給您最愛的組別，為該組爭取「夢想成真」獎金！讓我們一同以熱情激勵，為孩子們的夢想點燃璀璨星火。","捐款累計"),
  //   new donateItem("D002","兒童保護","pictures/images/donate/donate-content/D002_kids_protection.jpg","","捐款累計"),
  //   new donateItem("D003","助養召集令","pictures/images/donate/donate-content/D003_kids_sponsor.jpg","","捐款累計"),
  //   new donateItem("D004","獎助學金","pictures/images/donate/donate-content/D004_scholarship.jpg","","捐款累計"),
  //   new donateItem("D005","急難救助金","pictures/images/donate/donate-content/D005_emergency_ relief_fund.jpg","","捐款累計"),
  //   new donateItem("D006","營養補助","pictures/images/donate/donate-content/D006_nutritional_supplements.jpg","","捐款累計"),
  //   new donateItem("D007","星火計畫","pictures/images/donate/donate-content/D007_spark_project.jpg","","捐款累計"),
  // ];

   //這是一組的
  const cart = reactive(
    new Map()
  );
 

  return {
    // addPrice,
    price,
    goToCheckoutPage,
    isSideListShow,
    showSideList,
    hideSideList,
    message,
    formattedAmount,
    donateContentCardList,
    cart,
  }
})