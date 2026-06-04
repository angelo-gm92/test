//learnSync nexus PREGUNTAS


/*
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

const dimension_visual = [
    {
        id: 119,
        text: "Cuando intentas comprender algo complejo:",
        answers: [
            "Necesito gráficos y esquemas",
            "Prefiero escucharlo explicado",
            "Quiero probarlo personalmente",
            "Analizo la lógica interna"
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 120,
        text: "Cuando recuerdas información importante:",
        answers: [
            "Recuerdo imágenes y colores.",
            "Recuerdo conversaciones.",
            "Recuerdo experiencias prácticas.",
            "Recuerdo estructuras conceptuales."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
        ]
    },
    {
        id: 121,
        text: "En una formación nueva normalmente: ",
        answers: [
            "Necesito ver ejemplos visuales.",
            "Escucho atentamente explicaciones.",
            "Aprendo practicando inmediatamente.",
            "Analizo fundamentos teóricos."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    }
];

const dimension_auditiva = [
    {
        id: 122,
        text: "Cuando estudias algo nuevo:",
        answers: [
            "Uso mapas visuales",
            "Repito conceptos verbalmente.",
            "Practico ejercicios.",
            "Organizo ideas lógicamente."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 123,
        text: "¿Qué suele ayudarte más a aprender?",
        answers: [
            "Videos y diagramas.",
            "Conversaciones y debates.",
            "Talleres prácticos.",
            "Resolver problemas complejos."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
        ]
    },
    {
        id: 124,
        text: "Cuando alguien enseña algo complicado:",
        answers: [
            "Necesito apoyo visual.",
            "Me concentro en la explicación verbal.",
            "Necesito participar activamente.",
            "Necesito comprender la lógica completa."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    }
];

const dimension_kinestesica = [
    {
        id: 125,
        text: "Cuando desarrollas nuevas habilidades:",
        answers: [
            "Observo ejemplos primero.",
            "Escucho instrucciones detalladas.",
            "Empiezo practicando inmediatamente.",
            "Analizo cómo funciona el proceso."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 126,
        text: "¿Qué entorno educativo prefieres?",
        answers: [
            "Muy visual e interactivo.",
            "Conversacional y participativo.",
            "Dinámico y práctico.",
            "Organizado y estructurado."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 127,
        text: "Cuando algo no funciona:",
        answers: [
            "Observo qué ocurrió.",
            "Pregunto opiniones.",
            "Vuelvo a intentarlo directamente.",
            "Analizo las causas profundas."
        ],
        results: [
            "visual-5",
            "social-5",
            "experiencial-5",
            "analitico-5"
        ]
    }
];

const dimension_experiencial = [
    {
        id: 128,
        text: "Cuando aprendes herramientas nuevas:",
        answers: [
            "Busco tutoriales visuales.",
            "Escucho explicaciones.",
            "Empiezo explorando y practicando.",
            "Investigo teoría y fundamentos."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
        ]
    },
    {
        id: 129,
        text: "¿Qué suele motivarte más aprendiendo?",
        answers: [
            "Explorar visualmente.",
            "Escuchar perspectivas.",
            "Aplicar inmediatamente.",
            "Comprender profundamente."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
        ]
    },
    {
        id: 130,
        text: "Cuando tienes dudas:",
        answers: [
            "Busco referencias visuales.",
            "Consulto con otras personas.",
            "Pruebo diferentes soluciones.",
            "Investigo la lógica del problema."
        ],
        results: [
            "visual-5",
            "social-5",
            "experimental-5",
            "analitico-5"
        ]
    }
];

const dimension_autodidacta = [
    {
        id: 131,
        text: "Cuando quieres aprender algo nuevo:",
        answers: [
            "Busco videos y recursos visuales.",
            "Escucho podcasts o clases.",
            "Practico directamente.",
            "Investigo profundamente por mi cuenta."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "autodidacta-5"
        ]
    },
    {
        id: 132,
        text: "Cuando estudias autónomamente:",
        answers: [
            "Organizo recursos visuales.",
            "Repito verbalmente contenidos.",
            "Realizo pruebas prácticas.",
            "Investigo conceptos avanzados."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "autodidacta-5"
        ]
    },
    {
        id: 133,
        text: "¿Qué describe mejor tu aprendizaje independiente?",
        answers: [
            "Explorador visual. ",
            "Investigador conversacional.",
            "Experimental y práctico.",
            "Analítico y autodidacta."
        ],
        results: [
            "visual-5",
            "social-5",
            "experiencial-5",
            "autodidacta-5_analitico-2"
        ]
    }
];

const dimension_social = [
    {
        id: 134,
        text: "Cuando trabajas con otras personas:",
        answers: [
            "Aprendo observando ideas.",
            "Aprendo escuchando conversaciones.",
            "Aprendo colaborando activamente.",
            "Analizo distintas perspectivas."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "social-5",
            "analitico-5"
        ]
    },
    {
        id: 135,
        text: "¿Qué suele ayudarte más aprendiendo?",
        answers: [
            "Compartir recursos visuales.",
            "Escuchar experiencias ajenas.",
            "Practicar en grupo.",
            "Debatir conceptos complejos."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "social-5",
            "analitico-5"
        ]
    },
    {
        id: 135,
        text: "Cuando participas en equipos: ",
        answers: [
            "Observo cómo trabajan otros.",
            "Me gusta debatir ideas.",
            "Participo activamente en dinámicas.",
            "Analizo organización y roles."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "social-5",
            "analitico-5"
        ]
    }
];

const dimension_analitica = [
    {
        id: 136,
        text: "Cuando aprendes algo complejo:",
        answers: [
            "Necesito representaciones visuales.",
            "Prefiero explicaciones verbales.",
            "Necesito practicarlo directamente.",
            "Necesito comprender toda la lógica."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 137,
        text: "Cuando resuelves problemas:",
        answers: [
            "Visualizo situaciones.",
            "Converso posibles soluciones.",
            "Experimento distintas opciones.",
            "Analizo patrones y estructuras."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
        ]
    },
    {
        id: 137,
        text: "¿Qué describe mejor tu forma de aprender?",
        answers: [
            "Muy visual.",
            "Muy verbal.",
            "Muy práctica.",
            "Muy lógica y estructurada."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    }
];

*/

