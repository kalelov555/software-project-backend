module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'db9968b26e14b35d9ee2cf83fe67205d'),
  },
});
