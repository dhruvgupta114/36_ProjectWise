module.exports = {
    apps: [
        {
            name:"projectwise",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
            }
        }
    ]
}