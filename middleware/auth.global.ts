/**
 * Middleware d'authentification pour gérer les redirections basées sur l'état de connexion de l'utilisateur
 * 
 * Ce middleware effectue les vérifications suivantes :
 * - Redirige les utilisateurs non connectés vers la page d'authentification
 * - Empêche les utilisateurs connectés d'accéder aux pages d'authentification
 * - Gère l'accès aux routes administratives
 */

import { useLogtoUser } from "#imports";

export default defineNuxtRouteMiddleware((to, _from) => {
    // Récupère l'état de connexion de l'utilisateur
    const user = useLogtoUser();

    // Vérifie si la route actuelle est une route d'authentification ou d'administration
    const isAuthRoute = to.path.startsWith("/auth");
    // const isAdminRoute = to.path.startsWith("/admin");

    // Redirige vers la page d'authentification si l'utilisateur n'est pas connecté
    // et tente d'accéder à une page protégée
    if (!user && !isAuthRoute) {
        return navigateTo("/auth");
    }

    // Redirige vers la page d'accueil si l'utilisateur est connecté
    // et tente d'accéder aux pages d'authentification
    if (user && isAuthRoute && to.path !== "/auth/callback") {
        return navigateTo("/");
    }
});
