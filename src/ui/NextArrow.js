function NextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "salmon" }}
            onClick={onClick}
        />
    )
}
  
export default NextArrow