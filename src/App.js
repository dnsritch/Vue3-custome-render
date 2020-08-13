import { defineComponent, h } from "@vue/runtime-core";

export default defineComponent({
    render() {
        const vnode = h("rect", { x: 100, y: 100, backgroundColor: "red" }, [
            "Vue",
            h("circle", { x: 200, y: 200 }),
        ]);
        // console.log(vnode)
        return vnode;
    },
});
