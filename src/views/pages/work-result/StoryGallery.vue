<script setup>
import { reactive, ref} from "vue";

    const coverStory = reactive([
        {
            id:1,
            imgUrl:'pictures/images/results/story-gallery/cover-story/cover_story_1.jpg',
            title:'一位兒童的奇幻旅程',
            text1:'一位在星火成長的孩子。他叫小瓜，面對缺乏家庭的挑戰，小瓜展現了驚人的勇氣和堅強的意志。他從小就夢想著飛翔，並努力學習、成長。透過故事藝廊，他分享了自己的親手堆疊出的積木城堡，展現出驚人的創造力和對愛的渴望。',
            text2:'小瓜的故事提醒著我們，每個孩子都擁有無限的潛力和夢想，只需要給予他們愛和支持的環境，他們就能像小鳥一樣自由自在地飛翔。'
        },
        // {
        //     id:2,
        //     imgUrl:'pictures/images/results/story-gallery/cover-story/cover_story_2.jpg',
        //     title:'音樂的魔力',
        //     text1:'小妮是一位充滿音樂天賦的孤兒，卻因生活困難而無法接觸音樂。星火兒童協會舉辦了「音樂的魔力」工作坊，為孩子們提供音樂教育的機會。小妮參與了工作坊，她的心靈被音符所觸動，開啟了一個全新的世界。',
        //     text2:'在工作坊中，小妮學習唱歌的技巧，她的才華逐漸展露。音樂不僅讓她找到表達自己的方式，也給了她自信和希望。'
        // }
    ])
    const warmStory = reactive([
        {
            id:1,
            imgUrl:'pictures/images/results/story-gallery/story/story_1.jpg',
            date:'2023.07.20',
            title:'小手揉麵 共享美味',
            description:'小朋友們認真地學習製作麵包，彼此合作搓揉麵團，一同創造出美味的麵食作品。他們用小手捏出有趣的......'
        },
        {
            id:2,
            imgUrl:'pictures/images/results/story-gallery/story/story_2.jpg',
            date:'2023.07.15',
            title:'我是這樣長大的',
            description:'小安從小就以她的畫筆將奇幻的夢境和美麗的色彩帶入現實生活，她用繽紛的色彩和獨特的構圖展現她對......'
        },
        {
            id:3,
            imgUrl:'pictures/images/results/story-gallery/story/story_3.jpg',
            date:'2023.06.20',
            title:'禮物中的喜悅',
            description:'星火協會在兒童節這天，發放給每位小朋友們一份小禮物，這份禮物不僅帶來滿足，更加深愛與關懷的體......'
        },
        {
            id:4,
            imgUrl:'pictures/images/results/story-gallery/story/story_4.jpg',
            date:'2023.06.09',
            title:'萌萌的鐵道世界',
            description:'每當萌萌走進鐵道世界，他的眼睛就會閃耀著興奮的光芒。他會花上整個下午建設火車軌道、設置小火車......'
        },
        {
            id:5,
            imgUrl:'pictures/images/results/story-gallery/story/story_5.jpg',
            date:'2023.05.18',
            title:'大自然的奇妙旅程',
            description:'晴晴從學步起，就迷戀上大自然的美麗與神奇，總是迫不及待地探索著每一片草地、每一條小溪，她收集......'
        },
        {
            id:6,
            imgUrl:'pictures/images/results/story-gallery/story/story_6.jpg',
            date:'2023.04.28',
            title:'花開童心，歡樂的成長旅程',
            description:'妮娜在協會裡結識了許多和她一樣的朋友們，他們參加了各種有趣的活動，例如野餐、戶外遊樂和手工......'
        },
    ]) 
    let photoDisplay = ref(0)
    const photoSelected = (index) => {
        photoDisplay.value = index
    }
    const photoAlbum = reactive([
        {
            id:1,
            imgUrl:'pictures/images/results/story-gallery/gallery/gallery_1.jpg',
            branchName:'台北星火協會',
            title:'幸福的擁抱',
            description:'星火協會的愛心溫暖著孩子的心靈。在那一刻，他感受到無限的關懷和支持，成為幸福的孩子，這份溫暖的擁抱將永遠留在他的回憶中，為他的成長之路點亮星火。'
        },
        {
            id:2,
            imgUrl:'pictures/images/results/story-gallery/gallery/gallery_2.jpg',
            branchName:'台中星火協會',
            title:'歡樂的搖搖馬時光',
            description:'在星火的遊樂活動中，小朋友們盡情享受歡樂時光。笑聲響起，他們奔馳在搖搖馬上，感受快樂的風。臉上洋溢純真笑容，忘卻困難和壓力。'
        },
        {
            id:3,
            imgUrl:'pictures/images/results/story-gallery/gallery/gallery_3.jpg',
            branchName:'台南星火協會',
            title:'創意堆疊的奇幻世界',
            description:'在星火的積木遊戲中，小朋友用色彩繽紛的積木建造城堡、太空船和奇妙生物，展現無限想像力。這些積木不僅是遊戲的工具，更是孩子們展現才華和創造力的舞台，讓他們享受無盡的樂趣和成就感。'
        },
        {
            id:4,
            imgUrl:'pictures/images/results/story-gallery/gallery/gallery_4.jpg',
            branchName:'台東星火協會',
            title:'童年快樂時光',
            description:'小女孩充滿歡笑，展現快樂的童年。她與朋友們跳躍、奔跑，純真的笑容洋溢著臉上。他們一起探索自然，小女孩的快樂源於無拘束的自由，將童年時光點亮成美好的回憶。'
        }
    ])
