import React, { useState, useEffect, useRef } from 'react';
import { Icon, Popup } from 'semantic-ui-react';

export default function NoticeContainer() {
  const listEl = useRef(null);
  const [activeIndex, setDisable] = useSliderEffect(listEl);

  return (
    <div className='notice-container' ref={listEl} onMouseEnter={() => setDisable(true)} onMouseLeave={() => setDisable(false)}>
      <a className='animated fadeIn' target='_blank' rel='noopener noreferrer'
        href='https://github.com/unbug/snts'>
        <Icon name='heartbeat' /> SAY NO TO SUICIDE PUBLIC LICENSE
      </a>
      <a className='animated fadeIn' target='_blank' rel='noopener noreferrer' href='//mihtool.com/'>
        <Icon name='code' /> [MIHTool] iOS 上调试和优化页面的工具
      </a>
      <a className='animated fadeIn' target='_blank' rel='noopener noreferrer' href='https://www.wasmrocks.com/'>
        <Icon name='hand rock' /> WebAssembly Rocks
      </a>
      <a className='animated fadeIn' target='_blank' rel='noopener noreferrer'
        href='https://github.com/unbug/react-native-train/blob/master/README.md'>
        <Icon name='video' /> [开源] React Native 开发培训资料和视频
      </a>
    </div>
  )
}

function useSliderEffect(el) {
  const [disable, setDisable] = useState(false);
  const [active, setActive] = useState(1);
  useEffect(() => {
    let interval = 0;
    const delay = setTimeout(() => {
      interval = setInterval(() => {
        !disable && renderItem(el.current.children);
      }, 5000);
    }, 15000);

    return () => {
      clearTimeout(delay);
      clearInterval(interval);
    };
  }, [disable]);

  function renderItem(list) {
    Array.prototype.forEach.call(list, (item, i) => {
      if (i === active) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
    const index = (active + 1) % list.length;
    setActive(index);
  }
  return [active, setDisable];
}
