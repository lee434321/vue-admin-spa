/*响应式对象，用于全局状态*/
import { reactive } from "vue";

export const store= reactive({
    tick_menu_id:"",
    ticked_stack:[]
})