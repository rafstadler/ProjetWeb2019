export default {
    'secret':'my secret',
    'database': process.env.NODE_ENV == 'test' ? 'mongodb://localhost/montagne-api-test' : 'mongodb://localhost/montagne-api'
  };