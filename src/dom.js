window.dom = {
  /**
   * 创建元素
   * @param {*} string 需要创建的字符串
   */
  create(string) {
    const container = document.createElement('template')
    container.innerHTML = string.trim()
    return container.content.firstChild
  },

  /**
   * 在元素后面插入一个元素
   * @param {*} node 插入的元素
   * @param {*} node2 目标元素
   */
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling)
  },

  /**
   * 在元素前面插入一个元素
   * @param {*} node  插入的元素
   * @param {*} node2 目标元素
   */
  before(node, node2) {
    node.parentNode.insertBefore(node2, node)
  },

  /**
   * 拷贝元素
   * @param {*} node 拷贝的元素 
   * @param {*} bFlag 是否深拷贝，默认为true
   */
  clone(node, bFlag = true) {
    return node.cloneNode(bFlag)
  },

  /**
   * 插入元素
   * @param {*} parent 需要插入到的目标 
   * @param {*} node 需要插入的元素
   */
  append(parent, node) {
    parent.appendChild(node)
  },

  /**
   * 新增父元素
   * @param {*} node 目标元素
   * @param {*} parent  新增父级元素
   */
  wrap(node, parent) {
    dom.before(node, parent)
    dom.append(parent, node)
  },

  /**
   * 删除元素
   * @param {*} node 需要删除的元素
   * @returns 返回删除的元素
   */
  remove(node) {
    node.parentNode.removeChild(node)
    return node
  },

  /**
   * 移除所有子级元素
   * @param {*} node 节点
   */
  empty(node) {
    let x = node.firstChild
    const array = []
    while (x) {
      array.push(dom.remove(x))
      x = node.firstChild
    }
    return array
  },

  /**
   * 查询属性值和设置属性值
   * @param {*} node 需要查属性的元素
   * @param {*} name 属性名称
   * @param {*} value 属性值
   */
  attr(node, name, value) {
    if (arguments.length === 2) {
      return node.getAttribute(name)
    } else if (arguments.length === 3) {
      node.setAttribute(name, value)
    }
  },

  /**
   * 获取和设置文本
   * @param {*} node 
   * @param {*} string 
   */
  text(node, string) {
    if (arguments.length === 2) {
      if ('innerText' in node) {
        node.innerText = string
      } else {
        node.textContent = string
      }
    } else if (arguments.length === 1) {
      if ('innerText' in node) {
        return node.innerText
      } else {
        return node.textContent
      }
    }
  },

  /**
   * 设置获取HTML
   * @param {*} node 
   * @param {*} string 
   */
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string
    } else if (arguments.length === 1) {
      return node.innerHTML
    }
  },

  /**
   * 设置获取样式
   * @param {*} node 
   * @param {*} name 
   * @param {*} value 
   */
  style(node, name, value) {
    if (arguments.length === 3) {
      node.style[name] = value
    } else if (arguments.length === 2) {
      if (typeof name === 'string') {
        // 获取style
        return node.style[name]
      } else if (name instanceof Object) {
        const object = name
        for (let key in object) {
          node.style[key] = object[key]
        }
      }
    }
  },

  /**
   * 添加class ,删除 class ,检测 class 是否存在
   */
  class: {
    add(node, className) {
      className = className.replace(/\s+/g, "");
      const a = className.split(',')
      node.classList.add(...a)
    },
    remove(node, className) {
      className = className.replace(/\s+/g, "");
      const a = className.split(',')
      node.classList.remove(...a)
    },
    has(node, className) {
      return node.classList.contains(className)
    }
  },

  /**
   * 事件绑定
   * @param {*} node 
   * @param {*} eventName 
   * @param {*} fn 
   */
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn)
  },

  /**
   * 取消事件绑定
   * @param {*} node 
   * @param {*} eventName 
   * @param {*} fn 
   */
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn)
  },

  /**
   * 查找元素
   * @param {*} selector 
   */
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector)
  },

  /**
   * 查找父元素
   * @param {*} node 
   */
  parent(node) {
    return node.parentNode
  },

  /**
   * 获取子级
   * @param {*} node 
   */
  children(node) {
    return node.children
  },

  /**
   * 获取兄弟节点
   * @param {*} node 
   */
  siblings(node) {
    return Array.from(node.parentNode.children).filter(item => item !== node)
  },

  /**
   * 获取下一个节点
   * @param {*} node 
   */
  next(node) {
    let x = node.nextSibling
    while (x && x.nodeType === 3) {
      x = x.nextSibling
    }
    return x
  },

  /**
   * 获取上一个节点
   * @param {*} node 
   */
  prev(node) {
    let x = node.previousSibling
    while (x && x.nodeType === 3) {
      x = x.previousSibling
    }
    return x
  },

  /**
   * 查询子级并做一些操作
   * @param {*} nodeList 
   * @param {*} fn 
   */
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i])
    }
  },

  /**
   * 查询下标
   * @param {*} node 
   */
  index(node) {
    const nodes = dom.children(node.parentNode)
    let i = 0;
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i] === node) {
        break;
      }
    }
    return i
  }
}