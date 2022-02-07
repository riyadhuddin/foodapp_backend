module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e0bcc59556d23af55b07aa730279a3ca'),
  },
});
