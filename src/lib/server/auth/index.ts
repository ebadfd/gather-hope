import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/sveltekit/providers/google';
import { env } from '$env/dynamic/private';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '../db';

export const { handle, signIn, signOut } = SvelteKitAuth(async () => {
	const authOptions = {
		adapter: DrizzleAdapter(db),
		providers: [
			Google({
				clientId: env.GOOGLE_CLIENT_ID,
				clientSecret: env.GOOGLE_CLIENT_SECRET,
				authorization: {
					params: {
						scope: 'openid profile email https://www.googleapis.com/auth/gmail.readonly'
					}
				}
			})
		],
		secret: env.AUTH_SECRET,
		trustHost: true
	};
	return authOptions;
});
