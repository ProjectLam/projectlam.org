export const prerender = true
import { locale, loadTranslations } from '$lib/translations';
export const load = async ({ url,fetch }) => {
    const { pathname } = url;
    const defaultLocale = 'en'; // get from cookie, user session, ...
    const initLocale = locale.get() || defaultLocale; // set default if no locale already set
    await loadTranslations(initLocale, pathname); // keep this just before the `return`
    const response = await fetch(`/api/posts`)
    const posts = await response.json()
    return {
        posts,
    };
}
