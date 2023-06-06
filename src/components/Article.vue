<script setup lang='ts'>
    import { ref } from 'vue'
    const MD_NAME = ref(['a','ABC','d','das dsa sa','m','woshi','杀杀杀'])
    </script>

<template>
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
    </template>

<style scoped lang='less'>
.out {
    width: 100px;
}

.wrap {
    display: flex;

    .leftNav {
        position: fixed;
        width: 100px;
        height: 100vh;

        background-color: var(--bg-color);

        &>ul {
            padding: 10px;
            height: 100%;
            overflow-y: auto;

            &>li {
                white-space: nowrap;
                overflow-x: hidden;
                text-overflow: ellipsis;
                margin-bottom: 10px;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>