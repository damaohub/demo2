import React, { Component } from 'react';
import { Flex, NavBar, Icon, Modal, WingBlank, ImagePicker, List } from 'antd-mobile';
import './icons/iconfont.css'
import './App.less';
import { fabric } from 'fabric';


function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
      files: data,
    };
  }
  componentDidMount() {
    const window_width =  document.documentElement.clientWidth
    const window_height =  document.documentElement.clientHeight
    const canvas_height = window_height-45-48-82
    const canvas = new fabric.Canvas('d', {
      width: window_width,
      height: canvas_height,
    })


    fabric.Image.fromURL("https://maochenhui.top/images/phone.png", function(img) {
      img.scale(0.6)
      img.width = 368
      img.height = 716
      canvas.add(img)
      img.center()
    // 　canvas.setActiveObject(img)
    })
    canvas.renderAll();
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          布菲盒子
        </NavBar>
        <Flex className="text-align-center actions">
          <Flex.Item>
            <i className="iconfont icon-zhongzhi"></i>
          </Flex.Item>
          <Flex.Item>
            <i className="iconfont icon-ZoomOut"></i>
          </Flex.Item>
          <Flex.Item>
            <i className="iconfont icon-ZoomIn"></i>
          </Flex.Item>
          <Flex.Item>
            <i className="iconfont icon-chexiao"></i>
          </Flex.Item>
          <Flex.Item>
            <i className="iconfont icon-chexiaoyou"></i>
          </Flex.Item>
          <Flex.Item onClick={this.showModal('modal3')}>
            <i className="iconfont icon-ziyuan"></i> 
          </Flex.Item>
          <Flex.Item>
            <i className="iconfont icon-ichaxun"></i>
          </Flex.Item>
        </Flex>
       
        <div className="main">
        <canvas id="d"></canvas>
        </div>

        <Flex className="text-align-center options" >
          <Flex.Item  onClick={this.showModal('modal1')}>
              <i className="iconfont icon-toggle"></i>
              <div className="txt">选择型号</div>
          </Flex.Item>
          <Flex.Item onClick={this.showModal('modal2')}>
              <i className="iconfont icon-tupianx"></i>
              <div className="txt">上传图片</div>
          </Flex.Item>
          <Flex.Item>
              <i className="iconfont icon-zi"></i>
              <div className="txt">添加文字</div>
          </Flex.Item>
          <Flex.Item>
              <i className="iconfont icon-jia"></i>
              <div className="txt">添加素材</div>
          </Flex.Item>
          <Flex.Item >
              <i className="iconfont icon-dui"></i>
              <div className="txt">确认提交</div>
          </Flex.Item>
        </Flex>


        <Modal
          popup
          visible={this.state.modal1}
          onClose={this.onClose('modal1')}
          animationType="slide-up"
          closable
          title={'选择手机型号'}
        >
        <WingBlank>
          <Flex wrap="wrap" className="text-align-center">
            <Flex.Item>
              ipnone XS Max
            </Flex.Item>
            <Flex.Item>
              ipnone XS 
            </Flex.Item>
            <Flex.Item>
              ipnone X
            </Flex.Item>
            </Flex>
            <Flex wrap="wrap" className="text-align-center">
            <Flex.Item>
              ipnone 6
            </Flex.Item>
            <Flex.Item>
              ipnone 6 Plus
            </Flex.Item>
            <Flex.Item>
              ipnone XS Max
            </Flex.Item>
            </Flex>
            <Flex wrap="wrap" className="text-align-center">
            <Flex.Item>
              ipnone 6
            </Flex.Item>
            <Flex.Item>
              ipnone 6 Plus
            </Flex.Item>
           </Flex>
          </WingBlank>
        </Modal>


        <Modal
          popup
          visible={this.state.modal0}
          onClose={this.onClose('modal0')}
          animationType="slide-up"
          closable
          title={'选择手机品牌'}
        >
        <WingBlank>
          <Flex wrap="wrap" className="text-align-center">
            <Flex.Item>
              苹果
            </Flex.Item>
            <Flex.Item>
              华为 
            </Flex.Item>
            <Flex.Item>
            小米
            </Flex.Item>
            </Flex>
            <Flex wrap="wrap" className="text-align-center">
            <Flex.Item>
            荣耀
            </Flex.Item>
            <Flex.Item>
            VIVO
            </Flex.Item>
            <Flex.Item>
            OPPO
            </Flex.Item>
            </Flex>
            <Flex wrap="wrap" className="text-align-center">
            <Flex.Item>
            三星
            </Flex.Item>
           </Flex>
          </WingBlank>
        </Modal>
        
        <Modal
          popup
          visible={this.state.modal2}
          onClose={this.onClose('modal2')}
          animationType="slide-up"
          closable
          title={'上传图片'}
        >
          <WingBlank>
            <ImagePicker
              files={this.state.files}
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={this.state.files.length < 4}
            
            />
          </WingBlank>
        </Modal>
        <Modal
          popup
          visible={this.state.modal3}
          onClose={this.onClose('modal3')}
          animationType="slide-up"
          closable
          title={'管理图层'}
        >
        <WingBlank>
          <List>
            <List.Item
              thumb={this.state.files[0].url}
        
            >
              上传图片1.jpg
            </List.Item>
          </List>

        </WingBlank>
        </Modal>

      </div>
    );
  }
}

export default App;
