<template>
  <NavigationBar />
  <div class="container">
    <h1>选择最适合您的计划</h1>

    <!-- 切换标签 -->
    <div class="tab-controls">
      <button class="tab-btn active">全部</button>
      <button class="tab-btn">按周期</button>
      <button class="tab-btn">按流量</button>
    </div>

    <!-- 订阅计划卡片 -->
    <div class="plans-grid">
      <!-- Coal 计划 -->
      <div class="plan-card">
        <div class="plan-header">
          <h3>Coal</h3>
        </div>
        <div class="plan-price">
          <span class="price">¥ 13.00</span>
          <span class="period">月付</span>
        </div>
        <div class="plan-details">
          <div class="notice-box">
            <p><strong>⚠️ 此处新注册用户必看，老用户继续看下面：</strong>我们此处禁止分享、共享订阅、节点以及账户给他人使用，请保证仅有您本人或者您的家庭网络内可用，违者会被封禁（包括企业套餐，企业套餐请使用软路由来控制订阅不外泄露），目前新注册用户仅可使用港台日韩新马越澳美地区，我们后续会尽快添加更多地区，如果您急需某个地区可以发工单，如果我们有该地区会24小时内上架。每天更新一次订阅可能就能收到更多地区的节点使用了。</p>
            <p><strong>⚠️ 老用户看的：</strong>如果您曾经买过订阅目前没有到期，目前需要续费的话，请优先前往网页控制台 - 仪表盘（仪表盘就是弹出弹窗公告的地方）- 捷径 - 续费订阅 处续费。如果没有续费按钮或者套...</p>
          </div>
        </div>
      </div>

      <!-- Steel 计划 -->
      <div class="plan-card">
        <div class="plan-header">
          <h3>Steel</h3>
        </div>
        <div class="plan-price">
          <span class="price">¥ 20.00</span>
          <span class="period">月付</span>
        </div>
        <div class="plan-details">
          <div class="notice-box">
            <p><strong>⚠️ 此处新注册用户必看，老用户继续看下面：</strong>我们此处禁止分享、共享订阅、节点以及账户给他人使用，请保证仅有您本人或者您的家庭网络内可用，违者会被封禁（包括企业套餐，企业套餐请使用软路由来控制订阅不外泄露），目前新注册用户仅可使用港台日韩新马越澳美地区，我们后续会尽快添加更多地区，如果您急需某个地区可以发工单，如果我们有该地区会24小时内上架。每天更新一次订阅可能就能收到更多地区的节点使用了。</p>
            <p><strong>⚠️ 老用户看的：</strong>如果您曾经买过订阅目前没有到期，目前需要续费的话，请优先前往网页控制台 - 仪表盘（仪表盘就是弹出弹窗公告的地方）- 捷径 - 续费订阅 处续费。如果没有续费按钮或者套...</p>
          </div>
        </div>
      </div>

      <!-- Bronze 计划 -->
      <div class="plan-card">
        <div class="plan-header">
          <h3>Bronze</h3>
        </div>
        <div class="plan-price">
          <span class="price">¥ 99.00</span>
          <span class="period">季付</span>
        </div>
        <div class="plan-details">
          <div class="notice-box">
            <p><strong>⚠️ 此处新注册用户必看，老用户继续看下面：</strong>我们此处禁止分享、共享订阅、节点以及账户给他人使用，请保证仅有您本人或者您的家庭网络内可用，违者会被封禁（包括企业套餐，企业套餐请使用软路由来控制订阅不外泄露），目前新注册用户仅可使用港台日韩新马越澳美地区，我们后续会尽快添加更多地区，如果您急需某个地区可以发工单，如果我们有该地区会24小时内上架。每天更新一次订阅可能就能收到更多地区的节点使用了。</p>
            <p><strong>⚠️ 老用户看的：</strong>如果您曾经买过订阅目前没有到期，目前需要续费的话，请优先前往网页控制台 - 仪表盘（仪表盘就是弹出弹窗公告的地方）- 捷径 - 续费订阅 处续费。如果没有续费按钮或者套...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationBar from '@/components/Contents.vue'
</script>

<style scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f5f7fa;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
}

h1 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

/* 标签切换 */
.tab-controls {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background: white;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn.active {
  background-color: #3399ff;
  color: white;
  border-color: #3399ff;
}

/* 计划卡片网格 */
.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.plan-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
}

.plan-card:hover {
  transform: translateY(-4px);
}

.plan-header {
  padding: 1.2rem 1.5rem;
  background: #f0f4f8;
  text-align: center;
}

.plan-header h3 {
  font-size: 1.1rem;
  color: #333;
  margin: 0;
}

.plan-price {
  padding: 1.2rem 1.5rem;
  text-align: center;
  background: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
}

.plan-price .price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.2rem;
}

.plan-price .period {
  font-size: 0.85rem;
  color: #666;
}

.plan-details {
  padding: 1.5rem;
  background: #fff;
}

.notice-box {
  background-color: #ffe0d4;
  border-left: 4px solid #ff9966;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
}

.notice-box p {
  margin: 0.5rem 0;
}

/* 响应式 */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .tab-controls {
    flex-direction: column;
  }

  .tab-btn {
    width: 100%;
  }
}
</style>