exports.handler = async (event) => {
    console.log('Invoke Lambda', event);
    return {
        statusCode: 200,
        body: JSON.stringify('Hello world!'),
    };
};