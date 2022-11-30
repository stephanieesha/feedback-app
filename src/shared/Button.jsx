

function Button({ children, version, type, isDisabled }) {
    return (
        <div>
            <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</button>
        </div >
  )
}

// Button.defaultProps= {
//     version: 'primary',
//     type: 'button',
//     isDisabled: false
// }

export default Button
