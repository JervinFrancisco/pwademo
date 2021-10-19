//Service workers get installed once in their life cycle
self.addEventListener("install", e =>{
    e.waitUntill(
        caches.open("static").then(cache =>{
            return cache.addAll(["./", "./src/master.css", "./images/logo192.png"])
        })
    )
})