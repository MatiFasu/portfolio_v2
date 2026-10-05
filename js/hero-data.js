/**
 * ============================================================
 * CONFIGURACIÓN DE TEXTOS - HERO JOURNEY (INICIO)
 * ============================================================
 * Editá este archivo para modificar textos, métricas y enlaces fácilmente.
 * Está preparado con soporte bilingüe (ES / EN) para implementar
 * un selector de idioma de forma directa.
 */

const HERO_JOURNEY_CONFIG = {
    // Idioma por defecto
    defaultLang: 'es',

    es: {
        headline: {
            prefix: "Analista Técnico PeopleSoft",
            highlight: "en transición a",
            suffix: "Backend Developer"
        },
        eyebrow: "Recorrido Profesional",
        cards: {
            // TARJETA 1: DÓNDE ESTOY (Experiencia)
            current: {
                step: "01",
                badge: "Dónde estoy",
                title: "Analista Técnico PeopleSoft",
                // Máximo 6 a 8 palabras
                summary: "Desarrollo y mantenimiento en módulos core.",
                stack: ["PeopleCode", "SQR", "SQL"],
                // ============================================================
                // COMPLETAR: Años de experiencia o cantidad de módulos
                // Ejemplos: "+2 años de experiencia" | "3 módulos críticos"
                // ============================================================
                keyMetricLabel: "Dato clave",
                keyMetricValue: "+2 años de experiencia",
                statusLabel: "Rol actual"
            },

            // TARJETA 2: QUÉ LOGRÉ (Proyecto crítico)
            project: {
                step: "02",
                badge: "Qué logré",
                title: "Migración DB2 → Oracle",
                // Máximo 6 a 8 palabras
                summary: "Transición de datos asegurando continuidad operativa.",
                diagram: {
                    source: "DB2",
                    target: "Oracle"
                },
                // ============================================================
                // COMPLETAR: Tu rol o un número representativo
                // Ejemplos: "Ejecución técnica integral" | "+150 tablas migradas"
                // ============================================================
                keyMetricLabel: "Impacto",
                keyMetricValue: "Ejecución técnica e integridad de datos",
                // ============================================================
                // COMPLETAR: Destino de navegación (tab interno o URL externa)
                // ============================================================
                actionTarget: "experience", // Navega a la pestaña 'experience'
                actionLabel: "Ver caso de estudio"
            },

            // TARJETA 3: ADÓNDE VOY (Objetivo Backend)
            target: {
                step: "03",
                badge: "Adónde voy",
                title: "Backend Developer",
                // Máximo 6 a 8 palabras
                summary: "Construcción de APIs REST y microservicios.",
                path: ["SQL / PeopleSoft", "APIs & Spring Boot", "Docker"],
                // ============================================================
                // COMPLETAR: Tu foco principal o tecnologías objetivo
                // Ejemplos: "Java • Spring Boot • Microservicios"
                // ============================================================
                keyMetricLabel: "Stack objetivo",
                keyMetricValue: "Java • Spring Boot • Microservicios",
                // ============================================================
                // COMPLETAR: Enlace o pestaña a tu proyecto destacado
                // ============================================================
                actionTarget: "projects", // Navega a la pestaña 'projects'
                actionLabel: "Ver proyecto propio"
            }
        }
    },

    en: {
        headline: {
            prefix: "PeopleSoft Technical Analyst",
            highlight: "transitioning to",
            suffix: "Backend Developer"
        },
        eyebrow: "Professional Journey",
        cards: {
            current: {
                step: "01",
                badge: "Where I am",
                title: "PeopleSoft Technical Analyst",
                summary: "Development and maintenance of core modules.",
                stack: ["PeopleCode", "SQR", "SQL"],
                keyMetricLabel: "Key metric",
                keyMetricValue: "+2 years experience",
                statusLabel: "Current role"
            },
            project: {
                step: "02",
                badge: "What I achieved",
                title: "DB2 → Oracle Migration",
                summary: "Data transition ensuring operational continuity.",
                diagram: {
                    source: "DB2",
                    target: "Oracle"
                },
                keyMetricLabel: "Impact",
                keyMetricValue: "Technical execution & data integrity",
                actionTarget: "experience",
                actionLabel: "View case study"
            },
            target: {
                step: "03",
                badge: "Where I'm going",
                title: "Backend Developer",
                summary: "Building REST APIs and microservices.",
                path: ["SQL / PeopleSoft", "APIs & Spring Boot", "Docker"],
                keyMetricLabel: "Target stack",
                keyMetricValue: "Java • Spring Boot • Microservices",
                actionTarget: "projects",
                actionLabel: "View featured project"
            }
        }
    }
};

/**
 * Función para aplicar el idioma dinámicamente si se desea cambiar entre ES y EN.
 */
function setHeroLanguage(lang = 'es') {
    const data = HERO_JOURNEY_CONFIG[lang] || HERO_JOURNEY_CONFIG.es;

    // Actualizar Headline
    const headlinePrefix = document.querySelector('[data-i18n="hero.headlinePrefix"]');
    const headlineHighlight = document.querySelector('[data-i18n="hero.headlineHighlight"]');
    const headlineSuffix = document.querySelector('[data-i18n="hero.headlineSuffix"]');
    const eyebrow = document.querySelector('[data-i18n="hero.eyebrow"]');

    if (headlinePrefix) headlinePrefix.textContent = data.headline.prefix;
    if (headlineHighlight) headlineHighlight.textContent = data.headline.highlight;
    if (headlineSuffix) headlineSuffix.textContent = data.headline.suffix;
    if (eyebrow) eyebrow.textContent = data.eyebrow;

    // Actualizar textos en tarjetas con atributos data-i18n
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
        const key = el.dataset.i18nKey; // ej: "current.summary"
        const parts = key.split('.');
        if (parts.length === 2 && data.cards[parts[0]] && data.cards[parts[0]][parts[1]]) {
            el.textContent = data.cards[parts[0]][parts[1]];
        }
    });
}

// Exponer globalmente para fácil integración
window.HERO_JOURNEY_CONFIG = HERO_JOURNEY_CONFIG;
window.setHeroLanguage = setHeroLanguage;
