export interface BasicBoxProps {
  /**
   * 标题
   */
  title: string;
  /**
   * 内容
   */
  content?: string;
  /**
   * 尺寸
   */
  size?: 'small' | 'large';
  /**
   * 标题背景图片
   */
  titleBgImg?: string;
  titleLargeBgImg?: string;
  /**
  /**
   * 内容背景图片
   */
  contentBgImg?: string;
  /**
   * 标题背景颜色
   */
  titleBgColor?: string;
  /**
   * 内容背景颜色
   */
  contentBgColor?: string;
  /**
   * 标题字体颜色
   */
  titleColor?: string;
  /**
   * 内容字体颜色
   */
  contentColor?: string;
  /**
   * 标题字体大小
   */
  titleSize?: string;
  /**
   * 内容字体大小
   */
  contentSize?: string;
  /**
   * 标题高度
   */
  titleHeight?: string;
  /**
   * 高度
   */
  height?: string | number;
  /**
   * 宽度
   */
  width?: string | number;
}
