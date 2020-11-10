import React from 'react';
import * as Tools from '../utils/Tools';

const cnText = Tools.randomList(['颈椎病晚期', '穷困潦倒', '快交不起房租', '天天加班', '有可能会猝死'], 1)[0];
export default function Donate(props) {
  let text = <h4 className='lang'>Buy <a href='https://twitter.com/unbug' rel='noopener noreferrer' target='_blank'>@unbug</a> a drink</h4>;
  if (props.isZH) {
    text = <h4 className='lang cn'>给<a href='https://weibo.com/unbug/' rel='noopener noreferrer' target='_blank'>{cnText}的作者</a>打赏个红包吧</h4>;
  }
  return (
    <div className='donate'>
      
    </div>
  )
}
