
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
            <p>#s a a 
sad as 
阿斯顿阿斯顿阿萨撒</p>
<p>黑我被修改了21332132132123321213213</p>

        </div>
    </template>
    <style scoped lang="less">
        @import "../assets/github-markdown-css.css";
    </style>
    