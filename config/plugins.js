module.exports = ({ env }) => {
  console.log(env('GCS_BUCKET_NAME'), 'env'  );

  return {
    // ...
    upload: {
      config: {
        provider: 'strapi-provider-upload-google-cloud-storage',
        providerOptions: {
          serviceAccount: `{
            "type": "service_account",
            "project_id": "devhunt",
            "private_key_id": "adfa81d20fbc75fa697164241dd8e90fa82be7d3",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDwVDzaKLG6XQT8\nX0zo0rCepQk5/U2nYbIJoU9uWWB1pch/VYg8Hh0LgL+9f2SX1OR+oTfM1w51OINo\nFcG9DwAeyJTGSD7VsecahhTJ4O1gLtrYXT7WkYQhpremrK4fumzOVhU3NAmJN4qM\no3Pz135Yv/bgIvKjqr487UbkJ71IHHJmj1+88EbsRc8M/XTHa8DCcomX22+VCNWc\nHV+aafyjbbZUv2R7ZiowHZRniwRaRHV8EJuB3S6oFges1MHcXqiiQLf1S8u+pZYj\nmjw/NPkTczaxBKKHHFxWXewu1zf+jzaegKzJBmFH3vNxJX2LH+2+p4j6uUe0vbPG\nvcviKwwXAgMBAAECggEAYNcQzjenphjlcWxVaVu8n7CQzzUqnU/YldjSUPziyYVM\nDUNB6jeYLJJssMcsmaHHkN8VxQzDXqivCrn5n1z0B3N7v4pNB37wSNfOeKqR/Dfl\nJ1orf/qS65xqVFcwsshEH8DAO8ZUMV6YDaOvjYo/9zMjH531d83Nam+SKU16EBve\ndEVqhvOZbItKCLyZIpcLo4Lk2jldP0EwZS3RaKcSVyx7yyQwnSMfW1lPwmMsH/E7\nOdo5R42nUQkUPsbKjjCmCGHMWL75CaXUiee5yvEeKhy4+ptz2C8w6n/DQXApEvtR\n95Ek4NkdkJJU3Gk3YsgSK44lySMLCBuF2WJvjwXgAQKBgQD6xzHgidplp/NGCPNl\nxi5KUX2XfblQ+g9yUuQqJ2JcycdIQq6619PdwpK7ZwVNE3XRa3vtfmumVWLaSOsV\n7O6DmFIkooqXq4b12mXoiscF9wAzGFlHUiQZCKcEQfOWAJKumUQhBpmwRTnbUu/o\nZP6jO0n3BQcRoYC/YAf1kuAeFwKBgQD1VVfFCCPCFuic1INVCtrVVyVpj3y0qblp\nHkbfJgQHKrQgwS2he6xj3Q5YngCmkpnzwjM+ZgXSyTIoHj3Ni3EwgaycN5RIit8N\nBEvxzti6d3e2+zIAg1h+nVqj+lmkmTQWnG7pbFxrvWRJEM+4PcnrUkWX8C6QjE+q\nItlsq19CAQKBgCXmzzoBe7mbfaAbIDZEkqB22oV34fdEI+uCbauVUj9126GnOmNQ\n1VuR2b1rH5j7lPX2yb8mOTzlcNBO7wDcU1wePGP/EPVFXltwC7DusI/NOgF+75dg\n6cXC0gNJuHf2VDUBQxO+vKGwhMMKMOotwXKINnCYGO5oO14xNGLANRE3AoGAHk6M\nqSp4QGHUGoumLbtJjVFWrdOr9CWDYhj7aFWp6bi8x88Vc/1zLmMAgrICIpG5swMq\nkWrJDWENcSdLOzkeon9ic2nqR4vgQhtlxllnLKHViCU/6BBRvlJyAA/NQygp5yEs\nEmnwgN7EpMIO5xO6/fcL4dkp53Ft5faoJWSGQAECgYEAutn8lPalBzWwOjLnvAaZ\nnE44PdHjdSkfX3weXKfpUO51FOdBMozdMn4VYHBesfxePa6DLbD25S9MYcrYBELz\nOPE2OxUWKcChLHa2nu1aLOIudo3jyaOY915B6CWFuYZPjHMSSAYGyRizF9oA5Ygz\nltveVSi2RmsyCHJQPCCJh6s=\n-----END PRIVATE KEY-----\n",
            "client_email": "devhunt@devhunt.iam.gserviceaccount.com",
            "client_id": "100203247300350702666",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/devhunt%40devhunt.iam.gserviceaccount.com"
          }`,
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
  }};

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