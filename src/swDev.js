export default function swDev() {
    if ('serviceWorker' in navigator) {
        let swURL = `${process.env.PUBLIC_URL}/sw.js`
        navigator.serviceWorker.register(swURL)
            .then(res => {
                console.warn("response sw", res)
            })
    }
}
