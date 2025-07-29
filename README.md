# 🚀 Selaski Automation Project – Cypress QA Test

Este proyecto automatiza el flujo de autenticación con PIN y la búsqueda de información de embarques en la plataforma [Selaski](https://www.selaski.com/public/reports/shared?token=28b8140da2164226f7d1ab0626547985903b), utilizando **Cypress** como framework principal de pruebas E2E (End-to-End).

---

## 🧪 Objetivo del Proyecto

Automatizar el siguiente flujo:

1. Acceso a la plataforma.
2. Autenticación con PIN de 4 dígitos.
3. Selección de filtro "Embarque" desde el buscador maestro.
4. Ingreso de número de embarque y validación de los resultados obtenidos.
5. Manejo de errores para PIN inválido y embarque no encontrado.

---

## 🛠️ Tecnologías Utilizadas

- ✅ Cypress 13.x
- ✅ Node.js 18.x
- ✅ JavaScript
- ✅ Git y GitHub


---
selaski-cypress-automation/
├── cypress/
│   ├── e2e/
│   │   ├── auth_and_search.cy.js     # Flujo combinado de autenticación y búsqueda
│   │   └── filter.cy.js              # Prueba específica de filtrado por embarque
│   ├── fixtures/
│   │   └── testData.json        
│   └── support/
│       ├── commands.js               # Comandos personalizados, como autenticarConPIN
│       └── e2e.js                    # Soporte general para las pruebas E2E
├── .gitignore                        # Archivos/Carpetas ignoradas por Git
├── cypress.config.js                 # Configuración principal de Cypress
├── package.json                      # Dependencias y scripts npm
└── README.md                         # Documentación del proyecto

                    
