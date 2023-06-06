
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
            <h1 id="s">s</h1>
<p>as
d 
sad
 as
 d 
 asd</p>
<p>  ads 
  as
  d as</p>
<p>   asd as
   d 
   sa 
   asd</p>
<pre><code>a sd
s
 d

 ## s as as 
</code></pre>
<h1 id="sa-as-as-as">sa as as as</h1>
<p>as
 d
 as d
 as
  d
  asd 
  sa
  d
   as
   d s</p>
<p>   ads 
   asd 
   sad
    as</p>
<pre><code>das 
sad
 as
  d
  as d
  sad 
  dsa 
  sad 
</code></pre>
<p>asdsa asd 
sda</p>
<p> asd
  as
  d 
  asd
   as
    d
    as
    d 
    asd
     as
     d 
     as d
     da</p>
<pre><code>  asd 
  as
  d as
  d 
  asd 
  asd 
  sa
  d sa
   d
   sa
    sad
     das
      dsa
       
       das
        sa
        d 
        asd 
        as
        d 
        ad 
        asd 
        asd 

        
</code></pre>

        </div>
    </template>
    <style scoped lang="less">
        @import "../assets/github-markdown-css.css";
    </style>
    