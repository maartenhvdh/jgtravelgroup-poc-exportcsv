const NEXT_PUBLIC_KONTENT_ENVIRONMENT_ID = process.env.NEXT_PUBLIC_KONTENT_ENVIRONMENT_ID;
const KONTENT_PREVIEW_API_KEY = process.env.KONTENT_PREVIEW_API_KEY;

if (!NEXT_PUBLIC_KONTENT_ENVIRONMENT_ID) {
  throw new Error(`Environment variable NEXT_PUBLIC_KONTENT_ENVIRONMENT_ID is missing`);
}

export const defaultEnvId = NEXT_PUBLIC_KONTENT_ENVIRONMENT_ID;
export const defaultPreviewKey = KONTENT_PREVIEW_API_KEY;

// Domains
const NEXT_PUBLIC_KONTENT_DAPI_DOMAIN = process.env.NEXT_PUBLIC_KONTENT_DAPI_DOMAIN;
const NEXT_PUBLIC_KONTENT_PREVIEW_DAPI_DOMAIN = process.env.NEXT_PUBLIC_KONTENT_PREVIEW_DAPI_DOMAIN;
const NEXT_PUBLIC_KONTENT_MAPI_DOMAIN = process.env.NEXT_PUBLIC_KONTENT_MAPI_DOMAIN;
const NEXT_PUBLIC_KONTENT_IAPI_DOMAIN = process.env.NEXT_PUBLIC_KONTENT_IAPI_DOMAIN;
const NEXT_PUBLIC_KONTENT_AUTH_DOMAIN = process.env.NEXT_PUBLIC_KONTENT_AUTH_DOMAIN;
const NEXT_PUBLIC_KONTENT_DOMAIN = process.env.NEXT_PUBLIC_KONTENT_DOMAIN;

export const deliveryApiDomain = NEXT_PUBLIC_KONTENT_DOMAIN ? `https://deliver.${NEXT_PUBLIC_KONTENT_DOMAIN}` : NEXT_PUBLIC_KONTENT_DAPI_DOMAIN;

export const deliveryPreviewApiDomain = NEXT_PUBLIC_KONTENT_DOMAIN ? `https://preview-deliver.${NEXT_PUBLIC_KONTENT_DOMAIN}` : NEXT_PUBLIC_KONTENT_PREVIEW_DAPI_DOMAIN;

export const managementApiDomain = NEXT_PUBLIC_KONTENT_DOMAIN ? `https://manage.${NEXT_PUBLIC_KONTENT_DOMAIN}` : NEXT_PUBLIC_KONTENT_MAPI_DOMAIN;

export const internalApiDomain = NEXT_PUBLIC_KONTENT_DOMAIN ? `https://app.${NEXT_PUBLIC_KONTENT_DOMAIN}` : NEXT_PUBLIC_KONTENT_IAPI_DOMAIN;

export const authApiDomain = NEXT_PUBLIC_KONTENT_DOMAIN ? `login.${NEXT_PUBLIC_KONTENT_DOMAIN}` : NEXT_PUBLIC_KONTENT_AUTH_DOMAIN;