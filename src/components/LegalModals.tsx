import { X } from "lucide-react";

const LegalModals = () => {
  return (
    <>
      {/* Privacy Policy Modal */}
      <div
        id="privacy-modal"
        className="hidden fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && e.currentTarget.classList.add("hidden")}
      >
        <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-display text-xl font-bold">Política de Privacidad</h2>
            <button
              onClick={() => document.getElementById("privacy-modal")?.classList.add("hidden")}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[60vh] text-sm text-muted-foreground space-y-4">
            <p><strong className="text-foreground">1. Responsable del tratamiento</strong><br />
            El responsable del tratamiento de tus datos personales es el titular de esta web.</p>
            
            <p><strong className="text-foreground">2. Datos que recopilamos</strong><br />
            Recopilamos datos de navegación, dirección IP, y datos que nos proporciones voluntariamente a través de formularios de contacto o compra.</p>
            
            <p><strong className="text-foreground">3. Finalidad del tratamiento</strong><br />
            Utilizamos tus datos para procesar pedidos, gestionar consultas, mejorar nuestros servicios y enviarte comunicaciones comerciales si das tu consentimiento.</p>
            
            <p><strong className="text-foreground">4. Base legal</strong><br />
            El tratamiento de tus datos se basa en tu consentimiento, la ejecución de un contrato, o nuestro interés legítimo.</p>
            
            <p><strong className="text-foreground">5. Derechos del usuario</strong><br />
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad contactándonos.</p>
            
            <p><strong className="text-foreground">6. Cookies</strong><br />
            Utilizamos cookies técnicas y analíticas. Puedes configurar tu navegador para rechazarlas.</p>
            
            <p><strong className="text-foreground">7. Conservación de datos</strong><br />
            Conservamos tus datos durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos.</p>
          </div>
        </div>
      </div>

      {/* Legal Notice Modal */}
      <div
        id="legal-modal"
        className="hidden fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && e.currentTarget.classList.add("hidden")}
      >
        <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-display text-xl font-bold">Aviso Legal</h2>
            <button
              onClick={() => document.getElementById("legal-modal")?.classList.add("hidden")}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[60vh] text-sm text-muted-foreground space-y-4">
            <p><strong className="text-foreground">1. Identificación del titular</strong><br />
            En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que el titular de esta web es una persona física/jurídica.</p>
            
            <p><strong className="text-foreground">2. Objeto</strong><br />
            Esta web tiene por objeto la venta de accesos a servicios digitales premium.</p>
            
            <p><strong className="text-foreground">3. Propiedad intelectual</strong><br />
            Todos los contenidos de esta web (textos, imágenes, marcas, logos) son propiedad del titular o de terceros que han autorizado su uso.</p>
            
            <p><strong className="text-foreground">4. Condiciones de uso</strong><br />
            El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos en esta web.</p>
            
            <p><strong className="text-foreground">5. Exclusión de responsabilidad</strong><br />
            El titular no se hace responsable de los daños derivados del uso de esta web ni de las decisiones tomadas a partir de la información proporcionada.</p>
            
            <p><strong className="text-foreground">6. Legislación aplicable</strong><br />
            Las presentes condiciones se rigen por la legislación española.</p>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      <div
        id="terms-modal"
        className="hidden fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && e.currentTarget.classList.add("hidden")}
      >
        <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-display text-xl font-bold">Términos y Condiciones</h2>
            <button
              onClick={() => document.getElementById("terms-modal")?.classList.add("hidden")}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[60vh] text-sm text-muted-foreground space-y-4">
            <p><strong className="text-foreground">1. Objeto</strong><br />
            Estos términos regulan la compra de accesos a servicios digitales premium (suscripciones a plataformas como ChatGPT, Canva, etc.) ofrecidos en esta web.</p>
            
            <p><strong className="text-foreground">2. Proceso de compra</strong><br />
            Para realizar una compra, el usuario debe contactar a través de WhatsApp, Telegram o Forocoches. El pago se acordará directamente con el vendedor y la entrega del acceso se realizará de forma inmediata tras la confirmación del pago.</p>
            
            <p><strong className="text-foreground">3. Productos digitales</strong><br />
            Los productos ofrecidos son accesos a cuentas premium de servicios de terceros. No somos propietarios ni afiliados oficiales de dichos servicios. Vendemos accesos legítimos obtenidos de forma autorizada.</p>
            
            <p><strong className="text-foreground">4. Precios</strong><br />
            Todos los precios mostrados incluyen IVA cuando aplique. Los precios pueden variar sin previo aviso. El precio aplicable será el vigente en el momento de la compra.</p>
            
            <p><strong className="text-foreground">5. Garantía y soporte</strong><br />
            Ofrecemos soporte 24/7 para cualquier incidencia con tu cuenta. Si experimentas problemas con tu acceso, contáctanos y lo solucionaremos lo antes posible.</p>
            
            <p><strong className="text-foreground">6. Política de reembolsos</strong><br />
            Debido a la naturaleza digital e inmediata de los productos, no se aceptan devoluciones una vez entregado el acceso. En caso de problemas técnicos no resolubles, se evaluará cada caso individualmente.</p>
            
            <p><strong className="text-foreground">7. Uso de los accesos</strong><br />
            El usuario se compromete a hacer un uso personal de los accesos adquiridos. Está prohibido compartir, revender o transferir los accesos a terceros.</p>
            
            <p><strong className="text-foreground">8. Responsabilidad</strong><br />
            No nos hacemos responsables de cambios en los términos de servicio de las plataformas originales ni de suspensiones de cuentas derivadas del incumplimiento de sus políticas por parte del usuario.</p>
            
            <p><strong className="text-foreground">9. Modificaciones</strong><br />
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en la web.</p>
            
            <p><strong className="text-foreground">10. Contacto</strong><br />
            Para cualquier consulta sobre estos términos, puedes contactarnos a través de WhatsApp, Telegram o Forocoches.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalModals;
