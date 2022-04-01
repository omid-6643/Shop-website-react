// domain/.netlify/functions/hello

const items = [
  { id: 1, name: "omid" },
  { id: 2, name: "helen" },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'hello world!',
  };
};
