## 结构伪类选择器

- `E F:nth-child(n)` 父元素E中的第n个子元素，如果是元素F，则有效；如果第n个元素不是F元素，则无效；
- `E F:nth-of-type(n)` 父元素E中的子元素F中的第n个（只会计算子元素F）
- eg 2-8.css 

## box-shadow的扩展半径
- `box-shadow: 0 0 0 10px #000`不计算到内容宽度中
- `border: 10px solid #000`计算到内容宽度中（是盒模型中的元素）

## background

- `background-attachment: scroll || fixed`fixed一般用在html和body上，在其他标签上不能达到固定效果
- `background: background-color || background-image || background-repeat || background-attachment || background-position`
- `background-origin: padding-box || border-box || content-box`用于控制背景图片position的起始位置（background-attachment为fixed时，无效）
- `background-clip`参数同上，用于剪切图片，控制背景图片image的展示区域(背景色也剪切)
- `background-size: auto || length || percentage || contian`

## 文本溢出截断

```
    .div {
        width: 100px;               //限制宽度
        text-overflow: ellipsis;    //使用省略标记(...)
        white-space: nowrap;        //强制不换行
        overflow: hidden;           //溢出隐藏
    }
```

## 盒模型

- **标准盒模型**

外盒尺寸：元素空间宽度/高度 = width/height + padding + border + margin

内盒尺寸：元素宽度/高度 = width/height + padding + border

>width = content（即设置的width为content的，后续的padding等会影响布局，盒子向外延伸）

- **IE传统盒模型IE6以下（不包括IE6）**

外盒尺寸：元素空间宽度/高度 = width/height + margin

内盒尺寸：元素宽度/高度 = width/height

>width = content + padding + border（即设置的width为元素的内盒尺寸大小，后续的padding等不会影响布局，content向内收缩）

- `box-sizing: content-box`默认值，维持标准盒模型
- `box-sizing: border-box`维持传统盒模型，拯救布局

- `textarea {resize: none}`禁止用户拖动textarea改变大小（右下角的阴影消失）

- `outline`和border类似，但是不影响布局。在元素获取到焦点或被激活时呈现