</script>

<template>
  <div class="banner">
    <img class="PC" :src="'pictures/images/results/story-gallery/banner.jpg'" alt="banner">
    <img class="MB" :src="'pictures/images/results/story-gallery/banner_MB.png'" alt="banner">
  </div>
  <div class="container">
    <div class="main_body">
        
        <div class="switch-button">
            <button type="button">星火點滴</button>
            <button type="button">星火寫真</button>
        </div>
        <section class="cover-story">
            <div class="title">
                <h1>本月封面故事</h1>
                <div class="decorative_line">
                    <img :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
                </div>
            </div>
            <div class="story" v-for="(story, id) in coverStory" :key="id">
                <div class="pic">
                    <img :src="story.imgUrl" alt="封面故事照片">
                </div>
                <div class="text">
                    <h4>{{ story.title }}</h4>
                    <p>{{ story.text1 }}</p>
                    <p>{{ story.text2 }}</p>
                </div>
            </div>

        </section>
        <section class="warm-story">
            <div class="title">
                <div class="name">
                    <h2>溫馨事紀</h2>
                    <img class="title_decorate" :src="'pictures/images/results/story-gallery/story/title_decorate.png'" alt="標題裝飾">  
                </div>

                <div class="decorative_line">
                    <img :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
                </div>
            </div>

            <div class="story-list">
                <div class="card" v-for="(item, id) in warmStory" :key="id">
                    <div class="pic">
                        <img :src="item.imgUrl" alt="故事照片">
                    </div>
                    <div class="text">
                        <div class="date">{{item.date }}</div>
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.description }}</p>
                        <button type="button">閱讀全文</button>
                    </div>

                </div>
            </div>
            <div class="change-page">
                <i class="fa-solid fa-chevron-left"></i>
                <button class="blue">1</button>
                <button>2</button>
                <button>3</button>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </section>
        <section class="photo-album">
            <div class="title">
                <div class="name">
                    <h2>星火寫真</h2>
                    <img class="title_decorate" :src="'pictures/images/results/story-gallery/story/title_decorate.png'" alt="標題裝飾">  
                </div>
                <div class="decorative_line">
                    <img :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
                </div>
            </div>
            <transition>
                <div class="photoDisplay" v-if="photoDisplay != null">
                <div class="pic">
                   <img :src="photoAlbum[photoDisplay].imgUrl" alt="星火寫真照片">
                </div>
                <div class="text">
                    <div class="branch-name">
                        {{ photoAlbum[photoDisplay].branchName }}
                    </div>
                    <h4>{{ photoAlbum[photoDisplay].title }}</h4>
                    <p>{{ photoAlbum[photoDisplay].description }}</p>
                </div>
                </div>
            </transition>

            <div class="photoSelect">
                <div class="pic" v-for=" (item, index) in photoAlbum" :key="index"   @click="photoSelected(index)" :class="{ 'gray': index !== photoDisplay }">
                   <img :src="item.imgUrl" alt="星火寫真照片">
                </div>
            </div>
        </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/work-result/story-gallery'
</style>
