const questions_1 = [
    {
        id: 1,
        text: "Cuando un proyecto importante se retrasa: ",
        answers: [
            "Tomo el control rápidamente.",
            "Intento reorganizar el equipo.",
            "Analizo el problema antes de actuar.",
            "Prefiero mantener estabilidad y evitar tensión."
        ],
        dimension: "situation"
    },
    {
        id: 2,
        text: "Cuando hay que tomar decisiones rápidas:",
        answers: [
            "Decido inmediatamente.",
            "Busco consenso grupal.",
            "Necesito revisar información.",
            "Intento evitar errores antes de avanzar."
        ],
        dimension: "situation"
    },
    {
        id: 3,

        text: "Cuando compites por un objetivo: ",
        answers: [
            "Evito competir.",
            "Solo compito si es necesario.",
            "Depende del contexto.",
            "Me motiva competir.",
            "Disfruto liderar y ganar."
        ],
        dimension: "conduct"
    },
    {
        id: 4,
        text: "Cuando detectas ineficiencia:",
        answers: [
            "Cambio cosas inmediatamente.",
            "Intento motivar al grupo.",
            "Analizo causas profundas.",
            "Propongo mejoras graduales."
        ],
        dimension: "situation"
    },
    {
        id: 5,
        text: "¿Qué disfrutas más?",
        answers: [
            "Resolver desafíos difíciles.",
            "Influir positivamente en personas.",
            "Construir procesos sólidos.",
            "Mantener estabilidad y orden."
        ],
        dimension: "situation"
    }
];

const questions_2 = [
    {
        id: 6,
        text: "Cuando entras en un grupo nuevo:",
        answers: [
            "Empiezo conversaciones fácilmente.",
            "Observo antes de participar.",
            "Intento conectar con personas específicas.",
            "Prefiero esperar contexto."
        ],
        dimension: "situation"
    },
    {
        id: 7,
        text: "En reuniones normalmente: ",
        answers: [
            "Casi nunca participo.",
            "Hablo solo si es necesario.",
            "Depende del ambiente.",
            "Participo activamente.",
            "Suelo energizar conversaciones."
        ],
        dimension: "conduct"
    },
    {
        id: 8,
        text: "Cuando alguien necesita motivación:",
        answers: [
            "Intento inspirarlo.",
            "Le doy soluciones concretas.",
            "Escucho antes de intervenir. ",
            "Analizo qué está fallando. "
        ],
        dimension: "situation"
    },
    {
        id: 9,
        text: "Cuando compartes ideas:",
        answers: [
            "Las presento con entusiasmo.",
            "Las estructuro cuidadosamente.",
            "Prefiero conversaciones uno a uno.",
            "Espero validarlas antes."
        ],
        dimension: "situation"
    },
    {
        id: 10,
        text: "¿Qué te resulta más estimulante? ",
        answers: [
            "Conocer personas nuevas.",
            "Dirigir proyectos.",
            "Analizar situaciones complejas.",
            "Trabajar en ambientes tranquilos."
        ],
        dimension: "situation"
    }

];

const questions_8 = [
    {
        id: 46,
        text: "Me gusta tomar el control en situaciones difíciles.",
        dimension: "no_se"
    },
    {
        id: 47,
        text: "Interactuar con personas me da energía.",
        dimension: "no_se"
    },
    {
        id: 48,
        text: "Prefiero estabilidad antes que cambios constantes.",
        dimension: "no_se"
    },
    {
        id: 49,
        text: "Necesito que las cosas estén bien estructuradas.",
        dimension: "no_se"
    },
    {
        id: 50,
        text: "Me adapto fácilmente a situaciones inesperadas.",
        dimension: "no_se"
    },
    {
        id: 51,
        text: "Las críticas suelen afectarme emocionalmente.",
        dimension: "no_se"
    },
    {
        id: 52,
        text: "Disfruto competir y superar desafíos.",
        dimension: "no_se"
    },
    {
        id: 53,
        text: "Necesito interacción social frecuente para sentirme motivado.",
        dimension: "no_se"
    },
    {
        id: 54,
        text: "Prefiero ambientes tranquilos y previsibles.",
        dimension: "no_se"
    },
    {
        id: 55,
        text: "Me incomodan mucho los errores o imprecisiones.",
        dimension: "no_se"
    },
    {
        id: 56,
        text: "Tiendo a actuar rápido incluso con información incompleta.",
        dimension: "no_se"
    },
    {
        id: 57,
        text: "Intento mantener armonía incluso en conflictos difíciles.",
        dimension: "no_se"
    },
    {
        id: 58,
        text: "Me gusta influir y persuadir personas.",
        dimension: "no_se"
    },
    {
        id: 59,
        text: "Necesito tiempo para analizar antes de decidir.",
        dimension: "no_se"
    },
    {
        id: 60,
        text: "Me siento cómodo liderando grupos.",
        dimension: "no_se"
    },
    {
        id: 61,
        text: "Me gusta tomar el control en situaciones difíciles.",
        dimension: "no_se"
    },
    {
        id: 62,
        text: "Interactuar con personas me da energía.",
        dimension: "no_se"
    },
    {
        id: 63,
        text: "Prefiero estabilidad antes que cambios constantes.",
        dimension: "no_se"
    },
    {
        id: 64,
        text: "Necesito que las cosas estén bien estructuradas.",
        dimension: "no_se"
    },
    {
        id: 65,
        text: "Me adapto fácilmente a situaciones inesperadas.",
        dimension: "no_se"
    },
    {
        id: 66,
        text: "Las críticas suelen afectarme emocionalmente.",
        dimension: "no_se"
    }
];

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

// const aprendizaje_autonomo [

// ]