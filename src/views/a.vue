
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
            <h3 id="1">1</h3>
<p>as sad as
 ads
  sda das</p>
<p>   sad
    sa
    d 
    asd 
     das</p>
<pre><code> d sa
  d
  sa d
  asd
  d 
  sa 
  asd
   
   das 
   as 
   asd
    a
    sd 
    ads 
    dsa
     
      as
      asd 
      asd 
       ads
       das
        
        sad 
        ads 
        sad 
        sa
        d sad
         
          ads
</code></pre>
<h2 id="2-2">2 2</h2>
<p>asd asd</p>
<p> ads 
  ads</p>
<p>  d 
   das</p>
<pre><code>das
 dsa
  
  das
  d 
  asd
   as
   d 
   asd 
   asd 
   asd
    
    ads 
    asd 
    as d
    as d
     
</code></pre>
<h1 id="1-1">1</h1>
<p>阿萨as as 
阿萨</p>
<p> as 
 撒
 是a
  sa是a撒
  撒
  是a ss</p>
<p>  s
   s
    as</p>
<pre><code> sa 
 as
  a
   s
   a s

   as 
   as 
   sa 
   sa
    s
    a 
    as
     sa
     sa 
     sa 
     as
      as
       
       
</code></pre>

        </div>
    </template>
    <style scoped lang="less">
        @import "../assets/github-markdown-css.css";
    </style>
    