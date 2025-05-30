import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle,
  Clock,
  Target,
  Brain,
  Zap,
  BarChart3,
  ListChecks,
  Award,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import VideoPlayer from "@/components/video-player"
import VisitorCounter from "@/components/visitor-counter"
import TestimonialCard from "@/components/testimonial-card"
import FAQItem from "@/components/faq-item"
import AnimatedBackground from "@/components/animated-background"
import GlowingText from "@/components/glowing-text"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1a14] text-white">
      {/* Visitor Counter - Only visible when there are visitors */}
      <VisitorCounter />

      {/* Hero Section - Redesigned Header */}
      <header className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071510] via-[#0a1a14] to-[#0a1a14] z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 z-0"></div>

        {/* Animated Particles Background (desktop only) */}
        <AnimatedBackground />

        {/* Diagonal Accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00e676]/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#00e676]/5 rounded-full blur-3xl z-0"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Logo with glow effect */}
            <div className="flex justify-center mb-8 relative">
              <div className="relative">
                <Image src="/images/logo.png" alt="Método 21" width={220} height={220} className="relative z-10" />
                <div className="absolute inset-0 blur-xl bg-[#00e676]/20 z-0 scale-110" aria-hidden="true"></div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block">Domine sua</span>
                <span className="block">
                  <GlowingText className="text-[#00e676]">Produtividade</GlowingText>
                </span>
                <span className="block">
                  em <GlowingText className="text-[#00e676]">21 Dias</GlowingText>
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Um plano prático para eliminar a procrastinação, manter o foco e atingir suas metas com clareza e
                consistência.
              </p>
            </div>

            {/* Video Player */}
            <div className="mb-10 transform hover:scale-[1.01] transition-transform duration-300">
              <VideoPlayer />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
  <Link
    href="https://go.tribopay.com.br/resomds55z"
    className="px-8 py-5 bg-[#00e676] hover:bg-[#00c853] text-black font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,230,118,0.5)] md:hover:shadow-[0_0_30px_rgba(0,230,118,0.7)]"
  >
    Comece Agora por Apenas R$29,90
  </Link>
  <Link
    href="#conteudo"
    className="px-8 py-5 bg-transparent border-2 border-[#00e676] hover:bg-[#00e676]/10 text-white font-bold rounded-lg text-lg transition-all md:hover:scale-105"
  >
    Ver Conteúdo
  </Link>
</div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
              <a
                href="#conteudo"
                className="flex flex-col items-center text-gray-400 hover:text-[#00e676] transition-colors"
              >
                <span className="text-sm mb-2">Descubra mais</span>
                <ChevronDown className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Benefícios Rápidos */}
      <section className="py-16 bg-[#071510]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-[#0a1a14] rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <Clock className="w-12 h-12 text-[#00e676] mb-4" />
              <h3 className="text-xl font-bold mb-2">Fim da Procrastinação</h3>
              <p className="text-gray-400">
                Técnicas práticas para vencer a procrastinação e aumentar sua produtividade diária.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#0a1a14] rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <Target className="w-12 h-12 text-[#00e676] mb-4" />
              <h3 className="text-xl font-bold mb-2">Foco Absoluto</h3>
              <p className="text-gray-400">Aprenda a manter o foco nas tarefas importantes e eliminar distrações.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#0a1a14] rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <BarChart3 className="w-12 h-12 text-[#00e676] mb-4" />
              <h3 className="text-xl font-bold mb-2">Resultados Reais</h3>
              <p className="text-gray-400">Transforme sua rotina e alcance resultados concretos em apenas 21 dias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Programático */}
      <section id="conteudo" className="py-20 bg-[#0a1a14]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Conteúdo Programático</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Um programa estruturado em 3 semanas para transformar sua produtividade e eliminar a procrastinação de
              vez.
            </p>
          </div>

          {/* Semana 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#071510] p-8 rounded-xl border border-[#00e676]/20 md:hover:border-[#00e676]/50 md:hover:shadow-[0_5px_30px_rgba(0,230,118,0.15)] transition-all">
                <h3 className="text-2xl font-bold mb-6 text-[#00e676]">Semana 1 – Reprogramação Mental</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Brain className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Quebre o Ciclo da Procrastinação</h4>
                      <p className="text-gray-400">
                        Entenda os gatilhos que te levam a procrastinar e aprenda técnicas para quebrar esse ciclo.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Target className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Como Criar Metas Claras e Realistas</h4>
                      <p className="text-gray-400">
                        Defina objetivos alcançáveis e crie um plano de ação eficiente para realizá-los.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <ListChecks className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Planejamento Diário – Estruturando Seu Dia</h4>
                      <p className="text-gray-400">
                        Aprenda a organizar seu dia para maximizar a produtividade e reduzir o estresse.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-64 h-64 md:hover:transform md:hover:scale-110 transition-transform duration-500">
                <Image src="/images/semana1.png" alt="Semana 1" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Semana 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:hover:transform md:hover:scale-110 transition-transform duration-500">
                <Image src="/images/semana2.png" alt="Semana 2" fill className="object-contain" />
              </div>
            </div>
            <div>
              <div className="bg-[#071510] p-8 rounded-xl border border-[#00e676]/20 md:hover:border-[#00e676]/50 md:hover:shadow-[0_5px_30px_rgba(0,230,118,0.15)] transition-all">
                <h3 className="text-2xl font-bold mb-6 text-[#00e676]">Semana 2 – Ação Diária</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Zap className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Técnicas de Produtividade Essenciais</h4>
                      <p className="text-gray-400">
                        Domine métodos comprovados como Pomodoro, GTD e outros para aumentar sua eficiência.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Target className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Mantendo o Foco em Tarefas Importantes</h4>
                      <p className="text-gray-400">
                        Estratégias para identificar prioridades e manter o foco no que realmente importa.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Award className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Poder das Pequenas Vitórias</h4>
                      <p className="text-gray-400">
                        Como celebrar conquistas diárias para manter a motivação e o progresso constante.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Semana 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#071510] p-8 rounded-xl border border-[#00e676]/20 md:hover:border-[#00e676]/50 md:hover:shadow-[0_5px_30px_rgba(0,230,118,0.15)] transition-all">
                <h3 className="text-2xl font-bold mb-6 text-[#00e676]">Semana 3 – Manutenção e Consolidação</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Revisão das Técnicas Aprendidas</h4>
                      <p className="text-gray-400">
                        Consolidação de todo o conhecimento adquirido nas semanas anteriores.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Brain className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Como Evitar a Recaída na Procrastinação</h4>
                      <p className="text-gray-400">
                        Estratégias para manter os novos hábitos e evitar voltar aos padrões antigos.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <BarChart3 className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Plano de Ação para os Próximos 21 Dias</h4>
                      <p className="text-gray-400">
                        Criação de um plano personalizado para continuar evoluindo após o programa.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-64 h-64 md:hover:transform md:hover:scale-110 transition-transform duration-500">
                <Image src="/images/semana3.png" alt="Semana 3" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* CTA Meio */}
          <div className="mt-16 text-center">
  <Link
    href="https://go.tribopay.com.br/resomds55z"
    className="inline-flex items-center px-8 py-4 bg-[#00e676] hover:bg-[#00c853] text-black font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,230,118,0.5)] md:hover:shadow-[0_0_25px_rgba(0,230,118,0.7)]"
  >
    Quero Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
  </Link>
