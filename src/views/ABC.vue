
    <script setup lang="ts">
        import {ref,onMounted,onUnmounted} from 'vue'
        import myFunction from '../utils/createRightBar.js'
        import '../utils/rightBar.css'
        onMounted(() => {
            let _b = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
            myFunction(_b)
        })
        // onUnmounted(() => {
        //     console.log(1)
        // })
    </script>
    <template>
        <div class="markdown-body">
            <p>我是表情1</p>
<h1 id="123123asd-asd-as">123123ASD ASD AS</h1>
<p>AS DA DAS DAS D 
s s s 撒旦阿迪斯阿萨大大撒是 阿萨阿萨阿斯顿阿斯顿阿萨大苏打撒旦阿萨阿萨阿萨打撒十大dasdasdasd asd asd sad ads as dsaasd as das dasd as asd asd as das  sda das das sad asd das adssda dasd sads a</p>

        </div>
    </template>
    <style scoped lang="less">
        @import "../assets/github-markdown-css.css";
    </style>
    