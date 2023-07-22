<script setup>
import { RouterLink } from 'vue-router'

import { reactive } from 'vue';
const linkSectionList = reactive(
  [
    {
      id: "about",
      main:
      {
        title: "認識星火",
        routingName: "/about"
      },
      sub: [
        {
          title: "星火緣起",
          routingName: "/about"
        }, {
          title: "星火願景",
          routingName: "/about"
        }, {
          title: "服務據點",
          routingName: "/about"
        }, {
          title: "認養/捐款Q&A",
          routingName: "/about"
        }
      ]
    },
    {
      id: "service",
      main:
      {
        title: "星火服務",
        routingName: "/service"
      },
      sub: [
        {
          title: "服務內容",
          routingName: "/service"
        }
      ]
    },
    {
      id: "work_result",
      main:
      {
        title: "成果佈告欄",
        routingName: "/work-result"
      },
      sub: [
        {
          title: "故事藝廊",
          routingName: "/work-result"
        }, {
          title: "歷年報告",
          routingName: "/work-result"
        }, {
          title: "服務里程碑",
          routingName: "/work-result"
        }
      ]
    },
    {
      id: "sponsor",
      main:
      {
        title: "認養計畫",
        routingName: "/sponsor"
      },
      sub: [
        {
          title: "認養據點",
          routingName: "/sponsor-location"
        }, {
          title: "我要認養",
          routingName: "/sponsor"
        }
      ]
    },
    {
      id: "donate",
      main:
      {
        title: "捐款專案",
        routingName: "/donate"
      },
      sub: [
        {
          title: "捐款內容",
          routingName: "/donate"
        }, {
          title: "捐款善心榜",
          routingName: "/donate"
        }
      ]
    },
    {
      id: "about",
      main:
      {
        title: "星火之友",
        routingName: "/contact"
      },
      sub: [
        {
          title: "友會介紹",
          routingName: "/contact"
        }, {
          title: "總部地點",
          routingName: "/contact"
        }
      ]
    }
  ]
)


</script>

<template>
  <footer>
    <div class="footer_content">
      <div class="information">

        <div class="logo">
          <img :src="'pictures/logo/logo_white.svg'" alt="Spark logo">
        </div>

        <div class="business_hours">
          <span class="service_hours">服務時間</span>
          <span class="time">08:00 - 17:00</span>
          <span class="date">星期一至星期六</span>
        </div>

        <div class="location">
          <span class="headquarters">總部</span>
          <i class="fa-solid fa-location-dot"></i><span>320桃園市中壢區復興路46號9樓</span>
          <br>
          <i class="fa-sharp fa-solid fa-phone"></i><span>03-4251108</span>
        </div>
      </div>

      <div class="items">
        <div class="list">

          <div v-for="linkSection in linkSectionList" :key="linkSection.id" >

            <h5>
              <RouterLink :to="linkSection.main.routingName"  class="link">
                {{ linkSection.main.title }}
              </RouterLink>
            </h5>

            <h6 v-for="subEle in linkSection.sub" :key="subEle.title">
              <RouterLink :to="subEle.routingName" class="link">
                {{ subEle.title }}
              </RouterLink>
            </h6>

          </div>
        </div>


        <div class="newsletter">
          <label for="">
            <h6>星火電子報</h6>
          </label>
          <input type="email" name="" id="" placeholder="E-mail" style="border:1px solid rgba(255,255,255,0.45)">
        </div>
      </div>
    </div>

    <div class="footer_copyright">
      <div class="copyright">
        <span>Copyright© 星火兒童認養協會</span>
      </div>
    </div>
  </footer>
</template>



<style scoped lang="scss">
@import "@/assets/sass/layout/_footer";
</style>







 