</div>
        </div>
      </section>

      {/* Depoimentos - Estilo Instagram */}
      <section className="py-20 bg-[#071510]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O Que Dizem Nossos Alunos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja como o Método 21 transformou a vida de pessoas reais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <TestimonialCard
              name="Carlos Silva"
              role="Advogado"
              content="Sempre tive dificuldade em manter o foco nos meus projetos. Com o Método 21, consegui estabelecer uma rotina produtiva e finalmente concluí projetos que estavam parados há meses. Recomendo demais!"
              rating={5}
              imageSrc="./images/Carlos.jpeg"
            />

            <TestimonialCard
              name="Ana Oliveira"
              role="Estudante de Medicina"
              content="Como estudante de medicina, tenho uma rotina muito puxada. O Método 21 me ajudou a organizar melhor meu tempo de estudo e a eliminar a procrastinação. Meu rendimento nas provas melhorou significativamente!"
              rating={5}
              imageSrc="./images/Ana Oliveira.jpeg"
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-[#0a1a14]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O Que Você Vai Receber</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tudo o que você precisa para transformar sua produtividade em apenas 21 dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0a1a14] p-6 rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <div className="w-12 h-12 bg-[#00e676]/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Acesso Instantâneo</h3>
              <p className="text-gray-400">Comece imediatamente após a compra, sem esperas.</p>
            </div>
            <div className="bg-[#0a1a14] p-6 rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <div className="w-12 h-12 bg-[#00e676]/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Metodologia Prática</h3>
              <p className="text-gray-400">Conteúdo direto ao ponto, sem enrolação.</p>
            </div>
            <div className="bg-[#0a1a14] p-6 rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <div className="w-12 h-12 bg-[#00e676]/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Acompanhamento Diário</h3>
              <p className="text-gray-400">Plano estruturado para cada um dos 21 dias.</p>
            </div>
            <div className="bg-[#0a1a14] p-6 rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <div className="w-12 h-12 bg-[#00e676]/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Acesso Vitalício</h3>
              <p className="text-gray-400">Pague uma vez e tenha acesso para sempre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preço e CTA Final */}
      <section id="comprar" className="py-20 bg-[#0a1a14]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#071510] to-[#0a1a14] p-8 md:p-12 rounded-2xl border border-[#00e676]/30 shadow-[0_0_30px_rgba(0,230,118,0.1)] md:hover:shadow-[0_0_40px_rgba(0,230,118,0.2)] transition-all">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Invista em Sua Produtividade</h2>
              <p className="text-xl text-gray-300">Transforme sua rotina e elimine a procrastinação com o Método 21</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
              <div className="text-center md:text-left">
                <div className="mb-2">
                  <span className="text-gray-400 text-lg line-through">De R$97,00</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-4xl md:text-6xl font-bold text-white">R$29,90</span>
                  <span className="bg-[#00e676] text-black px-3 py-1 rounded-full text-sm font-bold">
                    Pagamento único
                  </span>
                </div>
                <p className="text-gray-400 mt-2">Acesso vitalício a todo o conteúdo</p>
              </div>

              <div className="w-full md:w-auto">
  <Link
    href="https://go.tribopay.com.br/resomds55z"
    className="w-full md:w-auto px-10 py-5 bg-[#00e676] hover:bg-[#00c853] text-black font-bold rounded-lg text-xl transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,230,118,0.5)] md:hover:shadow-[0_0_25px_rgba(0,230,118,0.7)] flex items-center justify-center"
  >
    Acesso Imediato por R$29,90
  </Link>
  <p className="text-center text-gray-400 text-sm mt-3">Pagamento seguro via PIX ou cartão</p>
</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Acesso instantâneo a todo o conteúdo</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Metodologia prática e direta ao ponto</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Plano de 21 dias estruturado</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Garantia de 7 dias ou seu dinheiro de volta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Design Melhorado */}
      <section className="py-20 bg-[#071510]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Tire suas dúvidas sobre o Método 21</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem
              question="Quanto tempo tenho acesso ao conteúdo?"
              answer="O acesso é vitalício. Você paga apenas uma vez e tem acesso para sempre ao conteúdo."
            />

            <FAQItem
              question="Como funciona a garantia?"
              answer="Oferecemos garantia de 7 dias. Se você não ficar satisfeito, devolvemos 100% do seu investimento, sem questionamentos."
            />

            <FAQItem
              question="Preciso ter conhecimento prévio?"
              answer="Não, o método foi desenvolvido para iniciantes e também para quem já tentou outras técnicas sem sucesso. Começamos do zero."
            />

            <FAQItem
              question="Quanto tempo preciso dedicar por dia?"
              answer="Recomendamos dedicar pelo menos 30 minutos por dia para aplicar as técnicas e ver resultados. O importante é a consistência."
            />

            <FAQItem
              question="O método funciona para qualquer área?"
              answer="Sim! As técnicas do Método 21 são universais e podem ser aplicadas em qualquer área: estudos, trabalho, projetos pessoais, empreendedorismo, etc."
            />

            <FAQItem
              question="Como recebo o acesso ao conteúdo?"
              answer="Imediatamente após a confirmação do pagamento, você será redirecionado à página de obrigado, a página mostrará as intruções de acesso à plataforma onde o conteúdo está disponível."
            />
          </div>

          {/* CTA Final */}
          <div className="mt-16 text-center">
  <Link
    href="https://go.tribopay.com.br/resomds55z"
    className="inline-flex items-center px-8 py-4 bg-[#00e676] hover:bg-[#00c853] text-black font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,230,118,0.5)] md:hover:shadow-[0_0_25px_rgba(0,230,118,0.7)]"
  >
    Mude Sua Rotina em 21 Dias <ArrowRight className="ml-2 w-5 h-5" />
  </Link>
</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#0a1a14] border-t border-[#00e676]/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image src="/images/logo.png" alt="Método 21" width={120} height={120} />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Método 21. Todos os direitos reservados.
              </p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <Link href="#" className="text-gray-400 hover:text-[#00e676] text-sm">
                  Termos de Uso
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#00e676] text-sm">
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
