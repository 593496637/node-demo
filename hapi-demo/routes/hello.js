const index = {
  method: 'GET',
  path: '/',
  handler: (request, h) => {

    return {
      msg: 'Hello World!'
    };
  }
}

const hello = {
  method: 'GET',
  path: '/hello/{name}',
  handler: (request, h) => {

    return 'Hello World!' + encodeURIComponent(request.params.name);
  }
}



module.exports = [index, hello]