// import { ElMessageBoxShortcutMethod } from "element-plus/types/message-box";

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

// 解决引入模块的报错提示
declare module '@/plugins/index.ts'
