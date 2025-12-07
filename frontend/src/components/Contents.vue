<template>
  <div class="nav-container">
    <div class="nav-buttons">
      <div class="nav-buttons-left">
        <a-button class="nav-btn" @click="handleNavigation('home')">
          <template #icon><home-outlined style="font-size: 20px; color: #1677ff;" /></template>
          首页
        </a-button>
        <a-dropdown>
          <a-button class="nav-btn">
            <template #icon><facebook-outlined style="font-size: 20px; color: #1877F2;" /></template>
            Facebook工具
            <down-outlined />
          </a-button>
          <template #overlay>
            <a-menu>
              <a-menu-item key="user" @click="handleNavigation('facebook_pay')">
                <template #icon><user-outlined style="font-size: 20px;color: #8e44ff;"/></template>
                自动注册
              </a-menu-item>
              <a-menu-item key="dollar" @click="handleNavigation('facebook_pay')">
                <template #icon>
                  <dollar-outlined style="color: #2ecc71;" />
                </template>
                Game Pay 游戏支付
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <!-- 日志中心下拉菜单 -->
        <a-dropdown>
          <a-button class="nav-btn">
            <template #icon><file-text-outlined /></template>
            日志中心
            <down-outlined />
          </a-button>
          <template #overlay>
            <a-menu>
              <a-menu-item key="operation" @click="handleNavigation('log-operation')">
                <template #icon><history-outlined /></template>
                操作日志
              </a-menu-item>
              <a-menu-item key="running" @click="handleNavigation('log-running')">
                <template #icon><history-outlined /></template>
                运行日志
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  HomeOutlined,
  FacebookOutlined,
  DownOutlined,
  DollarOutlined,
  UserOutlined,
  FileTextOutlined,
  HistoryOutlined} from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleNavigation = (route) => {
  router.push(`/${route}`)
}
</script>

<style lang="less" scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.nav-buttons-left {
  display: flex;
  gap: 10px;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-btn:hover {
  background-color: #f0f0f0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.user-info:hover {
  background-color: #f6f7f8;
  border-radius: 4px;
}

.user-name {
  font-size: 14px;
  color: #18191c;
  font-weight: 500;
}

.dropdown-icon {
  font-size: 12px;
  color: #9499a0;
  transition: transform 0.3s;
}

.user-info:hover .dropdown-icon {
  color: #00a1d6;
}

:deep(.ant-dropdown-menu) {
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

:deep(.ant-dropdown-menu-item) {
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s;
}

:deep(.ant-dropdown-menu-item:hover) {
  background-color: #f6f7f8;
  color: #00a1d6;
}

:deep(.ant-dropdown-menu-item .anticon) {
  margin-right: 8px;
}
</style> 