const questions = [
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
            "visual-5",
            "auditivo-5",
            "kinestesico-5_kinestesico-5",
            "analitico-5"
        ]
    }
];

const questionsz = [
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
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
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
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
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
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
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
            "visual-5",
            "auditivo-3_analitico-2",
            "kinestesico-5",
            "analitico-5"
        ]
    },
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
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
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
            "visual-5",
            "auditivo-5",
            "esperiencial-5",
            "analitico-5"
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
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
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
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
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
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
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
            "visual-4",
            "social-5",
            "experiencial-5",
            "analitico-5"
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
            "visual-5",
            "social-5",
            "kinestesico-5",
            "analitico-5"
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
            "experiencial-5",
            "social-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
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
            "visual-5",
            "auditivo-5",
            "social-5",
            "analitico-5"
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
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
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
            "social-5",
            "kinestesico-5",
            "auditivo-5",
            "analitico-5"
        ]
    },
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
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "autodidacta-5"
        ]
    },
    {
        id: 117,
        text: "Cuando tienes dudas:",
        answers: [
            "Busco referencias visuales",
            "Pregunto a alguien",
            "Pruebo distintas soluciones",
            "Investigo lógica y teoria"
        ],
        results: [
            "visual-5",
            "social-5",
            "experiencial-5",
            "analitico-5"
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
    },
    {
        id: 119,
        text: "Cuando intentas comprender algo complejo:",
        answers: [
            "Necesito gráficos y esquemas",
            "Prefiero escucharlo explicado",
            "Quiero probarlo personalmente",
            "Analizo la lógica interna"
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 120,
        text: "Cuando recuerdas información importante:",
        answers: [
            "Recuerdo imágenes y colores.",
            "Recuerdo conversaciones.",
            "Recuerdo experiencias prácticas.",
            "Recuerdo estructuras conceptuales."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
        ]
    },
    {
        id: 121,
        text: "En una formación nueva normalmente: ",
        answers: [
            "Necesito ver ejemplos visuales.",
            "Escucho atentamente explicaciones.",
            "Aprendo practicando inmediatamente.",
            "Analizo fundamentos teóricos."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 122,
        text: "Cuando estudias algo nuevo:",
        answers: [
            "Uso mapas visuales",
            "Repito conceptos verbalmente.",
            "Practico ejercicios.",
            "Organizo ideas lógicamente."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 123,
        text: "¿Qué suele ayudarte más a aprender?",
        answers: [
            "Videos y diagramas.",
            "Conversaciones y debates.",
            "Talleres prácticos.",
            "Resolver problemas complejos."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
        ]
    },
    {
        id: 124,
        text: "Cuando alguien enseña algo complicado:",
        answers: [
            "Necesito apoyo visual.",
            "Me concentro en la explicación verbal.",
            "Necesito participar activamente.",
            "Necesito comprender la lógica completa."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 125,
        text: "Cuando desarrollas nuevas habilidades:",
        answers: [
            "Observo ejemplos primero.",
            "Escucho instrucciones detalladas.",
            "Empiezo practicando inmediatamente.",
            "Analizo cómo funciona el proceso."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 126,
        text: "¿Qué entorno educativo prefieres?",
        answers: [
            "Muy visual e interactivo.",
            "Conversacional y participativo.",
            "Dinámico y práctico.",
            "Organizado y estructurado."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 127,
        text: "Cuando algo no funciona:",
        answers: [
            "Observo qué ocurrió.",
            "Pregunto opiniones.",
            "Vuelvo a intentarlo directamente.",
            "Analizo las causas profundas."
        ],
        results: [
            "visual-5",
            "social-5",
            "experiencial-5",
            "analitico-5"
        ]
    },
    {
        id: 128,
        text: "Cuando aprendes herramientas nuevas:",
        answers: [
            "Busco tutoriales visuales.",
            "Escucho explicaciones.",
            "Empiezo explorando y practicando.",
            "Investigo teoría y fundamentos."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
        ]
    },
    {
        id: 129,
        text: "¿Qué suele motivarte más aprendiendo?",
        answers: [
            "Explorar visualmente.",
            "Escuchar perspectivas.",
            "Aplicar inmediatamente.",
            "Comprender profundamente."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
        ]
    },
    {
        id: 130,
        text: "Cuando tienes dudas:",
        answers: [
            "Busco referencias visuales.",
            "Consulto con otras personas.",
            "Pruebo diferentes soluciones.",
            "Investigo la lógica del problema."
        ],
        results: [
            "visual-5",
            "social-5",
            "experimental-5",
            "analitico-5"
        ]
    },
    {
        id: 131,
        text: "Cuando quieres aprender algo nuevo:",
        answers: [
            "Busco videos y recursos visuales.",
            "Escucho podcasts o clases.",
            "Practico directamente.",
            "Investigo profundamente por mi cuenta."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "autodidacta-5"
        ]
    },
    {
        id: 132,
        text: "Cuando estudias autónomamente:",
        answers: [
            "Organizo recursos visuales.",
            "Repito verbalmente contenidos.",
            "Realizo pruebas prácticas.",
            "Investigo conceptos avanzados."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "autodidacta-5"
        ]
    },
    {
        id: 133,
        text: "¿Qué describe mejor tu aprendizaje independiente?",
        answers: [
            "Explorador visual. ",
            "Investigador conversacional.",
            "Experimental y práctico.",
            "Analítico y autodidacta."
        ],
        results: [
            "visual-5",
            "social-5",
            "experiencial-5",
            "autodidacta-5_analitico-2"
        ]
    },
    {
        id: 134,
        text: "Cuando trabajas con otras personas:",
        answers: [
            "Aprendo observando ideas.",
            "Aprendo escuchando conversaciones.",
            "Aprendo colaborando activamente.",
            "Analizo distintas perspectivas."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "social-5",
            "analitico-5"
        ]
    },
    {
        id: 135,
        text: "¿Qué suele ayudarte más aprendiendo?",
        answers: [
            "Compartir recursos visuales.",
            "Escuchar experiencias ajenas.",
            "Practicar en grupo.",
            "Debatir conceptos complejos."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "social-5",
            "analitico-5"
        ]
    },
    {
        id: 135,
        text: "Cuando participas en equipos: ",
        answers: [
            "Observo cómo trabajan otros.",
            "Me gusta debatir ideas.",
            "Participo activamente en dinámicas.",
            "Analizo organización y roles."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "social-5",
            "analitico-5"
        ]
    },
    {
        id: 136,
        text: "Cuando aprendes algo complejo:",
        answers: [
            "Necesito representaciones visuales.",
            "Prefiero explicaciones verbales.",
            "Necesito practicarlo directamente.",
            "Necesito comprender toda la lógica."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    },
    {
        id: 137,
        text: "Cuando resuelves problemas:",
        answers: [
            "Visualizo situaciones.",
            "Converso posibles soluciones.",
            "Experimento distintas opciones.",
            "Analizo patrones y estructuras."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "experiencial-5",
            "analitico-5"
        ]
    },
    {
        id: 137,
        text: "¿Qué describe mejor tu forma de aprender?",
        answers: [
            "Muy visual.",
            "Muy verbal.",
            "Muy práctica.",
            "Muy lógica y estructurada."
        ],
        results: [
            "visual-5",
            "auditivo-5",
            "kinestesico-5",
            "analitico-5"
        ]
    }
];

//learnSync Nexus PREGUNTAS ESPEJO

const answers_espejo = [
    "Nada parecido a mí",
    "Poco parecido ",
    "Depende",
    "Bastante parecido",
    "Me representa",
    "muchísimo"
];

const questions_espejo = [
    "Aprendo mucho mejor cuando la información está representada visualmente.",
    "Los esquemas, gráficos e imágenes rara vez me ayudan a comprender.",
    "Retengo fácilmente información escuchando explicaciones.",
    "Escuchar explicaciones largas suele desconectarme rápidamente.",
    "Necesito practicar personalmente para aprender correctamente.",
    "Prefiero aprender únicamente mediante teoría y observación.",
    "Aprendo mejor cuando experimento directamente las cosas.",
    "No necesito experimentar personalmente para comprender algo nuevo.",
    "Me siento cómodo aprendiendo de forma autónoma y autodidacta.",
    "Necesito supervisión constante para aprender correctamente.",
    "Aprendo mucho interactuando con otras personas.",
    "Prefiero aprender completamente solo la mayor parte del tiempo.",
    "Necesito comprender profundamente cómo funcionan las cosas.",
    "No necesito entender demasiado para empezar a utilizar algo."
];

const questions_espejo_avanzadas = [
    "Los mapas mentales y diagramas mejoran muchísimo mi aprendizaje.",
    "Las representaciones visuales suelen distraerme más que ayudarme.",
    "Aprendo fácilmente escuchando conversaciones y explicaciones.",
    "Me cuesta muchísimo mantener atención cuando alguien explica verbalmente.",
    "Necesito moverme o practicar para aprender bien.",
    "Puedo aprender perfectamente sin experimentar ni practicar.",
    "Cometo errores como parte natural del aprendizaje.",
    "Prefiero evitar experimentar hasta entender toda la teoría.",
    "Disfruto investigar y aprender por mi cuenta.",
    "Necesito instrucciones constantes para avanzar aprendiendo.",
    "Las dinámicas grupales potencian mi aprendizaje.",
    "Las interacciones grupales suelen dificultar mi aprendizaje.",
    "Necesito lógica y estructura para comprender realmente algo.",
    "Puedo utilizar herramientas aunque no comprenda cómo funcionan."
];

const progressEl = document.getElementById("progress");
const progressText =
    document.getElementById("progress-text");


function updateBar(currentQuestion) {

    const total = questions.length;

    const percent =
        (currentQuestion / total) * 100;

    document.getElementById("bar")
        .style.width = percent + "%";

    progressText.textContent =
        `${Math.round(percent)}% completado`;
}

// function updateBar(current,total){
// let percent=
// (current/total*100)
// document.getElementById("bar")
// .style.width = percent + "%";
// }