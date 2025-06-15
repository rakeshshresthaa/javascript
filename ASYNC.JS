async function getResult() {
    const result = await new Promise(function(resolve, reject) {
        const gift = "pen";

        if (gift.startsWith("pen")) {
            resolve("You got a pen");
        } else {
            reject("You got a wrong gift");
        }
    });
    try {
        const message = await result;
        console.log(message);
    } catch (error) {
        console.log("Error: ", error);
    } finally {
        console.log("Finally block executed");
    }
}
getResult();