<script setup>
  import { reactive, watch } from "vue";
  import axios from 'axios';
  
  const story_article = reactive([])

  const props = defineProps(["storyId"]);
  const emit = defineEmits();

  const closeStory = () => {
    emit("closeStory", "getStory");
  };

  const getStory = async () => {
    try {
      const res = await axios.post(
        `http://localhost/SPARK_BACK/php/results/story/front_read_entire_story.php?story_no=${props.storyId}`
      );
      story_article.value = res.data[0];
    } catch (err) {
      console.log(err);
    }
  };
  watch(() => props.storyId, () => {
    if (props.storyId != null) {
      getStory();
    }
  });
</script>

<template>
  <transition name="pop-up">
    <div class="wrap" v-if="storyId != null">
      <div class="story_article">
        <button type="button" @click="closeStory">
          <i class="fa-regular fa-circle-xmark"></i>
        </button>
        <div class="pic">
            <img :src="`http://localhost/SPARK_BACK/images/story/${story_article.value.story_image}`" alt="故事照片">
        </div>
        <div class="text">
            <div class="date">{{ story_article.value.story_date }}</div>
            <h3>{{ story_article.value.story_title }}</h3>
            <p>{{ story_article.value.story_detail }}</p>
            <p>{{ story_article.value.story_detail_second }}</p>
            <p>{{ story_article.value.story_detail_third }}</p>
        </div>
        <div class="star">
          <img :src="'pictures/characters/star/star_raise_hands.svg'" class="star" alt="星星裝飾">
        </div>
        <div class="font">
          <img :src="'pictures/decorations/handwriting/orange_ignite_the_night.svg'" class="font"  alt="ignite_the_night">
        </div>
    
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
  div.wrap{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 5;
    backdrop-filter: blur(3px);
    top: 0;
    left: 0;
      div.story_article{
        @include custom-responsive('xs'){
          position: fixed;
          top: 50%;
          left: 50%;
          border-radius:$br_MB;
          z-index: 20;
          background: none;
          transform: translate(-50%, -50%);
          background-color: $functionalLightGrey1;
          opacity: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90vw;
          padding: 6% 0 3%;
        }
        @include custom-responsive("lg") {
          flex-direction: row;
          width: 70vw;
          justify-content: space-evenly;
          top: 55%;
        }
        @include custom-responsive("xl"){
          width: 60vw;
          border-radius:$br_PC;
          padding: 1%;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: row;
          top: 50%;
        }
        @include custom-responsive("xx-l") {
          width: 60vw;
          top: 50%;
          padding: 3%;

        }
        button{
          background: none;
          border: none;
          position: absolute;
          @include custom-responsive('xs') {
            top: 2%;
            right: 5%;
          }
          @include custom-responsive("xl xx-l") {
            top: 6%;
            right: 5%;
          }
          i{
            font-size:40px;
            color: $primaryBrandBlue;
          }
        }
        div.text{
          @include custom-responsive('xs') {
             width: 90%;
          }
          @include custom-responsive('lg') {
            width: 45%;
          }
          @include custom-responsive("xl xx-l") {
            width: 37%;
          }
          
          div.date{
            color: $primaryAccentGold;
            @include custom-responsive('xs') {
              @include h5_MB;
            }
            @include custom-responsive("xl xx-l") {
              @include h5_PC;
            }
            
            
          }
          h3{
            position: relative;
            padding-bottom: 10%;
            &::after{
              content: '';
              width: 20%;
              height: 4%;
              background-color: $decorativeOrange;
              position: absolute;
              bottom: 15%;
              left: 0;
            }
          }

          p{
            margin: 2%;
            @include custom-responsive('xs') {
              &:nth-child(3){
                display: none;
              }
            }
            @include custom-responsive("xx-l"){
              &:nth-child(3){
                display: block;
              }
            }
          }
        }
        div.pic{
          @include custom-responsive('xs') {
              width: 60%;
              padding-bottom: 3%;
          }
          @include custom-responsive('lg') {
            width: 40%;
          }
          @include custom-responsive("xx-l") {
            width: 50%;
            height: fit-content;
            padding-bottom: 10%;
          }

          img{
            width: 100%;

          }
        }
        div.star,
        div.font{
          position: absolute;
        }
        div.star{
          @include custom-responsive('xs') {
            display: none;
          }
          @include custom-responsive("xl xx-l") {
            display: block;
            bottom: 10%;
            left: 10%;
          }
        }
        div.font{
          @include custom-responsive('xs') {
            display: none;
          }
          @include custom-responsive("xl xx-l") {
            width: 20%;
            bottom: 10%;
            left: 28%;
            display: block;
          }
          img{
            width: 100%;
          }
        }
        }
    }

.pop-up-enter-from{
  scale: 0;
}
.pop-up-leave-to{
  opacity: .2;
}
.pop-up-enter-active{
  scale: 1.2;
  transition: .5s ease;
}
.pop-up-leave-active{
  scale: 0;
  transition: .6s;
}
.pop-up-enter-to{
  scale: 1;
}
.pop-up-leave-from{
  scale: 1;
}

</style>
