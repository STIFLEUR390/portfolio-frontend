import { useLogtoUser } from "#imports";

export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useLogtoUser();
    const isAuthRoute = to.path.startsWith("/auth");
    const isAdminRoute = to.path.startsWith("/admin");
    const isAuthenticated = user?.username;

    // Redirection vers /auth si non connecté et sur route admin
    if (!isAuthenticated && isAdminRoute) {
        return navigateTo("/auth");
    }

    // Redirection vers /admin si connecté et sur route auth (sauf callback)
    if (isAuthenticated && isAuthRoute && to.path !== "/auth/callback") {
        return navigateTo("/admin");
    }

    // Continue la navigation dans les autres cas
    return;
});
