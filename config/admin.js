module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '928a9437e85de8b0e8f3b4f4e4d48eec'),
  },
});
