/**
 * 环境 node
 */
console.log(1)
console.log(process.cwd())
import fs, { read } from 'fs';
import path from 'path';
import chokidar from 'chokidar';
import { marked } from 'marked'

const BASE_PATH = path.join(process.cwd(), './src/md')
const MD_PATH = [] // => 存储所有的md文件路径
const MD_NAME = [] // => 存储所有的md文件名
/**
 * 找出所有的md文件(初始化)
 * @param {string} url // MD存储路径
 * @returns null
 */
export function findAllMD(url = BASE_PATH) {
    fs.readdir(url, (err, files) => {
        if (err) throw err;
        files.filter(file => file.endsWith('.md')).forEach(file => {
            MD_PATH.push(`${url}\\${file}`)
            MD_NAME.push(file.split('.')[0])
        })
        monitorMD(url) // => 监听md
        readMdFile(MD_PATH) // => 读取md文件
        addLeftNavToArticle() // => 给article中添加leftNav
    })
}

/**
 * 监听md文件夹的变化,相比监听单个文件,监听文件夹更加方便且监听单个文件,需要手动添加文件(新添加文件后就监听不到了)
 * @param {string} folderPath // => md文件夹路径 
 */
function monitorMD(folderPath = BASE_PATH) {
    // 配置选项
    const options = {
        persistent: true,
        ignoreInitial: true,
        ignored: /(^|[\/\\])\../, // 忽略所有以点开头的文件或文件夹
        depth: 1 // 只递归监听当前目录下的文件和文件夹
    };

    // 监听文件夹变化
    chokidar.watch(folderPath, options).on('all', (event, filePath) => {
        console.log(`File ${filePath} has been ${event}`);
    });
}

/**
 * 读取md文件的数据
 * @param {Array<string>} mdPath // => md文件路径 
 */
function readMdFile(mdPath = MD_PATH) {
    if (mdPath.length == 0) return
    setupRoutes() // => 数据初始化
    mdPath.forEach((item, index) => {
        fs.readFile(item, 'utf-8', (err, data) => {
            if (err) throw err;
            const fileName = item.match(/[^\\]+(?=\.md)/)[0]
            createVueFile(data.toString(), fileName)
            createRouter(fileName, index)
        })
    })
}

/**
 * 通过md文件生成vue文件
 * @param {string} mdValue // => md文件内容
 * @param {string} fileName // => md文件名
 */
function createVueFile(mdValue = null, fileName) {
    if (mdValue == null) return
    const vueValue = marked(mdValue)
    //创建vue3 setup语法糖的模板
    const vueTemplate = `
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
            ${vueValue}
        </div>
    </template>
    <style scoped lang="less">
        @import "../assets/github-markdown-css.css";
    </style>
    `
    // 在views文件夹下创建vue文件,如果没有views文件夹就创建一个
    const viewsPath = path.join(process.cwd(), './src/views')
    if (!fs.existsSync(viewsPath)) {
        fs.mkdirSync(viewsPath)
    }
    //如果有同名文件存在,将内容替换,没有就创建
    const vuePath = `${viewsPath}\\${fileName}.vue`
    fs.writeFileSync(vuePath, vueTemplate)
}


/**
 * 用md转换成的vue3文件配置路由
 * @param {string} fileName // => md文件名
 * @param {number} num // => 路由的value值
 */
function createRouter(fileName, num = 0) {
    //获取router文件夹下的index.ts文件
    const routerPath = path.join(process.cwd(), './src/router/index.ts')
    const routerValue = fs.readFileSync(routerPath, 'utf-8')
    //给router文件夹下的index.ts文件添加路由(添加到home的children中)
    const routerTemplate = `
    {
        path: '/${fileName}',
        name: '${fileName}',
        component: () => import('../views/${fileName}.vue'),
        meta: {
            name: '${fileName}' ,
            value: ${num++}
        }
    },
    `
    //找出routes中的内容
    let routes = routerValue.match(/(?<=routes = \[)[\s\S]*(?=\])/)[0]
    //找出routes中的children:[],并将children的内容取出来
    let children = routes.match(/(?<=children\s*:\s*\[)[^[\]]*(?=\])/)[0]
    children += routerTemplate
    // 将children放回到routes中,覆盖原来routes中children的内容
    routes = routes.replace(/(?<=children\s*:\s*\[)[^[\]]*(?=\])/g, children)
    //将routes放回到routerValue中,覆盖原来routerValue中routes的内容
    const newRouterValue = routerValue.replace(/(?<=routes = \[)[\s\S]*(?=\])/g, routes)
    fs.writeFileSync(routerPath, newRouterValue)
}

/**
 * 数据初始化
 * 1.清楚router中的所有routes
 */
function setupRoutes() {
    const routerPath = path.join(process.cwd(), './src/router/index.ts')
    const routerValue = fs.readFileSync(routerPath, 'utf-8')
    const newRouterValue = routerValue.replace(/(?<=routes = \[)[\s\S]*(?=\])/g, `
        {
            path: '/',
            name: 'home',
            component: () => import('../components/Article.vue'),
            children : [],
        },
    `)
    fs.writeFileSync(routerPath, newRouterValue)
}

/**
 * 重置leftNav的script内容
 * @param {string} articleValue // => article的内容
 * @returns {string} // => 重置后的article内容
 */
function setupLeftNavScript(articleValue) {
    //设置新的script内容
    let value = ''
    for (const name of MD_NAME) {
        value += `'${name}',`
    }
    //去除最后一个逗号
    value = value.slice(0, -1)
    const script = `
    import { ref } from 'vue'
    const MD_NAME = ref([${value}])
    `
    return articleValue.replace(/(?<=<script setup lang='ts'>)[\s\S]*(?=<\/script>)/, script)
}

/**
 * 给article中添加leftNav
 */
function addLeftNavToArticle() {
    const articlePath = path.join(process.cwd(), './src/components/Article.vue')
    const articleValue = fs.readFileSync(articlePath, 'utf-8')
    let newArticleValue = setupLeftNavScript(articleValue)
    //拿到template中的内容(包括template标签)
    const template = articleValue.match(/(?<=<template>)[\s\S]*(?=<\/template>)/)[0]
    //创建左边栏的模板TODO:
    const leftNav = `
    <div class="wrap">
        <div class="out">
            <div class="leftNav">
                <ul>
                    <li v-for="(item, index) in MD_NAME">
                        <RouterLink :to="{ name: item }">{{ item }}</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <RouterView v-slot="{ Component, route }">
            <Transition>
                <component :is="Component"></component>
            </Transition>
        </RouterView> -->
        <RouterView></RouterView>
    </div>
    `
    //将template放回到articleValue中,覆盖原来articleValue中template的内容(包括template标签)
    newArticleValue = newArticleValue.replace(/(?<=<template>)[\s\S]*(?=<\/template>)/, leftNav)
    //将articleValue写入到articlePath中
    fs.writeFileSync(articlePath, newArticleValue)
}

findAllMD()






