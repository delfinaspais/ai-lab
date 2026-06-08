export const translations = {
  es: {
    brand: {
      name: "AI Lab",
      tagline: "Tu espacio personal para experimentar con IA",
      description:
        "Colección de herramientas impulsadas por inteligencia artificial. Resume conversaciones, extrae datos estructurados y chatea con un asistente.",
    },
    nav: {
      summarization: "Resumen inteligente",
      extraction: "Extracción de datos",
      chat: "Asistente IA",
    },
    home: {
      badge: "Proyecto personal · AI SDK",
      openTool: "Abrir herramienta",
      footer: "Construido con Next.js y Vercel AI SDK",
    },
    common: {
      backHome: "Volver al inicio",
    },
    summarization: {
      title: "Resumen inteligente",
      description:
        "Analiza un hilo de comentarios y genera un resumen con los puntos clave.",
      comments: "Comentarios",
      generate: "Generar resumen",
      generating: "Generando resumen...",
    },
    extraction: {
      title: "Extracción de datos",
      description:
        "Pega el texto de un email o mensaje y extrae automáticamente los detalles de la cita.",
      cardTitle: "Extraer cita",
      placeholder:
        "Ej: Reunión con Ana el martes a las 3pm en la oficina...",
      extract: "Extraer cita",
      extracting: "Extrayendo...",
      detailsTitle: "Detalles de la cita",
      name: "Nombre",
      noAppointment: "Sin cita definida",
      dateTime: "Fecha y hora",
      noDateTime: "Sin fecha u hora",
      location: "Ubicación",
      noLocation: "Sin ubicación",
      attendees: "Asistentes",
      noAttendees: "Sin asistentes",
    },
    chat: {
      emptyTitle: "¿En qué puedo ayudarte?",
      emptyDescription:
        "Pregúntame lo que quieras o pide el clima de una ciudad",
      placeholder: "Escribe tu mensaje...",
    },
    features: {
      summarization: {
        title: "Resumen inteligente",
        description:
          "Condensa hilos de comentarios y conversaciones en resúmenes claros y accionables.",
      },
      extraction: {
        title: "Extracción de datos",
        description:
          "Convierte texto libre en citas de calendario estructuradas automáticamente.",
      },
      chat: {
        title: "Asistente IA",
        description:
          "Conversa con un asistente que puede consultar el clima y responder en tiempo real.",
      },
    },
  },
  en: {
    brand: {
      name: "AI Lab",
      tagline: "Your personal space to experiment with AI",
      description:
        "A collection of AI-powered tools. Summarize conversations, extract structured data, and chat with an assistant.",
    },
    nav: {
      summarization: "Smart Summary",
      extraction: "Data Extraction",
      chat: "AI Assistant",
    },
    home: {
      badge: "Personal project · AI SDK",
      openTool: "Open tool",
      footer: "Built with Next.js and Vercel AI SDK",
    },
    common: {
      backHome: "Back to home",
    },
    summarization: {
      title: "Smart Summary",
      description:
        "Analyze a comment thread and generate a summary with the key points.",
      comments: "Comments",
      generate: "Generate summary",
      generating: "Generating summary...",
    },
    extraction: {
      title: "Data Extraction",
      description:
        "Paste text from an email or message and automatically extract appointment details.",
      cardTitle: "Extract appointment",
      placeholder:
        "E.g. Meeting with Ana on Tuesday at 3pm at the office...",
      extract: "Extract appointment",
      extracting: "Extracting...",
      detailsTitle: "Appointment details",
      name: "Name",
      noAppointment: "No appointment set",
      dateTime: "Date & time",
      noDateTime: "No date or time set",
      location: "Location",
      noLocation: "No location set",
      attendees: "Attendees",
      noAttendees: "No attendees",
    },
    chat: {
      emptyTitle: "How can I help you?",
      emptyDescription: "Ask me anything or request the weather for a city",
      placeholder: "Type your message...",
    },
    features: {
      summarization: {
        title: "Smart Summary",
        description:
          "Condense comment threads and conversations into clear, actionable summaries.",
      },
      extraction: {
        title: "Data Extraction",
        description:
          "Turn free-form text into structured calendar appointments automatically.",
      },
      chat: {
        title: "AI Assistant",
        description:
          "Chat with an assistant that can check the weather and respond in real time.",
      },
    },
  },
} as const;

export type Locale = keyof typeof translations;

export type TranslationTree = (typeof translations)[Locale];
