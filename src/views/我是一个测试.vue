
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
            <h1 id="asd-asd-asd-as">asd asd asd as</h1>
<p>d 
asd 
asd 
as d
a
s 
as d
as 
as
d 
asd 
s </p>
<h2 id="asd-asd">asd asd</h2>
<p> as
  d
  as 
  das
   a
   s d
   as 
   das</p>
<h3 id="asd-ad-as-das">asd ad as das</h3>
<p>   a
   sd 
   as d
   sa
    d
    a 
    as
     as
      as</p>
<pre><code>   a 
   a 
   a 
   a 
   a 
   a
    a

     
</code></pre>

        </div>
    </template>
    <style scoped lang="less">
        @import "../assets/github-markdown-css.css";
    </style>
    