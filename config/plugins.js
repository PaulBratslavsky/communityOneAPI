module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'strapi-provider-upload-google-cloud-storage',
        providerOptions: {
          serviceAccount: env.json('GCS_SERVICE_ACCOUNT'),
          bucketName: env('GCS_BUCKET_NAME'),
          basePath: env('GCS_BASE_PATH'),
          baseUrl: env('GCS_BASE_URL'),
          publicFiles: env('GCS_PUBLIC_FILES'),
          uniform: env('GCS_UNIFORM'),
        },
      },
    },
    email: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        }
      },
      settings: {
        defaultFrom: env('SMTP_FROM'),
        defaultReplyTo: env('SMTP_TO'),
      },
    },

    // ...
  });

/*
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY', "api key"),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
*/