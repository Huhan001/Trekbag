
export const Button = ({text, style, onRemoveAll, onPackedAll, onResetAll, onUnpacked}) => {
    return (
        <button onClick={
                    text === 'Mark all as complete' ? onPackedAll :
                    text === 'Remove all items' ? onRemoveAll :
                    text === 'Reset to initial' ? onResetAll :
                    text === 'Mark all as incomplete'? onUnpacked : null }
                className= {style}>
            {text}
        </button>
    )
}