function customrender(reactElement,container){
    const dom = document.createElement(reactElement.type)
    dom.innerHTML = reactElement.Children
    /*
    dom.setAttribute('href',reactElement.props.href)
    dom.setAttribute('target',reactElement.props.target)
    this method is not optimized*/
    for(const prop in reactElement.props){
        if(prop ==='children') continue
        dom.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(dom)
}

const  reactElement = {
    type : 'a',
    props:{
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}/* same as <a href="https://google.com" target="_blank">Visit google</a>*/
const container = document.getElementById('root');

customrender(reactElement,container)

