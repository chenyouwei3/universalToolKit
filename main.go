package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/logger"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		//窗口基本设置
		Title:  "universalToolKit",
		Width:  1024,
		Height: 768,
		//静态资源
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		//背景颜色
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		LogLevel:         logger.DEBUG, // 设置 Wails 日志级别为 DEBUG

		//把对象传递给前端的方法
		Bind: []interface{}{
			app,
		},

		//// 应用生命周期回调 —— 当程序运行到对应阶段时自动调用
		//OnStartup:     app.Startup,       // 应用启动时（窗口创建前）执行：适合初始化资源、数据库、连接等
		//OnDomReady:    app.DomReady,      // 前端 DOM 加载完成时执行：适合与前端进行首次交互
		//OnShutdown:    app.Shutdown,      // 应用关闭时执行：适合释放资源、保存数据、断开连接
		//OnBeforeClose: app.OnBeforeClose, // 用户尝试关闭窗口时执行：可用于拦截关闭动作（比如“确认退出？”）
		//
		//// 将 Go 对象绑定到前端，使前端 JS 可以直接调用这些对象的方法
		//Bind: []interface{}{
		//	app,                     // 主应用对象，对前端暴露通用 API
		//	app.Connections,         // 连接管理模块（前端可以调用这里的方法）
		//	app.DatabaseConnections, // 数据库连接管理模块
		//	app.ServerConnections,   // 服务器连接管理模块
		//	app.Plugins,             // 插件系统模块，供前端调用
		//},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
