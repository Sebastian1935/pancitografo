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
    <div className="max-w-4xl mx-auto p-8 bg-gray-900">
      <div className="border-b-2 border-amber-500 pb-6 mb-8">
        <h1 className="text-3xl font-serif text-amber-400 mb-2">
          Propuesta de Sistema de Reservaciones
        </h1>
        <p className="text-lg text-amber-300">Para: Arca Pilates Studio</p>
        <p className="text-sm text-gray-400 mt-4">Fecha: 27 de enero de 2026</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-serif text-amber-400 mb-4">
          Hola Damara,
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Fue un placer platicar contigo sobre las necesidades de Arca Pilates
          Studio. Me da mucho gusto poder presentarte esta propuesta para crear
          un sistema de reservaciones personalizado que facilite la operación de
          tu estudio y mejore la experiencia de tus alumnas.
        </p>
        <p className="text-gray-300 leading-relaxed">
          A continuación encontrarás todos los detalles de lo que incluye el
          proyecto, tiempos de entrega, inversión y condiciones.
        </p>
      </section>

      <section className="mb-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-2xl font-serif text-amber-400 mb-4 flex items-center gap-2">
          <Zap className="text-amber-500" size={28} />
          Objetivo del Proyecto
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Desarrollar un sistema de reservaciones web personalizado para Arca
          Pilates Studio que permita a tus alumnas reservar clases de forma
          automática, visualizar horarios disponibles en tiempo real, y
          gestionar sus reservaciones de manera sencilla. Del lado
          administrativo, tendrás un panel completo para controlar todas las
          reservaciones, horarios y configuraciones del estudio.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-serif text-amber-400 mb-6 flex items-center gap-2">
          <Settings className="text-amber-500" size={28} />
          Alcance del Proyecto
        </h2>

        <h3 className="text-xl font-serif text-amber-300 mb-3">
          Lo que incluye:
        </h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
            <CheckCircle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-300">
                Sistema de reservaciones en línea
              </p>
              <p className="text-gray-400 text-sm">
                Tus alumnas podrán reservar clases en 30 segundos desde
                cualquier dispositivo
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
            <CheckCircle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-300">
                Visualización de horarios en tiempo real
              </p>
              <p className="text-gray-400 text-sm">
                Disponibilidad actualizada al instante con cupos disponibles por
                clase
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
            <CheckCircle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-300">
                Gestión de cancelaciones
              </p>
              <p className="text-gray-400 text-sm">
                Las alumnas pueden cancelar o reprogramar sus clases según las
                políticas que definas
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
            <CheckCircle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-300">
                Panel de administración completo
              </p>
              <p className="text-gray-400 text-sm">
                Vista completa de todas las reservaciones, asistencias, y
                gestión de clases/horarios
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
            <CheckCircle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-300">
                Diseño 100% personalizado
              </p>
              <p className="text-gray-400 text-sm">
                Con los colores, logo, fuentes e identidad visual de Arca
                Pilates Studio
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
            <CheckCircle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-300">Diseño responsive</p>
              <p className="text-gray-400 text-sm">
                Funciona perfectamente en celulares, tablets y computadoras
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
            <CheckCircle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-300">
                Confirmaciones automáticas
              </p>
              <p className="text-gray-400 text-sm">
                Las alumnas reciben confirmación inmediata al reservar
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
            <CheckCircle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-300">
                Capacitación completa
              </p>
              <p className="text-gray-400 text-sm">
                Sesiones de capacitación hasta que domines completamente el
                sistema
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
            <CheckCircle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-300">
                Soporte técnico inicial
              </p>
              <p className="text-gray-400 text-sm">
                Primer mes completo de soporte para cualquier ajuste o
                corrección de errores
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-amber-300 mb-3 mt-6">
          Lo que NO incluye:
        </h3>
        <div className="space-y-2 text-gray-300 bg-gray-800 p-4 rounded-lg border border-gray-700">
          <p className="flex items-start gap-2">
            <span className="text-amber-500">•</span>
            <span>Aplicación móvil nativa</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-amber-500">•</span>
            <span>Sistema de pagos en línea</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-amber-500">•</span>
            <span>Envío automatizado de recordatorios</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-amber-500">•</span>
            <span>Sistema de membresías</span>
          </p>
        </div>
      </section>

      <section className="mb-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-2xl font-serif text-amber-400 mb-6 flex items-center gap-2">
          <Calendar className="text-amber-500" size={28} />
          Proceso y Tiempos de Entrega
        </h2>

        <div className="space-y-6">
          <div className="border-l-4 border-amber-500 pl-4 bg-gray-900 py-2">
            <h3 className="font-serif font-bold text-amber-300 mb-2">
              Semana 1: Configuración y Funcionalidad
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>• Montaje del servidor y estructura base</li>
              <li>• Configuración de reservaciones y cancelaciones</li>
              <li>• Implementación del panel de administración</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 pl-4 bg-gray-900 py-2">
            <h3 className="font-serif font-bold text-amber-300 mb-2">
              Semana 2: Diseño y Personalización
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>• Aplicación de identidad visual</li>
              <li>• Diseño de la interfaz</li>
              <li>• Optimización para móviles</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-amber-900 bg-opacity-30 rounded-lg border border-amber-700">
          <p className="text-amber-300 font-semibold">
            Tiempo total: 2 semanas
          </p>
        </div>
      </section>

      <section className="mb-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-2xl font-serif text-amber-400 mb-6 flex items-center gap-2">
          <DollarSign className="text-amber-500" size={28} />
          Inversión
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-serif text-amber-300 mb-3">
              Desarrollo del Sistema
            </h3>
            <div className="bg-gradient-to-br from-amber-900 to-amber-800 p-4 rounded-lg border-2 border-amber-600">
              <p className="text-3xl font-serif font-bold text-amber-200 mb-2">
                $4,000 MXN
              </p>
              <p className="text-amber-100">
                Pago único por el desarrollo completo
              </p>
            </div>

            <div className="mt-4 space-y-2">
              <p className="font-semibold text-amber-300">Opciones de pago:</p>
              <div className="pl-4 space-y-2 text-gray-300">
                <p className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">1.</span>
                  <span>Pago total al inicio</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">2.</span>
                  <span>50% al inicio + 50% al finalizar</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif text-amber-300 mb-3">
              Mantenimiento Mensual
            </h3>
            <div className="bg-gray-900 p-4 rounded-lg border-2 border-gray-700">
              <p className="text-2xl font-serif font-bold text-amber-300 mb-2">
                $7 USD mensuales
              </p>
              <p className="text-gray-300 mb-2">
                Aproximadamente $140 MXN al mes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-serif text-amber-400 mb-4">
          Soporte y Garantía
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
            <CheckCircle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-300">
                Primer mes de soporte incluido
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
            <CheckCircle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-300">El sistema es tuyo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-serif text-amber-400 mb-4">
          ¡Gracias por tu confianza!
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Damara, estoy muy entusiasmado con la posibilidad de trabajar con Arca
          Pilates Studio.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Nos hablamos el viernes 30 de enero. ¡Que tengas excelente día!
        </p>
      </section>

      <div className="border-t-2 border-amber-500 pt-6 mt-8">
        <div className="text-center">
          <p className="font-serif font-bold text-amber-400 text-lg mb-2">
            Sebastián López
          </p>
          <p className="text-gray-400 mb-1">Desarrollador Web</p>
          <p className="text-gray-400 mb-1">662 103 1074</p>
          <p className="text-gray-400">sebastianlopez1935@gmail.com</p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-amber-900 bg-opacity-20 border border-amber-700 rounded text-sm text-gray-300">
        <p className="font-semibold mb-1">Para guardar como PDF:</p>
        <p>Presiona Ctrl+P o Cmd+P y selecciona Guardar como PDF</p>
      </div>
    </div>
  );
};

export default PropuestaArcaPilates;
