/**
 * 环境 浏览器
 * 
/**
 * 创建右侧边栏
 * @param {NodeListOf<Element>} el 
 */
export default function(el) {
    //清除之前的className为rightBar的右侧边栏
    let _rightBar = document.querySelector('.outBox')
    if(_rightBar) {
        document.querySelector('.wrap').removeChild(_rightBar)
    }
    let rightBar = new DocumentFragment()
    let outBox = document.createElement('div')
    outBox.className = 'outBox'
    let rightBarUl = document.createElement('ul')
    rightBarUl.className = 'rightBar'
    for(let i = 0; i < el.length; i++) {
        let li = document.createElement('li')
        //给每个li添加点击事件,点击li时,滚动到对应的位置
        li.addEventListener('click', () => {
            //获取当前li的位置
            let top = el[i].offsetTop
            //滚动到对应的位置
            document.documentElement.scrollTop = top
        })
        li.innerText = el[i].innerText
        rightBarUl.appendChild(li)
    }
    outBox.appendChild(rightBarUl)
    rightBar.appendChild(outBox)
    //放入到.wrap下和flex配合
    document.querySelector('.wrap').appendChild(rightBar)
}
