<script setup>
import { ref, reactive, computed } from 'vue';
const page = ref(1)
const modalImageSrc = ref('');
const infoModal = ref(null);

const imageUrl = new URL('/pictures/decorations/illustration/love_book.svg', import.meta.url)

function openModal(imageSrc) {
  modalImageSrc.value = imageSrc;
  infoModal.value.showModal();
}

function closeImageModal() {
  modalImageSrc.value = '';
  infoModal.value.close(); // 關閉彈窗
}

//換頁
const itemsPerPage = 8;
const displayedLetterData = computed(() => {
  const startIdx = (page.value - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  return letterData.slice(startIdx, endIdx);
});

const letterData = reactive([
  {
    childId: "00001",
    date: "2023.07.01",
    location: "台北星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00008",
    date: "2023.09.05",
    location: "台北星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00030",
    date: "2023.10.11",
    location: "台中星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00045",
    date: "2023.11.19",
    location: "台北星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00066",
    date: "2023.12.28",
    location: "台南星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00080",
    date: "2024.01.11",
    location: "台東星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00103",
    date: "2024.03.22",
    location: "台東星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00146",
    date: "2024.04.09",
    location: "台中星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00160",
    date: "2024.06.07",
    location: "台北星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00178",
    date: "2024.07.28",
    location: "台中星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00200",
    date: "2024.08.28",
    location: "台北星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00211",
    date: "2024.10.05",
    location: "台北星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00235",
    date: "2024.10.14",
    location: "台中星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00256",
    date: "2024.11.01",
    location: "台中星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00265",
    date: "2024.11.20",
    location: "台東星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00289",
    date: "2024.11.29",
    location: "台南星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00291",
    date: "2024.12.06",
    location: "台南星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00312",
    date: "2024.12.18",
    location: "台中星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00345",
    date: "2024.12.31",
    location: "台南星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00349",
    date: "2025.02.31",
    location: "台中星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
  {
    childId: "00367",
    date: "2025.03.06",
    location: "台中星火中心",
    jpgPath: "pictures/images/member-center/child_letter.png",
  },
])


</script>

<template>
  <div class="letter_record_container">
    <div class="main_body">

      <img class="deco" :src="'pictures/decorations/illustration/smilestar.svg'" alt="微笑星星裝飾">
      <img class="deco" :src="'pictures/decorations/illustration/telescope_2.svg'" alt="望遠鏡裝飾">



      <div class="table">
        <div class="title">

          <img class="love_book" :src="imageUrl" alt="感謝函裝飾">
          <h1>感謝函專區</h1>
        </div>
        <div class="text">
          <p>親愛的認養人，我們真心希望您近來都過得順遂和愉快。
            <br>
            由衷感謝您對我們的一直支持和無微不至的愛護～願您繼續擁有幸福的日子！
          </p>
        </div>
        <div class="talk">


          <Images :imgSrc="'pictures/images/member-center/talk.svg'" :alt="'test'" />


          <!-- <img :src="'pictures/images/member-center/talk.svg'" alt="小朋友說的話"> -->
        </div>
        <div class="banner">

          <Images :imgSrc="'pictures/images/member-center/banner_1.png'" :alt="'test'" />


          <!-- <img :src="'pictures/images/member-center/banner_1.png'" alt="小朋友照"> -->
        </div>


        <table class="letter_table">
          <thead>
            <tr class="table_title">
              <th class="child_id">兒童編號</th>
              <th class="date">收件日期</th>
              <th class="location">所屬據點</th>
              <th class="jpg">感謝函</th>
            </tr>
          </thead>

          <tbody>
            <tr class="info" v-for="data in displayedLetterData" :key="data.childId">
              <td data-title="兒童編號" class="child_id">{{ data.childId }}</td>
              <td data-title="收件日期">{{ data.date }}</td>
              <td data-title="所屬據點">{{ data.location }}</td>
              <td data-title="感謝函" class="click_jpg" @click="openModal(data.jpgPath)" style="cursor: pointer;">
                {{ '來自' + data.childId + '的感謝信.jpg ' }}
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="modalImageSrc !== ''" class="overlay" @click="closeImageModal"></div>

        <!-- 彈窗 -->
        <div ref="modalContainer" class="modal-container">
          <div v-if="modalImageSrc !== ''" class="overlay" @click="closeImageModal"></div>
          <dialog ref="infoModal" :open="modalImageSrc !== ''" class="modal-dialog" @click="closeImageModal">
            <img :src="modalImageSrc" alt="Image" />
            <button class="close_btn">
              <img :src="'pictures/icons/close-button/big_white.svg'" alt="Close" />
            </button>
          </dialog>
        </div>

        <!-- 分頁 -->
        <div class="text-center">
          <v-pagination class="page_num" v-model="page" :length="3" rounded="circle" prev-icon="mdi-chevron-left"
            next-icon="mdi-chevron-right" active-color="#F5F4EF" color="#E7E6E1"></v-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/pages/member-center/letter-record";
</style>