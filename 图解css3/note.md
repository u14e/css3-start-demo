## 一、基本选择器

- `*` 通配选择器
- `Element` 元素选择器
- `#id` ID选择器
- `.class` 类选择器
- `selector1, selectorN` 群组选择器

## 二、层次选择器

- `E F` 后代选择器
- `E > F` 子选择器
- `E + F` 相邻兄弟选择器（紧邻E元素的后面一个F元素）
- `E ~ F` 通用选择器（E元素后面的所有F元素）

## 结构伪类选择器

- `E F:nth-child(n)` 父元素E中的第n个子元素，如果是元素F，则有效；如果第n个元素不是F元素，则无效；
- `E F:nth-of-type(n)` 父元素E中的子元素F中的第n个（只会计算子元素F）
- eg 2-8.css 

## box-shadow的扩展半径
- `box-shadow: 0 0 0 10px #000`不计算到内容宽度中
- `border: 10px solid #000`计算到内容宽度中（是盒模型中的元素）