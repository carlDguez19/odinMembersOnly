const { createMessage } = require("./models/messages");

async function test(){
    const testMessage = await createMessage("testTitle", "this is a test message", 1);
    console.log(testMessage);
}

test();