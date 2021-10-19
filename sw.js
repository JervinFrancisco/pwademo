//Service workers get installed once in their life cycle
self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./", "./src/master.css", "./images/logo192.png"])
        })
    )
})