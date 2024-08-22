import Botao from '../../components/Botao';
import Card from '../../components/Card';
import Titulo from '../../components/Titulo';
import Perfil from '../../components/Perfil';
import Topico from '../../components/Topico';
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className="container__video">
        <Botao 
          link="https://www.google.com.br"
          texto="ENTRE EM CONTATO"
          cor="botao-escuro"
        />

        <p>Lidar com processos judiciais, contratos mal elaborados, processos trabalhistas, LGPD, dúvidas jurídicas e outros problemas judiciais podem ser um fardo para sua empresa. <span>Imagine ter um time jurídico especializado que te blinde de riscos e te impulsione para o sucesso?</span></p>
      </div>

      <div className="container__faixa">
        <p>Somos o Escritório de Advocacia Valadares e Fueta Advogados.
        <span> Seu escudo jurídico no mundo empresarial.</span></p>
      </div>

      <div className="container__solucoes">
        <Titulo titulo="SOLOÇÕES PERSONALIZADAS" cor="titulo-escuro"/>
        <div className="container__solucoes__cards">
          <div className="container__solucoes__cards__linha">
            <Card 
              icone="/departamento.svg"
              alt="icone em vetor de balões de conversa"
              titulo="SEU DEPARTAMENTO JURÍDICO"
              descricao="Assessoria jurídica consultiva, preventiva e contenciosa para auxílio nas tomadas de decisões do dia a dia empresarial."
            />
            <Card 
              icone="/startups.svg"
              alt="icone em vetor de gráfico"
              titulo="STARTUPS"
              descricao="Possuímos conhecimento desse modelo de negócio e somos capazes de buscar estratégias jurídicas e mecanismos de desenvolvimento com base legal e de forma colaborativa."
            />
          </div>
          <div className="container__solucoes__cards__linha">
            <Card 
              icone="/representacao.svg"
              alt="icone em vetor de um martelo"
              titulo="REPRESENTAÇÃO JURÍDICA"
              descricao="Defesa eficiente dos seus direitos em processos judiciais, com advogados experientes em diversas áreas do direito (Direito Empresarial, Direito do Consumidor, Direito Trabalhista e Direito Sucessório)."
            />
            <Card 
              icone="/digital.svg"
              alt="icone em vetor de carrinho de compras"
              titulo="EMPREENDEDORISMO DIGITAL"
              descricao="Assessoria jurídica em relações trabalhistas, direito do consumidor, direito empresarial, direito digital e demais direitos aplicados ao ambiente digital. "
            />
          </div>
          <div className="container__solucoes__cards__linha">
            <Card 
              icone="/contratos.svg"
              alt="icone em vetor de folhas de papeis"
              titulo="CONTRATOS"
              descricao="Assessoria personalizada ao modelo de negócio (online/offline) definindo direitos e obrigações."
            />
            <Card 
              icone="/materiais.svg"
              alt="icone em vetor de folhas de papeis"
              titulo="MATERIAIS COMPLEMENTARES"
              descricao="E-books, artigos e outros materiais informativos sobre temas jurídicos relevantes para auxiliar na tomada de decisões da sua equipe."
            />
          </div>
        </div>
        <Botao 
          link="https://www.google.com.br"
          texto="ENTRE EM CONTATO"
          cor="botao-escuro"
        />
      </div>

      <div className="container__quemsomos">
        <Titulo titulo="CONHEÇA QUEM SOMOS" cor="titulo-escuro"/>
        <div className="container__quemsomos__texto">
          <p>
          Nossa equipe é liderada por sócios com mais de 15 anos de experiência na advocacia.<br/><br />
          No Escritório Valadares e Fueta Advogados, acreditamos que o sucesso do seu negócio  está diretamente ligado à segurança jurídica de suas ações. Por isso, oferecemos serviços especializados em direito empresarial e direito digital, com foco em proteger seus  resultados.<br /><br />
          Acreditamos também em um atendimento personalizado, que compreenda as necessidades e desafios específicos do seu negócio.
          </p>
          <img src="/mosaico.svg" alt="" />
        </div>
        <Link href="https://www.google.com.br" className="container__quemsomos__link">
          <div className="container__quemsomos__link__instagram" >
            <img src="/logo_instagram.svg" alt="" />
            <p>valadaresefueta.adv</p>
          </div>
        </Link>
      </div>

      <div className="container__socios">
        <Titulo titulo="SÓCIOS" cor="titulo-escuro"/>
        <div className="container__socios__perfis">
          <Perfil 
            foto="/cesar.svg"
            alt="foto de perfil do sócio César"
            nome="Cesar Fueta"
            descricao="Advogado desde 2001 e advogado de empresa pública desde 2005. Inscrito na OAB/RJ sob n° 113.167 e na OAB/SP sob o n° 460.093-A. Graduado em Direito pela UFRJ em 2001, pós-graduado MBA em Direito Empresarial pela FGV em 2004 e pós-graduado em Direito Digital pela faculdade CERS em 2019."
          />
          <Perfil 
            foto="/cesar.svg"
            alt="foto de perfil do sócio César"
            nome="Cesar Fueta"
            descricao="Advogado desde 2001 e advogado de empresa pública desde 2005. Inscrito na OAB/RJ sob n° 113.167 e na OAB/SP sob o n° 460.093-A. Graduado em Direito pela UFRJ em 2001, pós-graduado MBA em Direito Empresarial pela FGV em 2004 e pós-graduado em Direito Digital pela faculdade CERS em 2019."
          />
        </div>
        <Botao 
          link="https://www.google.com.br"
          texto="ENTRE EM CONTATO"
          cor="botao-escuro"
        />
      </div>

      <div className="container__beneficios">
        <Titulo titulo="POR QUE CONTRATAR NOSSA ASSESSORIA?" cor="titulo-claro"/>
        <div className="container__beneficios__topicos">
          <Topico 
            topico="Expertise com pequenas e médias empresas:"
            descricao=" Nossa equipe é composta por advogados especializados em direito empresarial e direito digital, com profundo conhecimento no mundo dos negócios e seus desafios."
          />
          <Topico 
            topico="Expertise com pequenas e médias empresas:"
            descricao=" Nossa equipe é composta por advogados especializados em direito empresarial e direito digital, com profundo conhecimento no mundo dos negócios e seus desafios."
          />
          <Topico 
            topico="Expertise com pequenas e médias empresas:"
            descricao=" Nossa equipe é composta por advogados especializados em direito empresarial e direito digital, com profundo conhecimento no mundo dos negócios e seus desafios."
          />
          <Topico 
            topico="Expertise com pequenas e médias empresas:"
            descricao=" Nossa equipe é composta por advogados especializados em direito empresarial e direito digital, com profundo conhecimento no mundo dos negócios e seus desafios."
          />
        </div>
        <Botao 
          link="https://www.google.com.br"
          texto="ENTRE EM CONTATO"
          cor="botao-claro"
        />
      </div>
      <div className="container__formulario">
        <div className="container__formulario__titulo">
          <Titulo titulo="RECEBA MATERIAIS GRATUITOS SOBRE DIREITO PARA O SEU NEGÓCIO" cor="titulo-escuro"/>
        </div>
        <form className="container__formulario__form">
          <div className="container__formulario__form__nome">
            <label htmlFor="nome">Nome<span>*</span></label>
            <input type="text" id="nome" name="nome" />
          </div>
          <div className="container__formulario__form__empresa">
            <label htmlFor="empresa">Empresa<span>*</span></label>
            <input type="text" id="empresa" name="empresa" />
          </div>
          <div className="container__formulario__form__cargo">
            <label htmlFor="cargo">Cargo</label>
            <input type="text" id="cargo" name="cargo" />
          </div>
          <div className="container__formulario__form__email">
            <label htmlFor="email">E-mail<span>*</span></label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="container__formulario__form__telefone">
            <label htmlFor="telefone">Telefone<span>*</span></label>
            <input type="text" id="telefone" name="telefone" />
          </div>
          {/* <button type="submit">Enviar</button> */}
          <Botao 
            link="https://www.google.com.br"
            texto="ENTRE EM CONTATO"
            cor="botao-escuro"
          />
        </form>
      </div>

      

      

      

      
    </main>
  )
}

