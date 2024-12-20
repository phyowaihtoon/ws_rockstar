function Element(props) {
    return ( <p>{props.content}</p> )
}

ReactDOM.render(
    <Element content="A React Component with webpack" />,
    document.getElementById("app")
)