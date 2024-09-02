export const Counter = ({handleCount}) => {
    const count = handleCount();
    return <p><b>{count.checked}</b>/ {count.total} items packed</p>
}