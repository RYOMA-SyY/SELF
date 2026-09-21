// Simple EN / FR / ES / DE language switcher.
// Applies synchronously on load (script sits at the end of <body>), so the
// typed hero strings are already translated before main.js initialises them.
// On switch we persist to localStorage and reload for a clean typed restart.
(function () {
    var STORE_KEY = "site-lang";

    var I18N = {
        en: {
            "nav.home": "01 : Home",
            "nav.resume": "02 : Resume",
            "nav.certs": "03 : Certifications",
            "hero.hello": "Hello, I am Ali",
            "home.hi": "Hi there!",
            "home.intro": "I am a passionate developer who embraces the Bushido spirit — discipline, honor, and continuous improvement. Every line of code is a stroke of the sword.",
            "home.currently": "Currently, I am:",
            "home.li1": "Developing games with Godot 4 and GDScript",
            "home.li2": "Building RAG systems and LLM pipelines",
            "home.li3": "Designing mobile apps with React Native",
            "home.li4": "Exploring Flutter & Dart for mobile",
            "home.li5": "Studying Advanced React & Django REST Framework",
            "home.li6": "Integrating WebSockets & Docker",
            "home.li7": "Learning reverse engineering with Ghidra & Assembly (starter)",
            "home.li8": "Making mods for Minecraft and Black Ops 2",
            "home.links": "Links",
            "resume.title": "Resume",
            "resume.skills": "Skills",
            "resume.main": "Main Projects",
            "resume.other": "Other Projects",
            "resume.edu": "Education",
            "resume.exp": "Experience",
            "certs.title": "Certifications",
            "certs.coursera": "Coursera Certifications",
            "certs.other": "Other Achievements"
        },
        fr: {
            "nav.home": "01 : Accueil",
            "nav.resume": "02 : CV",
            "nav.certs": "03 : Certifications",
            "hero.hello": "Bonjour, je suis Ali",
            "home.hi": "Salut !",
            "home.intro": "Je suis un développeur passionné qui suit l'esprit Bushido — discipline, honneur et amélioration continue. Chaque ligne de code est un coup de sabre.",
            "home.currently": "Actuellement :",
            "home.li1": "Je développe des jeux avec Godot 4 et GDScript",
            "home.li2": "Je construis des systèmes RAG et des pipelines LLM",
            "home.li3": "Je conçois des applications mobiles avec React Native",
            "home.li4": "J'explore Flutter & Dart pour le mobile",
            "home.li5": "J'étudie React avancé & Django REST Framework",
            "home.li6": "J'intègre WebSockets & Docker",
            "home.li7": "J'apprends le reverse engineering avec Ghidra & Assembly (débutant)",
            "home.li8": "Je crée des mods pour Minecraft et Black Ops 2",
            "home.links": "Liens",
            "resume.title": "CV",
            "resume.skills": "Compétences",
            "resume.main": "Projets principaux",
            "resume.other": "Autres projets",
            "resume.edu": "Éducation",
            "resume.exp": "Expérience",
            "certs.title": "Certifications",
            "certs.coursera": "Certifications Coursera",
            "certs.other": "Autres réussites"
        },
        es: {
            "nav.home": "01 : Inicio",
            "nav.resume": "02 : Currículum",
            "nav.certs": "03 : Certificaciones",
            "hero.hello": "Hola, soy Ali",
            "home.hi": "¡Hola!",
            "home.intro": "Soy un desarrollador apasionado que sigue el espíritu Bushido — disciplina, honor y mejora continua. Cada línea de código es un golpe de espada.",
            "home.currently": "Actualmente:",
            "home.li1": "Desarrollo juegos con Godot 4 y GDScript",
            "home.li2": "Construyo sistemas RAG y pipelines LLM",
            "home.li3": "Diseño apps móviles con React Native",
            "home.li4": "Estoy explorando Flutter y Dart para móvil",
            "home.li5": "Estudio React avanzado y Django REST Framework",
            "home.li6": "Integro WebSockets y Docker",
            "home.li7": "Aprendiendo ingeniería inversa con Ghidra y Assembly (principiante)",
            "home.li8": "Creando mods para Minecraft y Black Ops 2",
            "home.links": "Enlaces",
            "resume.title": "Currículum",
            "resume.skills": "Habilidades",
            "resume.main": "Proyectos principales",
            "resume.other": "Otros proyectos",
            "resume.edu": "Educación",
            "resume.exp": "Experiencia",
            "certs.title": "Certificaciones",
            "certs.coursera": "Certificaciones de Coursera",
            "certs.other": "Otros logros"
        },
        de: {
            "nav.home": "01 : Start",
            "nav.resume": "02 : Lebenslauf",
            "nav.certs": "03 : Zertifizierungen",
            "hero.hello": "Hallo, ich bin Ali",
            "home.hi": "Hallo!",
            "home.intro": "Ich bin ein leidenschaftlicher Entwickler, der den Bushido-Geist lebt — Disziplin, Ehre und ständige Verbesserung. Jede Codezeile ist ein Schwertstreich.",
            "home.currently": "Derzeit:",
            "home.li1": "Ich entwickle Spiele mit Godot 4 und GDScript",
            "home.li2": "Ich baue RAG-Systeme und LLM-Pipelines",
            "home.li3": "Ich designe mobile Apps mit React Native",
            "home.li4": "Ich erkunde Flutter & Dart für Mobile",
            "home.li5": "Ich lerne fortgeschrittenes React & Django REST Framework",
            "home.li6": "Ich integriere WebSockets & Docker",
            "home.li7": "Ich lerne Reverse Engineering mit Ghidra & Assembly (Anfänger)",
            "home.li8": "Ich erstelle Mods für Minecraft und Black Ops 2",
            "home.links": "Links",
            "resume.title": "Lebenslauf",
            "resume.skills": "Fähigkeiten",
            "resume.main": "Hauptprojekte",
            "resume.other": "Weitere Projekte",
            "resume.edu": "Bildung",
            "resume.exp": "Erfahrung",
            "certs.title": "Zertifizierungen",
            "certs.coursera": "Coursera-Zertifizierungen",
            "certs.other": "Weitere Erfolge"
        }
    };

    var TYPED = {
        en: [
            "RYOMA-SyY",
            "Samurai Developer",
            "Code Enjoyer",
            "React, React Native & GDScript",
            "Godot 4, GDScript & Game Dev",
            "Flutter & Dart (exploring)",
            "RAG Systems & AI Integration",
            "Django REST Framework & Jakarta EE",
            "Docker, WebSockets & SQLite3"
        ],
        fr: [
            "RYOMA-SyY",
            "Développeur Samouraï",
            "Passionné de code",
            "React, React Native & GDScript",
            "Godot 4, GDScript & Jeu vidéo",
            "Flutter & Dart (en exploration)",
            "Systèmes RAG & Intégration IA",
            "Django REST Framework & Jakarta EE",
            "Docker, WebSockets & SQLite3"
        ],
        es: [
            "RYOMA-SyY",
            "Desarrollador Samurái",
            "Amante del código",
            "React, React Native y GDScript",
            "Godot 4, GDScript y videojuegos",
            "Flutter y Dart (explorando)",
            "Sistemas RAG e integración de IA",
            "Django REST Framework y Jakarta EE",
            "Docker, WebSockets y SQLite3"
        ],
        de: [
            "RYOMA-SyY",
            "Samurai-Entwickler",
            "Code-Enthusiast",
            "React, React Native & GDScript",
            "Godot 4, GDScript & Spieleentwicklung",
            "Flutter & Dart (am Erkunden)",
            "RAG-Systeme & KI-Integration",
            "Django REST Framework & Jakarta EE",
            "Docker, WebSockets & SQLite3"
        ]
    };

    function currentLang() {
        try {
            return localStorage.getItem(STORE_KEY) || "en";
        } catch (e) {
            return "en";
        }
    }

    function apply(l) {
        var dict = I18N[l] || I18N.en;
        document.documentElement.setAttribute("lang", I18N[l] ? l : "en");
        var els = document.querySelectorAll("[data-i18n]");
        for (var i = 0; i < els.length; i++) {
            var k = els[i].getAttribute("data-i18n");
            if (dict[k] !== undefined) els[i].textContent = dict[k];
        }
        var typed = TYPED[l] || TYPED.en;
        var tspans = document.querySelectorAll("#typed-strings [data-typed]");
        for (var j = 0; j < tspans.length; j++) {
            var idx = parseInt(tspans[j].getAttribute("data-typed"), 10);
            if (!isNaN(idx) && typed[idx] !== undefined) tspans[j].textContent = typed[idx];
        }
        var btns = document.querySelectorAll(".lang-btn");
        for (var b = 0; b < btns.length; b++) {
            btns[b].classList.toggle("active", btns[b].getAttribute("data-lang") === l);
        }
    }

    var current = currentLang();
    apply(current);

    document.addEventListener("DOMContentLoaded", function () {
        var btns = document.querySelectorAll(".lang-btn");
        for (var b = 0; b < btns.length; b++) {
            btns[b].addEventListener("click", function () {
                var l = this.getAttribute("data-lang");
                try { localStorage.setItem(STORE_KEY, l); } catch (e) {}
                if (l !== current) location.reload();
                else apply(l);
            });
        }
    });
})();
