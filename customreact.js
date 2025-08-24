function customrender(reactElement,container){
    const dom = document.createElement(reactElement.type)
    dom.innerHTML = reactElement.Children
    dom.setAttribute('href',reactElement.props.href)
    dom.setAttribute('target',reactElement.props.target)

    container.appendChild(dom)
}

const  reactElement = {
    type : 'a',
    props:{
        href: "https://google.com",
        target: '_blank'
    },
    Children: 'Click me to visit google'
}
const container = document.getElementById('root');

customrender(reactElement,container)

