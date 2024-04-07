import { App } from 'vue'
import echarts from './echarts'

export const util = {
  install: (app: App) => {
    app.config.globalProperties.$echarts = echarts
        
  }
}
