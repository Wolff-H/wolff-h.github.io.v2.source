/**
 * 这个目录放默认要自动（由 unplugin-auto-import 执行）全局导入的模块。
 */
export * as _ from "lodash-es"
export { clone as cloneShallow, cloneDeep as clone } from "lodash-es"
// export { default as router, route, onViewPass, useViewRouteEnter } from "@/router"
export { default as dragScroll } from "@/lib/drag-scroll"
export { default as handledResizable } from "@/lib/handled-resizable"
export { default as pureDraggable } from "@/lib/pure-draggable"
export { default as stickElement } from "@/lib/stick-element"
