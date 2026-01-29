import React from "react";
import {
  CheckCircle,
  Calendar,
  DollarSign,
  Settings,
  Users,
  Zap,
} from "lucide-react";

const PropuestaArcaPilates = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="border-b-4 border-blue-600 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Propuesta de Sistema de Reservaciones
        </h1>
        <p className="text-lg text-gray-600">Para: Arca Pilates Studio</p>
        <p className="text-sm text-gray-500 mt-4">Fecha: 27 de enero de 2026</p>
      </div>

      {/* Presentación */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hola Damara,</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Fue un placer platicar contigo sobre las necesidades de Arca Pilates
          Studio. Me da mucho gusto poder presentarte esta propuesta para crear
          un sistema de reservaciones personalizado que facilite la operación de
          tu estudio y mejore la experiencia de tus alumnas.
        </p>
        <p className="text-gray-700 leading-relaxed">
          A continuación encontrarás todos los detalles de lo que incluye el
          proyecto, tiempos de entrega, inversión y condiciones.
        </p>
      </section>

      {/* Objetivo del Proyecto */}
      <section className="mb-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="text-blue-600" size={28} />
          Objetivo del Proyecto
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Desarrollar un sistema de reservaciones web personalizado para Arca
          Pilates Studio que permita a tus alumnas reservar clases de forma
          automática, visualizar horarios disponibles en tiempo real, y
          gestionar sus reservaciones de manera sencilla. Del lado
          administrativo, tendrás un panel completo para controlar todas las
          reservaciones, horarios y configuraciones del estudio.
        </p>
      </section>

      {/* Alcance del Proyecto */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Settings className="text-blue-600" size={28} />
          Alcance del Proyecto
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Lo que incluye:
        </h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">
                Sistema de reservaciones en línea
              </p>
              <p className="text-gray-600 text-sm">
                Tus alumnas podrán reservar clases en 30 segundos desde
                cualquier dispositivo
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">
                Visualización de horarios en tiempo real
              </p>
              <p className="text-gray-600 text-sm">
                Disponibilidad actualizada al instante con cupos disponibles por
                clase
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">
                Gestión de cancelaciones
              </p>
              <p className="text-gray-600 text-sm">
                Las alumnas pueden cancelar o reprogramar sus clases según las
                políticas que definas
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">
                Panel de administración completo
              </p>
              <p className="text-gray-600 text-sm">
                Vista completa de todas las reservaciones, asistencias, y
                gestión de clases/horarios
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">
                Diseño 100% personalizado
              </p>
              <p className="text-gray-600 text-sm">
                Con los colores, logo, fuentes e identidad visual de Arca
                Pilates Studio
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">Diseño responsive</p>
              <p className="text-gray-600 text-sm">
                Funciona perfectamente en celulares, tablets y computadoras
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">
                Confirmaciones automáticas
              </p>
              <p className="text-gray-600 text-sm">
                Las alumnas reciben confirmación inmediata al reservar
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">
                Capacitación completa
              </p>
              <p className="text-gray-600 text-sm">
                Sesiones de capacitación hasta que domines completamente el
                sistema
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">
                Soporte técnico inicial
              </p>
              <p className="text-gray-600 text-sm">
                Primer mes completo de soporte para cualquier ajuste o
                corrección de errores
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
          Lo que NO incluye (puede agregarse posteriormente):
        </h3>
        <div className="space-y-2 text-gray-700">
          <p className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>
              Aplicación móvil nativa (el sistema es una página web que funciona
              en celular)
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>
              Sistema de pagos en línea (acordamos agregarlo en una fase futura)
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>
              Envío automatizado de recordatorios por WhatsApp o email
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <span>
              Sistema de membresías o paquetes (puede agregarse si lo necesitas)
            </span>
          </p>
        </div>
      </section>

      {/* Proceso y Tiempos */}
      <section className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Calendar className="text-blue-600" size={28} />
          Proceso y Tiempos de Entrega
        </h2>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-gray-800 mb-2">
              Semana 1: Configuración y Funcionalidad
            </h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Montaje del servidor y estructura base</li>
              <li>• Configuración de reservaciones y cancelaciones</li>
              <li>• Definición de horarios y políticas del estudio</li>
              <li>• Implementación del panel de administración</li>
              <li>• Primera revisión contigo para feedback</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-gray-800 mb-2">
              Semana 2: Diseño y Personalización
            </h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>
                • Aplicación de tu identidad visual (colores, logo, fuentes)
              </li>
              <li>• Diseño de la interfaz para alumnas</li>
              <li>• Optimización para dispositivos móviles</li>
              <li>• Ajustes finales según tus comentarios</li>
              <li>• Revisión final y aprobación</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-600 pl-4">
            <h3 className="font-bold text-gray-800 mb-2">
              Lanzamiento y Capacitación
            </h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Publicación del sistema</li>
              <li>• Sesión de capacitación completa</li>
              <li>• Manual de uso del panel administrativo</li>
              <li>• Acompañamiento durante los primeros días</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-100 rounded-lg">
          <p className="text-gray-800 font-semibold">
            ⏱️ Tiempo total de desarrollo: 2 semanas
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Desde la fecha de inicio acordada y con materiales proporcionados a
            tiempo
          </p>
        </div>
      </section>

      {/* Materiales Necesarios */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="text-blue-600" size={28} />
          Materiales que necesito de tu parte
        </h2>
        <p className="text-gray-700 mb-4">
          Para poder iniciar el desarrollo, necesitaré que me proporciones:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-3 bg-gray-50 rounded">
            <p className="font-semibold text-gray-800">
              ✓ Logo de Arca Pilates Studio
            </p>
            <p className="text-sm text-gray-600">
              En formato PNG o SVG de preferencia
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <p className="font-semibold text-gray-800">✓ Paleta de colores</p>
            <p className="text-sm text-gray-600">
              O ejemplos de cómo te gustaría que se vea
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <p className="font-semibold text-gray-800">
              ✓ Listado de clases y horarios
            </p>
            <p className="text-sm text-gray-600">
              Con duración y cupo de cada clase
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <p className="font-semibold text-gray-800">
              ✓ Políticas de cancelación
            </p>
            <p className="text-sm text-gray-600">
              Cuánto tiempo antes pueden cancelar
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <p className="font-semibold text-gray-800">
              ✓ Fotos del estudio (opcional)
            </p>
            <p className="text-sm text-gray-600">
              Para incluir en la página si lo deseas
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <p className="font-semibold text-gray-800">
              ✓ Textos descriptivos (opcional)
            </p>
            <p className="text-sm text-gray-600">
              Información sobre Arca Pilates que quieras incluir
            </p>
          </div>
        </div>
      </section>

      {/* Inversión */}
      <section className="mb-8 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <DollarSign className="text-green-600" size={28} />
          Inversión
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Desarrollo del Sistema
            </h3>
            <div className="bg-white p-4 rounded-lg border-2 border-green-200">
              <p className="text-3xl font-bold text-green-600 mb-2">
                $4,000 MXN
              </p>
              <p className="text-gray-600">
                Pago único por el desarrollo completo del sistema personalizado
              </p>
            </div>

            <div className="mt-4 space-y-2">
              <p className="font-semibold text-gray-800">
                Opciones de pago flexibles:
              </p>
              <div className="pl-4 space-y-2 text-gray-700">
                <p className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">1.</span>
                  <span>
                    <strong>Pago total al inicio:</strong> $4,000 MXN al
                    arrancar el proyecto
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">2.</span>
                  <span>
                    <strong>Pago en dos partes:</strong> 50% ($2,000 MXN) al
                    inicio + 50% ($2,000 MXN) al finalizar
                  </span>
                </p>
              </div>
              <p className="text-sm text-gray-600 italic mt-3">
                * Todos los pagos se realizan por transferencia bancaria
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Costos de Mantenimiento Mensual
            </h3>
            <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
              <p className="text-2xl font-bold text-blue-600 mb-2">
                $7 USD mensuales
              </p>
              <p className="text-gray-600 mb-2">
                Aproximadamente $140 MXN al mes
              </p>
              <p className="text-sm text-gray-600">
                Este costo es para mantener el servidor activo y funcionando
                24/7. Incluye hosting, base de datos y actualizaciones de
                seguridad.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Dominio Web (Opcional)
            </h3>
            <p className="text-gray-700 mb-3">Tienes dos opciones:</p>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                <p className="font-bold text-gray-800 mb-1">
                  Opción 1: Dominio Personalizado
                </p>
                <p className="text-gray-600 mb-2 text-sm">
                  Ejemplo:{" "}
                  <span className="font-mono text-blue-600">
                    www.arcapilates.com
                  </span>{" "}
                  o{" "}
                  <span className="font-mono text-blue-600">
                    www.arcapilatesstudio.com
                  </span>
                </p>
                <p className="text-gray-700">
                  Costo aproximado: <strong>$200-400 MXN anuales</strong>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Se renueva cada año. Es tu dominio propio, más profesional y
                  fácil de recordar.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                <p className="font-bold text-gray-800 mb-1">
                  Opción 2: Subdominio Gratuito
                </p>
                <p className="text-gray-600 mb-2 text-sm">
                  Ejemplo:{" "}
                  <span className="font-mono text-blue-600">
                    arca-pilates-studio.vercel.app
                  </span>
                </p>
                <p className="text-gray-700">
                  Costo: <strong>$0 MXN</strong>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Completamente funcional, sin costo adicional. Puedes cambiar a
                  dominio personalizado en cualquier momento.
                </p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-sm text-gray-700">
                <strong>Nota:</strong> Podemos iniciar con el subdominio
                gratuito y más adelante, si lo deseas, migrar a un dominio
                personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soporte y Garantía */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Soporte y Garantía
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">
                Primer mes de soporte incluido
              </p>
              <p className="text-gray-600 text-sm">
                Cualquier ajuste, corrección de errores o problema técnico
                durante el primer mes está incluido sin costo adicional
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">
                Cambios menores incluidos
              </p>
              <p className="text-gray-600 text-sm">
                Durante el desarrollo puedes solicitar cambios y ajustes sin
                problema
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">
                Actualizaciones posteriores
              </p>
              <p className="text-gray-600 text-sm">
                Cambios mayores o funcionalidades nuevas después del primer mes
                se cotizan por separado
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-gray-800">El sistema es tuyo</p>
              <p className="text-gray-600 text-sm">
                Tienes propiedad completa del sistema. Si algún día quieres
                hacer cambios o migrar a otro servidor, es tu derecho
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Futuras */}
      <section className="mb-8 bg-purple-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Funcionalidades Futuras
        </h2>
        <p className="text-gray-700 mb-4">
          Como mencionamos en nuestra conversación, el sistema está diseñado
          para crecer contigo. Estas son algunas funcionalidades que podemos
          agregar más adelante:
        </p>
        <div className="space-y-2">
          <p className="flex items-start gap-2 text-gray-700">
            <span className="text-purple-600">→</span>
            <span>
              <strong>Sistema de pagos en línea:</strong> Para que tus alumnas
              paguen directamente en la plataforma
            </span>
          </p>
          <p className="flex items-start gap-2 text-gray-700">
            <span className="text-purple-600">→</span>
            <span>
              <strong>Paquetes y membresías:</strong> Gestión de créditos, pases
              mensuales, etc.
            </span>
          </p>
          <p className="flex items-start gap-2 text-gray-700">
            <span className="text-purple-600">→</span>
            <span>
              <strong>Recordatorios automáticos:</strong> Por WhatsApp, email o
              SMS
            </span>
          </p>
          <p className="flex items-start gap-2 text-gray-700">
            <span className="text-purple-600">→</span>
            <span>
              <strong>Reportes y estadísticas:</strong> Análisis de asistencia,
              clases más populares, etc.
            </span>
          </p>
          <p className="flex items-start gap-2 text-gray-700">
            <span className="text-purple-600">→</span>
            <span>
              <strong>Lista de espera:</strong> Para clases llenas
            </span>
          </p>
        </div>
        <p className="text-sm text-gray-600 mt-4 italic">
          Cada funcionalidad adicional se cotiza de forma individual según
          complejidad y necesidades.
        </p>
      </section>

      {/* Siguientes Pasos */}
      <section className="mb-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Siguientes Pasos
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Llamada de seguimiento
              </p>
              <p className="text-gray-600 text-sm">
                Viernes 30 de enero a las 11:30 AM para que me compartas tu
                decisión
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Firma de propuesta y primer pago
              </p>
              <p className="text-gray-600 text-sm">
                Una vez que decidas avanzar, formalizamos el acuerdo
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Recopilación de materiales
              </p>
              <p className="text-gray-600 text-sm">
                Me proporcionas logo, colores, horarios y toda la información
                necesaria
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              4
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                ¡Inicio del desarrollo!
              </p>
              <p className="text-gray-600 text-sm">
                Comenzamos las 2 semanas de trabajo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Términos y Condiciones */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Términos y Condiciones
        </h2>
        <div className="text-sm text-gray-700 space-y-2 bg-gray-50 p-4 rounded">
          <p>
            • El tiempo de desarrollo de 2 semanas comienza una vez recibido el
            pago inicial y los materiales necesarios.
          </p>
          <p>
            • Si los materiales (logo, colores, información) se entregan con
            retrasos, el proyecto puede extenderse proporcionalmente.
          </p>
          <p>
            • Los cambios solicitados durante el desarrollo están incluidos.
            Cambios mayores después de la entrega final se cotizan por separado.
          </p>
          <p>
            • El primer mes de soporte cubre errores técnicos y ajustes menores,
            no funcionalidades completamente nuevas.
          </p>
          <p>
            • Los costos de servidor ($7 USD/mes) son independientes y se pagan
            mensualmente para mantener el sistema en línea.
          </p>
          <p>
            • El cliente tiene propiedad completa del sistema y puede solicitar
            acceso completo a servidor y código en cualquier momento.
          </p>
          <p>
            • Esta propuesta tiene validez de 30 días a partir de la fecha de
            emisión.
          </p>
        </div>
      </section>

      {/* Cierre */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ¡Gracias por tu confianza!
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Damara, estoy muy entusiasmado con la posibilidad de trabajar con Arca
          Pilates Studio. Creo que este sistema va a facilitarles muchísimo la
          operación diaria y tus alumnas van a adorar lo fácil que es reservar
          sus clases.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Si tienes cualquier duda o comentario sobre esta propuesta, no dudes
          en contactarme. Estoy disponible para aclarar lo que necesites.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Nos hablamos el viernes 30 de enero. ¡Que tengas excelente día!
        </p>
      </section>

      {/* Footer con Contacto */}
      <div className="border-t-2 border-gray-300 pt-6 mt-8">
        <div className="text-center">
          <p className="font-bold text-gray-800 text-lg mb-2">
            Sebastián López
          </p>
          <p className="text-gray-600 mb-1">Desarrollador Web</p>
          <p className="text-gray-600 mb-1">📱 662 103 1074</p>
          <p className="text-gray-600">✉️ sebastianlopez1935@gmail.com</p>
        </div>
      </div>

      {/* Nota sobre cómo descargar */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm text-gray-700">
        <p className="font-semibold mb-1">
          📄 Para guardar esta propuesta como PDF:
        </p>
        <p>
          Presiona Ctrl+P (Windows) o Cmd+P (Mac), selecciona "Guardar como PDF"
          en destino, y guárdalo en tu computadora.
        </p>
      </div>
    </div>
  );
};

export default PropuestaArcaPilates;
