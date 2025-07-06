<script setup lang="ts">
const articles = [
  {
    title: "Automatiser vos workflows avec n8n et Flowaise IA",
    date: "28 Juin 2025",
    category: "Automatisation",
    content: `Un guide étape par étape pour connecter vos outils, automatiser vos tâches et intégrer l'IA dans vos processus métiers.\n\nDétail complet de l'article, explications, exemples, etc.`,
  },
  {
    title: "Créer une API REST sécurisée avec Laravel et Vue.js",
    date: "15 Juin 2025",
    category: "API & Backend",
    content: `Les bonnes pratiques pour concevoir, documenter et sécuriser une API performante, avec exemples concrets.\n\nDétail complet de l'article, explications, exemples, etc.`,
  },
  {
    title: "Concevoir des interfaces modernes avec Tailwind CSS & Shadcn",
    date: "2 Juin 2025",
    category: "UI/UX Design",
    content: `Astuces et exemples pour créer des interfaces élégantes, accessibles et responsives, adaptées à tous les écrans.\n\nDétail complet de l'article, explications, exemples, etc.`,
  },
];

const showModal = ref(false);
const currentIdx = ref(0);

function openModal(idx) {
  currentIdx.value = idx;
  showModal.value = true;
}

const currentArticle = computed(() => articles[currentIdx.value] || {});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Blog & Ressources
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Découvrez mes derniers articles techniques, tutoriels et retours
        d'expérience sur le développement web, l'automatisation et le design.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Article 1 -->
      <article
        v-for="(article, idx) in articles"
        :key="article.title"
        class="blog-card bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden"
      >
        <div
          :class="[
            'h-48 flex items-center justify-center',
            idx === 0
              ? 'bg-gradient-to-r from-blue-500 to-purple-600'
              : idx === 1
              ? 'bg-gradient-to-r from-green-500 to-teal-600'
              : 'bg-gradient-to-r from-purple-500 to-pink-600',
          ]"
        >
          <FontAwesomeIconComponent
            :icon="
              idx === 0
                ? 'fa-solid-bolt'
                : idx === 1
                ? 'fa-solid-code-branch'
                : 'fa-solid-palette'
            "
            class="text-white text-4xl"
          />
        </div>
        <div class="p-6">
          <span
            :class="[
              'text-sm font-medium',
              idx === 0
                ? 'text-primary-600'
                : idx === 1
                ? 'text-green-600'
                : 'text-purple-600',
            ]"
            >{{ article.category }}</span
          >
          <h3
            class="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-3"
          >
            {{ article.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ article.content.split("\n")[0] }}
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">{{ article.date }}</span>
            <a
              href="#"
              class="text-primary-600 hover:text-primary-800 font-medium"
              @click.prevent="openModal(idx)"
            >
              {{
                idx === 0
                  ? "Lire le tutoriel"
                  : idx === 1
                  ? "Lire l'article"
                  : "Lire le guide"
              }}
            </a>
          </div>
        </div>
      </article>
    </div>

    <div class="text-center mt-12">
      <a
        href="#"
        class="cta-button bg-primary-600 text-white px-8 py-4 rounded-full font-semibold"
      >
        Voir plus d'articles
      </a>
    </div>

    <!-- Modal Nuxt UI -->
    <UModal
      :dismissible="false"
      v-model:open="showModal"
      :title="currentArticle.title"
    >
      <template #body>
        <div class="mb-2 text-sm text-gray-500">{{ currentArticle.date }}</div>
        <div class="whitespace-pre-line text-gray-700 dark:text-gray-300">
          {{ currentArticle.content }}
        </div>
      </template>
    </UModal>
  </div>
</template>