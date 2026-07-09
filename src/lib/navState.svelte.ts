// src/lib/navState.svelte.ts
import type { Action } from 'svelte/action';

// 1. Definiamo un tipo rigoroso per i nostri temi ammessi
export type Theme = 'light' | 'dark';

// 2. Tipizziamo lo stato globale in modo che accetti solo il tipo Theme
export const navState = $state<{ theme: Theme }>({ 
    theme: 'light' 
});

// 3. Usiamo il tipo 'Action' di Svelte. 
// Prende due parametri generici: il tipo dell'elemento HTML e il tipo del parametro in ingresso (Theme)
export const navTrigger: Action<HTMLElement, Theme> = (node, theme) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navState.theme = theme;
            }
        });
    }, {
        rootMargin: '-70px 0px -90% 0px'
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
};