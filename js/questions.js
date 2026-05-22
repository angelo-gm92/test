//learnSync nexus PREGUNTAS

const procesamiento_informacion = [
    {
        id: 101,
        text: "Cuando aprendes algo nuevo normalmente:",
        answers: [
            "Necesito verlo representado",
            "Prefiero escucharlo explicado",
            "Necesito practicarlo",
            "Intento entender la lógica"
        ],
        results: [
            "visual",
            "auditivo",
            "kinestesico",
            "analitico"
        ]
    },
    {
        id: 102,
        text: "¿Qué suele ayudarte más a comprender?",
        answers: [
            "Diagramas y gráficos",
            "Conversaciones y explicaciones",
            "Experimentar directamente",
            "Analizar estructura y patrones"
        ],
        results: [
            "visual",
            "auditivo",
            "experiencial",
            "analitico"
        ]
    },
    {
        id: 103,
        text: "Cuando alguien explica algo complejo:",
        answers: [
            "Necesito ejemplos visuales",
            "Escucho atentamente",
            "Quiero probarlo personalmente",
            "Necesito entender el sistema completo"
        ],
        results: [
            "visual",
            "auditivo",
            "kinestesico",
            "analitico"
        ]
    },
    {
        id: 104,
        text: "¿Qué describe mejor tu mente?",
        answers: [
            "Visual",
            "Reflexiva",
            "Práctica",
            "Analitica"
        ],
        results: [
            "visual",
            "auditivo-analitico",
            "kinestesico",
            "analitico"
        ]
    }
];

const memoria_comprension = [
    {
        id: 105,
        text: "Cuando estudias",
        answers: [
            "Uso colores y esquemas",
            "Repito conceptos verbalmente",
            "Practico constantemente",
            "Organizo información lógicamente"
        ],
        results: [
            "visual",
            "auditivo",
            "kinestesico",
            "analitico"
        ]
    },
    {
        id: 106,
        text: "¿Qué suele hacerte aprender mejor?",
        answers: [
            "Ver ejemplos",
            "Escuchar explicaciones",
            "Practicar directamente",
            "Resolver problemas"
        ],
        results: [
            "visual",
            "auditivo",
            "esperiencial",
            "analitico"
        ]
    },
    {
        id: 107,
        text: "Cuando aprendes algo nuevo",
        answers: [
            "Relaciono imágenes mentalmente",
            "Necesito hablarlo",
            "Necesito experimentarlo",
            "Intento comprender fundamentos"
        ],
        results: [
            "visual",
            "auditivo",
            "experiencial",
            "analitico"
        ]
    },
    {
        id: 108,
        text: "¿Que suele motivarte más aprendiendo?",
        answers: [
            "Explorar visualmente",
            "Escuchar perspectivas",
            "Aplicar conocimientos",
            "Comprender profundamente"
        ],
        results: [
            "visual",
            "auditivo",
            "experiencial",
            "analitico"
        ]
    },
    {
        id: 109,
        text: "Cuando aprendes habilidades nuevas:",
        answers: [
            "Observo ejemplos primero",
            "Escucho instrucciones",
            "Empiezo practicando",
            "Analizo cómo funciona"
        ],
        results: [
            "visual",
            "auditivo",
            "kinestesico",
            "analitico"
        ]
    },
    {
        id: 110,
        text: "Cuando algo falla",
        answers: [
            "Observo qué ocurrió",
            "Pregunto y converso",
            "Pruebo nuevamente",
            "Analizo causas profundas"
        ],
        results: [
            "visual",
            "social",
            "experiencial",
            "analitico"
        ]
    },
    {
        id: 111,
        text: "¿Qué entorno educativo prefieres?",
        answers: [
            "Visual e interactivo",
            "Conversacional",
            "Práctico e dinamico",
            "Estructurado y analítico"
        ],
        results: [
            "visual",
            "social",
            "kinestesico",
            "analitico"
        ]
    },
    {
        id: 112,
        text: "¿Qué describe mejor tu aprendizaje?",
        answers: [
            "Explorador",
            "Colaborativo",
            "Experiencial",
            "Analitico"
        ],
        results: [
            "experiencial",
            "social",
            "kinestesico",
            "analitico"
        ]
    }
];

const interaccion_educativa = [
    {
        id: 113,
        text: "Cuando trabajas con otras personas",
        answers: [
            "Aprendo observando ideas",
            "Aprendo escuchando debates",
            "Aprendo colaborando activamente",
            "analizo perspectivas diferentes"
        ],
        results: [
            "visual",
            "auditivo",
            "social",
            "analitico"
        ]
    },
    {
        id: 114,
        text: "Cuando alguien explica algo",
        answers: [
            "Necesito ejemplos visuales",
            "Escucho activamente",
            "Quiero participar inmediatamente",
            "Analizo estructura conceptual"
        ],
        results: [
            "visual",
            "auditivo",
            "kinestesico",
            "analitico"
        ]
    },
    {
        id: 115,
        text: "¿Qué suele ayudarte más?",
        answers: [
            "Compartir ideas",
            "Practicar en grupo",
            "Escuchar experiencias",
            "Debatir conceptos"
        ],
        results: [
            "social",
            "kinestesico",
            "auditivo",
            "analitico"
        ]
    }
];

const aprendizaje_autonomo = [
    {
        id: 116,
        text: "Cuando quieres aprender algo nuevo",
        answers: [
            "Busco videos y esquemas",
            "Escucho explicaciones y podcasts",
            "Empiezo probando directamente",
            "Investigo profundamente"
        ],
        results: [
            "visual",
            "auditivo",
            "experiencial",
            "autodidacta"
        ]
    },
    {
        id: 117,
        text: "¿Qué describe mejor tu aprendizaje?",
        answers: [
            "Busco referencias visuales",
            "Pregunto a alguien",
            "Pruebo distintas soluciones",
            "Investigo lógica y teoria"
        ],
        results: [
            "visual",
            "social",
            "experiencial",
            "analitico"
        ]
    },
    {
        id: 118,
        text: "¿Qué describe mejor tu estilo autodidacta?",
        answers: [
            "Explorador visual",
            "Investigador verbal",
            "Experimental",
            "Analítico estructurado"
        ],
        results: [
            "visual-5",
            "auditivo-4",
            "experiencial-5",
            "autodidacta-5_analitico-2"
        ]
    }

];

//learnSync nexus NUEVAS PREGUNTAS

//...

//learnSync Nexus PREGUNTAS ESPEJO

//...

