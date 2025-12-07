<template>
  <NavigationBar />
  <div class="facebook-pay-container">
    <div class="header">
      <h2>Facebook Pay 工具</h2>
    </div>
    
    <div class="console-container">
      <div class="console-header">
        <span class="console-title">运行日志</span>
      </div>
      <div class="console-body" ref="consoleBody">
        <div 
          v-for="(log, index) in logs" 
          :key="index" 
          :class="['log-entry', log.type]"
        >
          [{{ log.timestamp }}] {{ log.message }}
        </div>
      </div>
    </div>
    
    <div class="controls-container">
      <div class="control-group">
        <h3>支付功能控制</h3>
        <div class="switch-item">
          <span>启用自动支付</span>
          <a-switch v-model:checked="autoPayEnabled" />
        </div>
        <div class="switch-item">
          <span>启用通知提醒</span>
          <a-switch v-model:checked="notificationEnabled" />
        </div>
        <div class="switch-item">
          <span>记录详细日志</span>
          <a-switch v-model:checked="verboseLogging" />
        </div>
      </div>
      
      <div class="control-group">
        <h3>操作选项</h3>
        <div class="buttons">
          <a-button type="primary" @click="startPaymentProcess">
            开始支付流程
          </a-button>
          <a-button @click="clearLogs">
            清空日志
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import NavigationBar from '@/components/Contents.vue'
// 控制开关
const autoPayEnabled = ref(false)
const notificationEnabled = ref(true)
const verboseLogging = ref(false)

// 日志数据
const logs = ref([])

// 控制台引用
const consoleBody = ref(null)

// 添加日志的方法
const addLog = (message, type = 'info') => {
  const now = new Date()
  const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
  
  logs.value.push({
    message,
    type,
    timestamp
  })
  
  // 滚动到底部
  nextTick(() => {
    if (consoleBody.value) {
      consoleBody.value.scrollTop = consoleBody.value.scrollHeight
    }
  })
}

// 开始支付流程
const startPaymentProcess = () => {
  addLog('开始初始化支付流程...', 'info')
  setTimeout(() => {
    addLog('连接到Facebook支付服务器...', 'info')
  }, 500)
  
  setTimeout(() => {
    if (autoPayEnabled.value) {
      addLog('自动支付已启用，准备处理交易', 'success')
    } else {
      addLog('请手动确认支付信息', 'warning')
    }
  }, 1000)
}

// 清空日志
const clearLogs = () => {
  logs.value = []
}

// 初始化示例日志
onMounted(() => {
  addLog('Facebook Pay 工具已启动', 'success')
  addLog('等待用户操作...', 'info')
})
</script>

<style lang="less" scoped>
.facebook-pay-container {
  padding: 20px;
  background-color: #f5f5f5;
  min-height: calc(100vh - 60px);
}

.header {
  margin-bottom: 20px;
  
  h2 {
    color: #1877f2;
    font-size: 24px;
    margin: 0;
  }
}

.console-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
}

.console-header {
  background-color: #1877f2;
  color: white;
  padding: 12px 16px;
  
  .console-title {
    font-weight: 500;
    font-size: 16px;
  }
}

.console-body {
  height: 400px;
  overflow-y: auto;
  padding: 16px;
  font-family: monospace;
  background-color: #000;
  color: #00ff00;
  
  .log-entry {
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 1.4;
    
    &.error {
      color: #ff5555;
    }
    
    &.warning {
      color: #ffaa00;
    }
    
    &.success {
      color: #55ff55;
    }
  }
}

.controls-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.control-group {
  flex: 1;
  min-width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  
  h3 {
    margin-top: 0;
    margin-bottom: 16px;
    color: #333;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
  }
}

.switch-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
  
  span {
    font-size: 14px;
    color: #333;
  }
}

.buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  
  .ant-btn {
    flex: 1;
    min-width: 120px;
  }
}

@media (max-width: 768px) {
  .controls-container {
    flex-direction: column;
  }
  
  .control-group {
    min-width: 100%;
  }
}
</style>