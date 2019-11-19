const div = dom.create('<div id="div2"><span>1221</span></div>')

const div2 = dom.clone(div)

// dom.after(test, div)

// dom.before(test, div2)

// dom.append(test, dom.create('<span>3333</span>'))

dom.wrap(test, div2)

// dom.remove(test)

// const nodes = dom.empty(empty)
// console.log(nodes)

dom.attr(test, 'title', 'jacky')
const title = dom.attr(test, 'title')
// console.log(title)

// const testText = dom.text(test)
// dom.text(test, 'Hi, I,m Jin Chao')
// console.log(dom.text(test))

// const testHtml = dom.html(test)
// dom.html(test, '<span>新加了一个span</span>')
// console.log(dom.html(test))

// dom.style(test, 'border', '1px solid red')

// console.log(dom.style(test, 'border'))

// dom.style(test, {
//   border: '1px solid blue',
//   color: 'red'
// })

dom.class.add(test, 'red, blue')
dom.class.remove(test, 'red, blue')

const fn = function () {
  console.log('点击了')
}

dom.on(test, 'click', fn)

dom.off(test, 'click', fn)

const testDOM = dom.find('#test')[0]

// console.log(testDOM)

// console.log(dom.find('span', testDOM)[0])

// console.log(dom.parent(testDOM))

// console.log(dom.siblings(dom.find('#sib2')[0]))

// console.log(dom.next(dom.find('#sib2')[0]))

// console.log(dom.prev(dom.find('#sib2')[0]))

const c = dom.find('#children')[0]

dom.each(c.children, (item) => {
  dom.style(item, 'color', 'blue')
})

// console.log(dom.index(c3))

const div3 = dom.find('#test3>.red')[0]
dom.style(div3, 'color', 'blue')

const reds = dom.find('.red')
dom.each(reds, (item) => {
  console.log(item)
})