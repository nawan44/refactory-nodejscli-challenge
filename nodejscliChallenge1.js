const { program } = require("@caporal/core")

program.action(({ logger }) => {
    logger.info("Hello World")
    //
})

program.run()