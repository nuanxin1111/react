
## ES2015语法

给 JavaScript 初心者的 ES2015 实战:

	http://gank.io/post/564151c1f1df1210001c9161



## React Native的原理

在JavaScript中用React抽象操作系统原生的UI组件，代替DOM元素来渲染，比如以<View>取代<div>，以<Image>替代<img>等。

在幕后，React Native在主线程之外，在另一个背景线程里运行JavaScript引擎，两个线程之间通过一批量化的async消息协议来通信（有一个专门的React插件）。

UI方面React Native提供跨平台的类似Flexbox的布局系统，还支持CSS子集。可以用JSX或者普通JavaScript语言，还有CoffeeScript和TypeScript来开发。有评论说，React的UI层模型要比UIKit好很多。

更好的是，由于基于Web技术，开发起来可以像在浏览器里那样随时在仿真程序中查看应用运行情况，刷新一下就行，无需编译，爽吧。




## React Native比起标准Web开发或原生开发能够带来的三大好处

1.手势识别：基于Web技术（HTML5/JavaScript）构建的移动应用经常被抱怨缺乏及时响应。而基于原生UI的React Native能避免这些问题从而实现实时响应。

2.原生组件：使用HTML5/JavaScript实现的组件比起原生组件总是让人感觉差一截，而React Native由于采用了原生UI组件自然没有此问题。

3.样式和布局：iOS、Android和基于Web的应用各自有不同的样式和布局机制。React Native通过一个基于FlexBox的布局引擎在所有移动平台上实现了一致的跨平台样式和布局方案。