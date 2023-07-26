<script setup>
import { ref} from 'vue';

const open = ref(['Member']);

const memberGroup = ref('Member');
const memberItem = ref([
  '會員',
  '感謝函',
]);
const newsGroup = ref('New')
const newsItem = ref('消息管理')
const sponsorGroup = ref('Sponsor');
const sponsorItem = ref([
  '認養據點',
  '認養訂單',
]);
const donationGroup = ref('Donation');
const donationItem = ref([
    '捐款專案',
    '捐款訂單'
])
const activityGroup = ref('Activity');
const activityItem = ref([
    '星火活動',
    '夢想之星',
    '夢想之星投票',
    '夢想之星留言'
])
const resultGroup = ref('Result');
const resultItem = ref([
    '溫馨事紀',
    '歷年報告',
    '服務里程碑',
])
const backstageGroup = ref('Backstage');
const backstageItem = ref('後台人員')

</script>

<template>
    
      <v-card>
        <v-layout>
          <v-navigation-drawer permanent width="250">
                <div class="logo">
                    <img :src="'pictures/logo/logo_white.svg'" alt="星火logo">
                </div>
              <v-list :v-model="open" density="compact" class="mt-4">
                <v-list-group class="title mt-1 mb-1" :value="memberGroup">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="會員管理">
                      <v-icon icon="mdi-chevron-down" color="#1D3D6C" size="large"></v-icon>
                    </v-list-item>
                  </template>
                  <v-list-item  v-for="(title, i) in memberItem" :key="i" :title="title"  :value="title"></v-list-item>
                </v-list-group>
                <v-list-group class="title  mt-1" :value="newsGroup">
                    <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" :title="newsItem">
                    </v-list-item>
                  </template>
                </v-list-group>
                <v-list-group class="title  mt-1" :value="sponsorGroup">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="認養管理">
                      <v-icon icon="mdi-chevron-down" color="#1D3D6C" size="large"></v-icon>
                    </v-list-item>
                  </template>
                  <v-list-item v-for="(title, i) in sponsorItem" :key="i" :value="title" :title="title"></v-list-item>
                </v-list-group>
                <v-list-group class="title mt-1" :value="donationGroup">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="捐款管理">
                      <v-icon icon="mdi-chevron-down" color="#1D3D6C" size="large"></v-icon>
                    </v-list-item>
                  </template>
                  <v-list-item v-for="(title, i) in donationItem" :key="i" :value="title" :title="title"></v-list-item>
                </v-list-group>
                <v-list-group class="title  mt-1" :value="activityGroup">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="活動管理">
                      <v-icon icon="mdi-chevron-down" color="#1D3D6C" size="large"></v-icon>
                    </v-list-item>
                  </template>
                  <v-list-item v-for="(title, i) in activityItem" :key="i" :value="title" :title="title"></v-list-item>
                </v-list-group>
                <v-list-group class="title mt-1" :value="resultGroup">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="成果管理">
                      <v-icon icon="mdi-chevron-down" color="#1D3D6C" size="large"></v-icon>
                    </v-list-item>
                  </template>
                  <v-list-item v-for="(title, i) in resultItem" :key="i" :value="title" :title="title"></v-list-item>
                </v-list-group>
                <v-list-group class="title mt-1" :value="backstageGroup">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="後台管理">
                      <v-icon icon="mdi-chevron-down" color="#1D3D6C" size="large"></v-icon>
                    </v-list-item>
                  </template>
                  <v-list-item :title="backstageItem"></v-list-item>
                </v-list-group>
              </v-list>
              <v-sheet color="#1D3D6C" class="justify-center text-center bottom" width="250">
                <p class="pa-6 text-white" >
                管理員<a href="#" class="text-white ms-4">登出</a></p>
              </v-sheet>
          </v-navigation-drawer>
        </v-layout>
      </v-card>
  </template>

<style scoped lang="scss">
    div.logo{
        background-color: $primaryBgBlue;
        width: 100%;
        padding: 5%;
        img{
            width: 80%;
            display: block;
            margin: auto;
        }
    }
    div.title{
        text-align: center;
        
    }
    ::v-deep .v-list-item__append .v-icon{
      display: none;
    }
    ::v-deep .v-list-group__items{
      background-color: #F5F4EF;
      .v-list-item__content{
        .v-list-item-title{
          font-size:16px ;
          color: #3D3A35;
        }
      }

    }
    ::v-deep .v-icon{
      position: absolute;
      top:4px;
      right: 50px;
     }
    ::v-deep .v-list-item__content{
      .v-list-item-title{
        color: $primaryBgBlue;
        font-weight: bold;
        font-size: 18px;
      }
        
    }
    div.bottom{
      position: fixed;
      bottom: 0;
    }
</style>
