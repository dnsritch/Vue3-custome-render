import { defineComponent, h, ref, computed } from "@vue/runtime-core";
import StartPage from "./page/StartPage";
import GamePage from './page/GamePage';
import EndPage from './page/EndPage';

const pageMap = {
    startPage: StartPage,
    gamePage: GamePage,
    endPage: EndPage
}

export default defineComponent({
    setup() {
        // 创建响应式对象 ref
        const currentPageName = ref('gamePage')
        const currentPage = computed(() => {
            return pageMap[currentPageName.value]
        })

        const handlePageChange = (name) => currentPageName.value = name

        return {
            currentPage,
            handlePageChange
        }
    },
    render(ctx) {
        return h('Container', [h(ctx.currentPage, { onPageChange: ctx.handlePageChange },)])
    },
});
